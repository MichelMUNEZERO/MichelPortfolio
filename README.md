# Portfolio Website

A modern, responsive portfolio website built with React and Vite, featuring a clean design with purple accents and gradient backgrounds.

## Features

- ✨ Modern and clean design
- 📱 Fully responsive layout
- 🎨 Beautiful gradient backgrounds
- 💼 Portfolio showcase section
- 📝 Contact form
- ⚡ Fast performance with Vite

## Getting Started

### Installation

1. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

2. Start the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

3. Open your browser and visit the local URL shown in the terminal (usually `http://localhost:5173`)

### Build for Production

\`\`\`bash
npm run build
\`\`\`

## Customization

### Replace Placeholder Images

Replace the SVG placeholders in the following components with your actual images:

- **Hero section**: [src/components/Hero.jsx](src/components/Hero.jsx)
- **About section**: [src/components/About.jsx](src/components/About.jsx)
- **Portfolio items**: [src/components/Portfolio.jsx](src/components/Portfolio.jsx)

### Update Personal Information

Edit the following files to add your personal information:

- **About section**: Update name, bio, contact details in [src/components/About.jsx](src/components/About.jsx)
- **Hero section**: Update name and description in [src/components/Hero.jsx](src/components/Hero.jsx)
- **Footer**: Update contact information in [src/components/Footer.jsx](src/components/Footer.jsx)

### Change Colors

Edit the CSS variables in [src/index.css](src/index.css):
\`\`\`css
:root {
--primary-color: #8b5cf6;
--secondary-color: #a78bfa;
--dark-bg: #1e293b;
--text-dark: #334155;
--text-light: #64748b;
--white: #ffffff;
}
\`\`\`

## Project Structure

\`\`\`
Portfolio/
├── src/
│ ├── components/
│ │ ├── Header.jsx
│ │ ├── Hero.jsx
│ │ ├── About.jsx
│ │ ├── WorkProcess.jsx
│ │ ├── Portfolio.jsx
│ │ ├── ProjectIdea.jsx
│ │ ├── Services.jsx
│ │ ├── Contact.jsx
│ │ └── Footer.jsx
│ ├── App.jsx
│ ├── App.css
│ ├── index.css
│ └── main.jsx
├── index.html
├── package.json
└── vite.config.js
\`\`\`

## Technologies Used

- React 18
- Vite
- CSS3
- React Icons

## License

MIT License - feel free to use this template for your own portfolio!
