# 🚀 Dharshan's Portfolio

A modern, animated personal portfolio built with **Next.js 14**, **Tailwind CSS**, and **TypeScript** — featuring smooth scroll animations, dark mode, a project carousel, certificate gallery, and a fully functional contact form.

**🔗 Live Site:** ([https://dharshans-portfolio.vercel.app/](https://dharshans-portfolio.vercel.app/))

---

## ✨ Features

- **Animated Hero** — Parallax floating text, ripple effects, and mouse-tracking gradient
- **About Section** — Profile image with hover effects, tech stack badges, and social links
- **Skills Grid** — Animated progress bars with intersection observer triggers
- **Experience Timeline** — Gradient-bordered cards with staggered entrance animations
- **Projects Carousel** — Auto-playing slideshow with pause-on-hover, swipe support, and dot navigation
- **Certifications Gallery** — 3D card carousel with hover fan effect
- **Contact Form** — Full backend integration via Nodemailer (Gmail)
- **Dark Mode** — System-aware theme toggle with smooth transitions
- **Fully Responsive** — Mobile-first design across all breakpoints
- **Custom Loader** — Animated progress bar splash screen

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS + CSS Variables |
| Language | TypeScript |
| UI Components | shadcn/ui + Radix UI |
| Icons | Lucide React + React Icons |
| Email | Nodemailer (Gmail SMTP) |
| Font | Inter (Google Fonts) |
| Deployment | Vercel |

---

## 📁 Project Structure

```
├── app/
│   ├── api/contact/route.ts   # Contact form API (Nodemailer)
│   ├── globals.css            # Global styles + custom animations
│   ├── layout.tsx             # Root layout with ThemeProvider
│   └── page.tsx               # Main page — section orchestration
├── components/
│   ├── hero.tsx               # Landing section with parallax
│   ├── about.tsx              # Bio, stats, tech stack
│   ├── skills.tsx             # Skill cards with progress bars
│   ├── experience.tsx         # Work/education timeline
│   ├── projects.tsx           # Auto-play project carousel
│   ├── testimonials.tsx       # Certificates 3D carousel
│   ├── contact.tsx            # Contact form with validation
│   ├── navbar.tsx             # Sticky nav with mobile menu
│   ├── footer.tsx             # Footer with social links
│   ├── loader.tsx             # Animated splash screen
│   ├── theme-toggle.tsx       # Dark/light mode switch
│   └── ui/                    # shadcn/ui component library
├── public/
│   ├── profile.jpg
│   ├── resume/
│   ├── certificates/
│   └── [project images]
└── tailwind.config.ts
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm / yarn / pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/Dacchu2004/portfolio.git
cd portfolio

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
```

### Environment Variables

Create a `.env.local` file in the root:

```env
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-gmail-app-password
```

> **Note:** Use a [Gmail App Password](https://support.google.com/accounts/answer/185833), not your regular Gmail password.

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Build & Deploy

```bash
# Production build
npm run build

# Start production server
npm start
```

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Dacchu2004/portfolio)

1. Push your code to GitHub
2. Import the repo on [vercel.com](https://vercel.com)
3. Add `EMAIL_USER` and `EMAIL_PASS` in Vercel Environment Variables
4. Deploy 🎉

---

## 🖼️ Sections Overview

| Section | Description |
|---|---|
| **Hero** | Name, role, animated background text, CTA buttons |
| **About** | Photo, bio paragraphs, location/activity stats, social links |
| **Skills** | 6 skill cards (Frontend, Backend, Web Dev, DB, IoT, Java) |
| **Experience** | EZ Startup Futurio internship + Samsung IoT trainee |
| **Projects** | Virtual Interview Navigator, Life Compass, Med Connect, Portfolio |
| **Certifications** | React, Frontend Dev, Cyber Security, JS, and more |
| **Contact** | Name/Email/Message form → sends email via Gmail SMTP |

---

## 📬 Contact Form Setup

The form uses Next.js API routes with Nodemailer. Messages are sent directly to your Gmail inbox with a styled HTML email template and `Reply-To` set to the sender's email.

---

## 📄 License

This project is open source under the [MIT License](LICENSE).

---

## 🙋‍♂️ Author

**Dharshan S**  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/dharshans2004/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/Dacchu2004)
[![LeetCode](https://img.shields.io/badge/LeetCode-FFA116?style=flat&logo=leetcode&logoColor=white)](https://leetcode.com/u/Dharshans_05/)

---

> *"Building sleek web apps with JavaScript, ML, and modern frameworks."*
