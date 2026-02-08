I'll create a comprehensive README for your portfolio. Let me first check your package.json to get some details: 

Read [](file:///c%3A/Users/liufe/OneDrive/%E6%A1%8C%E9%9D%A2/Fei/personal-portfolio/package.json#1-1), lines 1 to 30

Here's a professional README for your portfolio:

```markdown
# Fei Liu Personal Portfolio

A modern, responsive personal portfolio website showcasing my software engineering projects, experience, and skills. Built with React, Vite, and TailwindCSS with multi-language support.

## Features

- ✨ **Modern Design** - Glass-morphism UI with smooth animations
- 🌐 **Multi-Language Support** - English, Traditional Chinese (繁體中文), and Vietnamese with automatic browser language detection
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- ⚡ **Fast Performance** - Powered by Vite for lightning-fast builds and HMR
- 🎨 **Beautiful UI** - TailwindCSS styling with custom animations
- 📧 **Contact Form** - Integrated with EmailJS for direct messaging
- 🔗 **Social Links** - Easy access to GitHub, LinkedIn, and Instagram profiles

## Tech Stack

- **Frontend Framework**: React 19.2
- **Build Tool**: Vite (rolldown-vite)
- **Styling**: TailwindCSS 4.1
- **Internationalization**: i18next + react-i18next with browser language detection
- **Icons**: Lucide React
- **Email Service**: EmailJS
- **Code Quality**: ESLint

## Sections

- **Hero** - Introduction with CTA buttons and skills showcase
- **About** - Personal background, languages, hobbies, and music taste
- **Projects** - Featured web development and AI integration projects
- **Experience** - Professional experiences and roles
- **Education** - Academic background and qualifications
- **Contact** - Get in touch with contact form and social links

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

Language detection is automatic based on browser settings, and users can manually switch via the language selector in the navbar.

To add or modify translations, edit the i18n.js file.

## Customization

### Update Personal Information

Edit the respective section files in sections to update:
- Hero section with your name, title, and social links
- About section with your personal details
- Projects with your portfolio pieces
- Experience with your career history
- Education with your qualifications
- Contact with your contact information

### Add New Projects

Edit Projects.jsx and add new projects to the `projects` array with:
- `title` - Project name
- `description` - Project description
- `image` - Project image path
- `tags` - Technology tags
- `link` - Project URL
- `github` - GitHub repository URL

### Styling

TailwindCSS classes are used throughout. Custom styles and animations are in index.css.

## Deployment

Build for production:
```bash
npm run build
```

This generates optimized files in the `dist/` folder ready for deployment to services like:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contact

For inquiries or collaboration:
- 📧 Email: liufei520.02@gmail.com
- 📱 Phone: +44 7498 547241
- 💼 LinkedIn: [feiliu1002](https://www.linkedin.com/in/feiliu1002/)
- 🐙 GitHub: [feifei1002](https://github.com/feifei1002)
- 📸 Instagram: [@_feifairyfaye_](https://www.instagram.com/_feifairyfaye_/)

---

**Built with ❤️ by Fei Liu**
```