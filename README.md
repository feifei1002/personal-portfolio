# Fei Liu Personal Portfolio

A modern, responsive personal portfolio website showcasing my software engineering projects, experience, and skills. Built with React, Vite, and TailwindCSS with multi-language support.

**The site is publicly available on: `https://feifairyfaye.com`**

## Features

- ✨ **Modern Design** - Glass-morphism UI with smooth animations.
- 🌐 **Multi-Language Support** - English, Traditional Chinese (繁體中文), and Vietnamese.
- 📱 **Fully Responsive** - Responsive design that works on all devices.
- ⚡ **Fast Performance** - Powered by Vite for lightning-fast builds.
- 🎨 **Beautiful UI** - TailwindCSS styling with custom animations.
- 📧 **Contact Form** - Integrated with EmailJS for direct messaging.
- 🔗 **Social Links** - Easy access to GitHub, LinkedIn, and Instagram profiles.

## Tech Stack

- **Frontend Framework**: React
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **Internationalization**: i18next + react-i18next
- **Icons**: Lucide React
- **Email Service**: EmailJS
- **Code Quality**: ESLint

## Sections

- **Hero** - Introduction and skills showcase.
- **About** - Personal background, languages, hobbies, and music taste.
- **Projects** - Featured web development and AI integration projects.
- **Experience** - Professional experiences and roles.
- **Education** - Academic background and qualifications.
- **Contact** - Get in touch with contact form and social links.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd personal-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Button.jsx      # Custom Button component
│   └── LanguageSwitcher.jsx  # Language selection
├── layout/             # Layout components
│   ├── Navbar.jsx      # Navigation header
│   └── Footer.jsx      # Footer section
├── sections/           # Page sections
│   ├── Hero.jsx        # Hero section
│   ├── About.jsx       # About section
│   ├── Projects.jsx    # Projects section
│   ├── Experience.jsx  # Experience timeline
│   ├── Education.jsx   # Education section
│   └── Contact.jsx     # Contact form
├── App.jsx             # Main App component
├── i18n.js             # i18next configuration
├── main.jsx            # React entry point
└── index.css           # Global styles
```

## Internationalization

The portfolio supports three languages:
- 🇺🇸 English (en)
- 🇹🇼 Traditional Chinese (zh-TW)
- 🇻🇳 Vietnamese (vi)

Users can manually switch via the language selector in the navbar.

## Contact

For inquiries or collaboration:
- 📧 Email: liufei520.02@gmail.com
- 💼 LinkedIn: [feiliu1002](https://www.linkedin.com/in/feiliu1002/)
- 🐙 GitHub: [feifei1002](https://github.com/feifei1002)


---

**Built with ❤️ by Fei Liu**