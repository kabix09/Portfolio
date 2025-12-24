# Multi-Profile Interactive Portfolio 🚀

**Dynamic Portfolio with Profile Switching System (Backend & Data Science)**

A high-performance, responsive portfolio built with **Next.js**, designed to showcase a dual-career path. The application allows visitors to switch the entire site's context between **Backend Developer** and **Data Analyst** profiles with a single toggle.

> One codebase, two professional identities. Featuring fluid transitions, full internationalization (i18n), and data-driven content management.

---

## 🎯 The Problem This Project Solves

Traditional portfolios are often static and fail to present multi-disciplinary skills effectively. This project implements a **Profile Switcher** logic that re-renders:
- Hero sections and professional taglines.
- Work experience duties (filtering for relevant tasks).
- Project showcases (switching between backend and data datasets).
- Navigation and skills context.

---

## 🔧 Key Capabilities

- 🔄 **Profile State Management**: Uses React Context API to synchronize the "Active Profile" across all sections, ensuring a seamless transition.
- 🌍 **Advanced i18n (Internationalization)**: Full support for English and Polish using `next-intl`, with dynamic translation keys mapped to the active profile.
- 🕵️ **Intelligent ScrollSpy**: A custom vertical navigation bar using the **Intersection Observer API** to track and highlight sections as the user scrolls.
- 🎨 **Glassmorphism UI**: Modern aesthetic featuring backdrop blurs, semi-transparent borders, and high-quality typography.
- 🎭 **Orchestrated Animations**: Powered by **Framer Motion**, utilizing `AnimatePresence` for smooth layout shifts.

---

## 🛠️ Technology Stack

**Frontend & Logic:**

- **Framework:** Next.js 14/15 (App Router)
- **Language:** TypeScript (for project and profile data typing)
- **Styling:** Tailwind CSS (responsive styling)
- **Animations:** Framer Motion (UI animations)
- **Icons:** Lucide React, React Icons (icon sets)

**Infrastructure & Tools:**

- **Containerization:** Docker
- **Internationalization:** Next-intl
- **Navigation Logic:** Intersection Observer API

---

## 🚀 Deployment & Local Setup

The project is fully containerized for consistent deployment.

### Using Docker

**1. Build the image:**
    docker build -t portfolio .

**2. Run the container:**
    docker run -p 3000:3000 portfolio

The application will be available at `http://localhost:3000`.

### Local Development

    npm install
    npm run dev

---

## 📁 Menu & Sections

- **Home**: Dynamic greeting and role-specific descriptions.
- **About**: Personal background and technical values.
- **Education**: Academic path and certifications.
- **Work Experience**: Interactive timeline with profile-specific duty lists.
- **Projects**: Filterable gallery of work, categorized by domain.
- **Organizations**: Tech communities and student organizations.

---

## 📝 License

© 2025 kabix09. All rights reserved.

This portfolio is proprietary software developed for personal and professional presentation purposes. The source code, assets, and content are protected under copyright law.

*Design, layout, and thematic elements were inspired by publicly available portfolios and websites. Any resemblance to other works is purely coincidental and used solely for inspiration.*

You may not copy, distribute, or use this code or assets for commercial purposes without explicit permission.
