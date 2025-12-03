# Portfolio Website

A modern, responsive portfolio website built with Next.js 15 and React 19, showcasing projects, skills, and professional experience. Features smooth animations, dark mode support, and a clean, professional design.

![Portfolio Preview](https://img.shields.io/badge/Next.js-15.2.3-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0.15-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- 🎨 **Modern UI/UX Design** - Clean, professional interface with smooth animations
- 🌙 **Dark Mode Support** - Seamless theme switching with system preference detection
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- ⚡ **High Performance** - Built with Next.js 15 for optimal speed and SEO
- 🎭 **Smooth Animations** - Powered by Framer Motion for engaging interactions
- 📄 **Project Showcase** - Filterable project gallery with detailed information
- 📋 **Resume Display** - Interactive resume section with experience and skills
- 📧 **Contact Form** - Easy way for visitors to get in touch
- ♿ **Accessible** - Built with accessibility best practices using Radix UI

## 🚀 Tech Stack

### Core Technologies
- **Next.js 15** - React framework with App Router
- **React 19** - Latest React features and improvements
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework

### UI Components & Libraries
- **ShadCN UI** - High-quality component library
- **Radix UI** - Accessible component primitives
- **Framer Motion** - Animation library for React
- **Lucide React** - Beautiful icon library
- **next-themes** - Dark mode implementation

### Development Tools
- **ESLint** - Code linting
- **TypeScript** - Static type checking
- **Prettier** - Code formatting

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/loimtran/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── projects/          # Projects listing page
│   ├── resume/            # Resume page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── src/
│   ├── components/        # React components
│   │   ├── layout/        # Layout components (Header, Footer, etc.)
│   │   ├── sections/      # Section components (ProjectCard, etc.)
│   │   └── ui/            # Reusable UI components
│   ├── data/              # Data files (projects, resume)
│   └── lib/               # Utility functions
├── public/                # Static assets
└── tailwind.config.ts     # Tailwind configuration
```

## 🎨 Customization

### Adding Projects

Edit `src/data/projects.ts` to add or modify projects:

```typescript
{
  id: "project-id",
  title: "Project Title",
  description: "Short description",
  longDescription: "Detailed description",
  image: "/images/project-image.jpg",
  technologies: ["Next.js", "React", "TypeScript"],
  category: "Full Stack",
  featured: true,
  liveUrl: "https://example.com",
  githubUrl: "https://github.com/username/repo",
  period: "Jan 2024 – Present",
  highlights: [
    "Key achievement 1",
    "Key achievement 2"
  ]
}
```

### Updating Resume

Edit `src/data/resume.json` to update your resume information.

### Styling

The project uses Tailwind CSS. Customize colors, fonts, and other design tokens in `tailwind.config.ts`.

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- **Netlify** - Connect your GitHub repository
- **AWS Amplify** - Deploy with AWS
- **Railway** - Simple deployment platform
- **Docker** - Containerize and deploy anywhere

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Loi Minh Tran**

- Email: loi.tran.dev@gmail.com
- Website: [loi.tran.dev](https://loi.tran.dev)
- GitHub: [@loimtran](https://github.com/loimtran)
- LinkedIn: [loimtran](https://linkedin.com/in/loimtran)
- Dev.to: [@loimtran](https://dev.to/loimtran)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [ShadCN UI](https://ui.shadcn.com/) - Beautiful component library
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Radix UI](https://www.radix-ui.com/) - Accessible component primitives

## ⭐ Show Your Support

If you find this project helpful, please give it a ⭐ on GitHub!

---

Built by Loi Mihn Tran using Next.js and React

