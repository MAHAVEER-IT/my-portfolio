# Sow & Grow · Smart Agriculture Companion

<div align="center">

![Hero banner showing a gradient field](https://img.shields.io/badge/Platform-Flutter%203.8+-02569B?logo=flutter&logoColor=white&style=for-the-badge)
![License](https://img.shields.io/badge/Status-Prototype%20Ready-43A047?style=for-the-badge)
![Coverage](https://img.shields.io/badge/Focus-Rural%20Farmers-795548?style=for-the-badge)

<h3>A voice-friendly, AI-guided farm assistant delivering crop insights, livestock care, and community wisdom anywhere.</h3>

![Divider](https://img.shields.io/badge/-_-8BC34A?style=flat)

</div>

## Table of Contents
- [Why Sow & Grow](#why-sow--grow)
- [Feature Showcase](#feature-showcase)
- [Architecture at a Glance](#architecture-at-a-glance)
- [Quickstart](#quickstart)
- [Configuration](#configuration)
- [Module Explorer](#module-explorer)
- [Tech Stack](#tech-stack)
- [Roadmap](#roadmap)
- [Screenshots](#screenshots)
- [Team](#team)

---

## Why Sow & Grow
- Anchors the entire farm workflow: discover, diagnose, treat, and learn
- Designed for low-literacy, low-bandwidth environments with voice-first UX
- Blends human expertise and AI: local vets, community posts, and Gemini-powered insights
- Keeps farmers in control with offline resilience and modular data ownership

---

## Feature Showcase

<table>
	<tr>
		<td><strong>FarmHelper AI</strong><br>Gemini Flash 2.0 chat, speech-to-text, text-to-speech, multilingual replies, image-based plant diagnosis.</td>
		<td><strong>AgriTalks Hub</strong><br>Blog feed with inline translation, weather tiles, reactions, comment drawer, and curated agri content.</td>
	</tr>
	<tr>
		<td><strong>Livestocare Suite</strong><br>Livestock registry, vaccination timelines, recurring reminders, SMS outreach, offline caching roadmap.</td>
		<td><strong>Disease Heatmap</strong><br>Flutter Map + OpenStreetMap tiles, plant vs. animal filters, month selector, GPS centering, detail overlays.</td>
	</tr>
	<tr>
		<td><strong>Secure Onboarding</strong><br>FarmCare REST auth, SharedPreferences session store, local_auth bridge, step-by-step splash routing.</td>
		<td><strong>Community Chat (WIP)</strong><br>Socket scaffolding for 1:1 and channel rooms, QR sharing, doctor directory and PDP flows.</td>
	</tr>
</table>

---

## Architecture at a Glance
- **Presentation** · Flutter Material 3, Provider for state, animated microinteractions, IndexedStack navigation
- **Domain** · Service layer that orchestrates FarmCare APIs, Gemini AI, and weather endpoints with DTO models
- **Data** · SharedPreferences persistence, Hive groundwork, REST + websocket connectivity, geolocation services
- **Experience** · Voice controls, multi-language translations, dynamic theming inspired by natural palettes

---

## Quickstart
1. Install Flutter 3.8.x or newer and configure platform SDKs
2. Clone the repository and open it in your preferred IDE
3. Run `flutter pub get`
4. Provide environment secrets (example: `flutter run --dart-define=GEMINI_API_KEY=your_key`)
5. Launch on a device or emulator with network access to your FarmCare backend

---

## Configuration
- Gemini key is injected via `String.fromEnvironment('GEMINI_API_KEY')`; pass it with `--dart-define` on every build
- FarmCare REST endpoints default to `https://farmcare-backend-new.onrender.com/api/v1`; adjust in the auth and service layers as needed
- Firebase scaffolding is in place—add `GoogleService-Info.plist` and `google-services.json` for push-ready builds
- Optional: configure feature flags for experimental sockets, offline cache, and TensorFlow Lite integration

---

## Module Explorer
- AI ChatBot · conversational UI, speech stack, Gemini orchestration, image attachments, TTS playback
- Blog · community feed layout, translation dialogs, weather sidebar, comment sheets, drawer navigation
- Vet_Vac · livestock models, CRUD flows, vaccination schedule maths, reminders, SMS launcher
- Map_diseise · heatmap rendering, map service adapters, disease point overlays, filter and detail panels
- Chat · channel and direct messaging scaffolding with socket services and QR utilities
- utils · localisation assets, permission helpers, avatar generation, shared widgets

---

## Tech Stack
- **Frameworks** · Flutter, Dart, Provider, Material 3
- **AI & Data** · Google Generative AI (Gemini Flash 2.0), TensorFlow Lite (planned), OpenWeather services
- **Storage & Sync** · Firebase (auth, storage), SharedPreferences, Hive (roadmap)
- **Hardware & Device** · speech_to_text, flutter_tts, geolocator, local_auth, mobile_scanner, qr_flutter, flutter_sound
- **Maps** · Flutter Map, OpenStreetMap tiles, geocoding, latlong2

---

## Roadmap
- [ ] Push notifications for vaccination reminders and helpdesk chat
- [ ] Complete websocket chat with moderation controls and typing presence
- [ ] Offline-first caches for blog posts and livestock records via Hive boxes
- [ ] Expanded localisation packs and onboarding walkthroughs for new farmers
- [ ] Automated CI/CD with `flutter test`, `flutter analyze`, and release pipelines

---

## Screenshots
- Preview album: https://drive.google.com/drive/folders/1Wtnws7KfFGfdtW0MnelPB_bsFw71JwVl?usp=drive_link

---

## Team
- Core creators: K. Mahaveer · V. Lingesh · K. Saravanan · Akash

<div align="center">

![Footer](https://img.shields.io/badge/Grown%20with-%E2%9C%A8%20Flutter%20%26%20AI-4CAF50?style=for-the-badge)

“Empowering farmers with data, community, and a voice in their pocket.”

</div>
