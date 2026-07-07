import { NextResponse } from "next/server";
import embeddingsData from "@/lib/embeddings.json";

function dotProduct(vecA, vecB) {
  let product = 0;
  for (let i = 0; i < vecA.length; i++) {
    product += vecA[i] * vecB[i];
  }
  return product;
}

function magnitude(vec) {
  let sum = 0;
  for (let i = 0; i < vec.length; i++) {
    sum += vec[i] * vec[i];
  }
  return Math.sqrt(sum);
}

function cosineSimilarity(vecA, vecB) {
  const magA = magnitude(vecA);
  const magB = magnitude(vecB);
  if (magA === 0 || magB === 0) return 0.0;
  return dotProduct(vecA, vecB) / (magA * magB);
}

const CONTACT_DETAILS_FALLBACK = (
  "\n\nIf you want to discuss opportunities, collaborate on a project, or contact me directly, " +
  "feel free to reach out via:\n" +
  "- **Email**: [mahaveer.k2023it@sece.ac.in](mailto:mahaveer.k2023it@sece.ac.in)\n" +
  "- **Phone**: +91 63748 27794\n" +
  "- **LinkedIn**: [linkedin.com/in/mahaveer-k](https://linkedin.com/in/mahaveer-k)\n" +
  "- **GitHub**: [github.com/MAHAVEER-IT](https://github.com/MAHAVEER-IT)\n" +
  "- **Portfolio Contact Form**: [mahaveer.live/#contact](https://www.mahaveer.live/#contact)"
);

export async function POST(request) {
  try {
    const body = await request.json();
    const { question } = body;

    if (!question || !question.trim()) {
      return NextResponse.json(
        { error: "Question query is required." },
        { status: 400 }
      );
    }

    const geminiApiKey = process.env.GEMINI_API_KEY;
    if (!geminiApiKey) {
      return NextResponse.json(
        { error: "GEMINI_API_KEY is not configured on the server." },
        { status: 500 }
      );
    }

    // 1. Generate query embedding using Gemini REST API
    const embedUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-embedding-001:embedContent?key=${geminiApiKey}`;
    const embedRes = await fetch(embedUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: { parts: [{ text: question }] },
        taskType: "RETRIEVAL_QUERY"
      })
    });

    if (!embedRes.ok) {
      const embedError = await embedRes.text();
      console.error("Gemini Embed API Error:", embedError);
      return NextResponse.json(
        { error: "Failed to generate query embedding." },
        { status: 500 }
      );
    }

    const embedData = await embedRes.json();
    const queryVector = embedData?.embedding?.values;

    if (!queryVector) {
      return NextResponse.json(
        { error: "Invalid embedding response from Gemini." },
        { status: 500 }
      );
    }

    // 2. Perform Cosine Similarity against local embeddings
    const scoredDocs = embeddingsData.map((item) => {
      const similarity = cosineSimilarity(queryVector, item.embedding);
      return {
        document: item.document,
        metadata: item.metadata,
        score: similarity
      };
    });

    // Sort descending and slice top 3
    scoredDocs.sort((a, b) => b.score - a.score);
    const topResults = scoredDocs.slice(0, 3);

    // Combine retrieved contexts
    let contextText = "";
    topResults.forEach((item) => {
      const source = item.metadata?.source || "unknown";
      contextText += `--- Source: ${source} ---\n${item.document}\n\n`;
    });

    // 3. Construct prompt and instruction
    const systemInstruction = (
      "You are the personal AI chatbot assistant for Mahaveer K's portfolio website.\n" +
      "Your goal is to answer questions about Mahaveer K's background, education, projects, skills, and experience.\n\n" +
      "RULES:\n" +
      "1. Answer the question using ONLY the provided CONTEXT below. Do not use outside knowledge or hallucinate.\n" +
      "2. If the context does not contain the answer, answer politely that you do not know, and set the confidence score low.\n" +
      "3. Provide a confidence score between 0.0 and 1.0 (float).\n" +
      "4. Quote the correct source files in the citations array.\n\n" +
      `CONTEXT:\n${contextText}`
    );

    const chatUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${geminiApiKey}`;
    
    // Request response with structured JSON schema
    const chatRes = await fetch(chatUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: `User Question: ${question}` }] }],
        systemInstruction: { parts: [{ text: systemInstruction }] },
        generationConfig: {
          responseMimeType: "application/json",
          responseSchema: {
            type: "OBJECT",
            properties: {
              answer: { type: "STRING", description: "The answer to the user's question, formulated ONLY using the context. If the context doesn't contain enough information, state that you don't know." },
              citations: { type: "ARRAY", items: { type: "STRING" }, description: "List of sources/file names from the context metadatas used to answer." },
              confidence: { type: "NUMBER", description: "Confidence rating between 0.0 and 1.0 indicating how accurately the question can be answered using the provided context." }
            },
            required: ["answer", "citations", "confidence"]
          }
        }
      })
    });

    if (!chatRes.ok) {
      const chatError = await chatRes.text();
      console.error("Gemini Chat API Error:", chatError);
      return NextResponse.json(
        { error: "Failed to generate generative chat response." },
        { status: 500 }
      );
    }

    const chatData = await chatRes.json();
    const resultText = chatData?.candidates?.[0]?.content?.parts?.[0]?.text;
    
    if (!resultText) {
      return NextResponse.json(
        { error: "Invalid chat response structure from Gemini." },
        { status: 500 }
      );
    }

    const result = JSON.parse(resultText);

    // 4. Apply confidence threshold fallback check
    const confidence = result.confidence || 0.0;
    if (confidence < 0.7) {
      result.answer = (
        "I'm sorry, I don't have enough details in Mahaveer's portfolio records to answer that accurately. " +
        "You can get in touch with Mahaveer directly to ask this question!" + CONTACT_DETAILS_FALLBACK
      );
      result.citations = [];
    }

    return NextResponse.json(result);

  } catch (error) {
    console.error("Next.js RAG API endpoint error:", error);
    return NextResponse.json(
      { error: "Internal Server Error." },
      { status: 500 }
    );
  }
}
