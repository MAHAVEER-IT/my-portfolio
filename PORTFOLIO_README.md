# Mahaveer's Portfolio

A stunning, animated portfolio website built with Next.js and Tailwind CSS.

## 🎨 Features

- Modern, responsive design with light color scheme
- Smooth animations and transitions
- Component-based architecture
- Glassmorphism effects
- Interactive cursor follower
- Smooth scroll navigation

## 📁 Project Structure

```
my-portfolio/
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.js            # Root layout with metadata
│   └── page.js              # Main page connecting all components
├── components/
│   ├── Navigation.js        # Fixed navigation bar
│   ├── HeroSection.js       # Hero section with intro
│   ├── AboutSection.js      # About me section
│   ├── SkillsSection.js     # Skills showcase
│   ├── ProjectsSection.js   # Featured projects
│   ├── ContactSection.js    # Contact form
│   ├── Footer.js            # Footer component
│   └── BackgroundEffects.js # Animated backgrounds
└── public/                  # Static assets
```

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to view your portfolio.

## ✏️ Customization Guide

### 1. Personal Information

**HeroSection.js** - Update your name and intro:
- Line 15: Change "Mahaveer" to your name
- Line 19-20: Update your description

**Footer.js** - Update copyright:
- Line 4: Change name in copyright

### 2. About Section

**AboutSection.js**:
- Lines 5-9: Update experience, education, and project stats
- Lines 25-31: Write your personal bio

### 3. Skills

**SkillsSection.js** (Lines 5-14):
- Update skill names and proficiency levels (0-100)
- Add or remove skills as needed

### 4. Projects

**ProjectsSection.js** (Lines 5-24):
- Update project titles, descriptions, and tech stack
- Add real project links (currently buttons)
- Replace with your actual projects

### 5. Social Links

**HeroSection.js** (Lines 28-38):
- Update GitHub, LinkedIn, Twitter URLs
- Add or remove social icons

### 6. Contact Form

**ContactSection.js**:
- Currently a static form
- Add form handling (e.g., with Formspree, EmailJS, or API route)

### 7. Colors & Styling

**globals.css**:
- Modify gradient colors (blue, purple, pink)
- Adjust animation speeds and effects

## 📝 To-Do

- [ ] Add your actual resume details from Mahaveer_Resume_2027.pdf
- [ ] Update social media links
- [ ] Add real project links and demos
- [ ] Integrate contact form with email service
- [ ] Add your profile photo/avatar
- [ ] Connect GitHub to show real repositories
- [ ] Add blog section (optional)
- [ ] Add testimonials section (optional)

## 🎯 Key Details to Update

Please provide these details from your resume to complete customization:

1. **Full Name**: Mahaveer [Last Name]
2. **Job Title**: Current or target role
3. **Years of Experience**: Professional experience duration
4. **Education**: Degree, University, Year
5. **Top Skills**: Your main technical expertise
6. **Featured Projects**: 4 projects with:
   - Title
   - Description
   - Technologies used
   - Live URL (if available)
   - GitHub repo (if public)
7. **Social Links**:
   - GitHub: https://github.com/[username]
   - LinkedIn: https://linkedin.com/in/[username]
   - Email: your.email@example.com
   - Twitter/X (optional)

## 🌟 Technologies Used

- **Framework**: Next.js 15.5.6
- **Styling**: Tailwind CSS 4
- **React**: 19.1.0
- **Fonts**: Google Fonts (Geist Sans & Geist Mono)

## 📱 Responsive Design

The portfolio is fully responsive and works seamlessly on:
- Desktop (1920px+)
- Laptop (1024px - 1920px)
- Tablet (768px - 1024px)
- Mobile (320px - 768px)

## 🎨 Color Palette

- **Primary Blue**: #2563eb
- **Primary Purple**: #9333ea
- **Primary Pink**: #ec4899
- **Background**: Gradient from blue-50 to pink-50
- **Text**: Gray-800 for headers, Gray-600 for body

## 📄 License

© 2025 Mahaveer. All rights reserved.

---

**Need help customizing?** Share your resume details and I'll update all sections accordingly!
