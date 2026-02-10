# Zubair Ahmed - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. This single-page application showcases professional information, skills, education, experience, and certifications with an elegant dark theme and interactive UI elements.

## 🌐 Live Demo
The site is automatically deployed to GitHub Pages via CI/CD pipeline on every push to the `main` branch.

## ✨ Features

### **Modern Design & Animations**
- Gradient backgrounds with animated shifting colors
- Floating particles and blob animations
- Smooth scroll animations and hover effects
- Custom scrollbar with gradient styling
- Responsive design for all screen sizes

### **Interactive Components**
- Fixed navigation bar with active section highlighting
- Image modal with full-screen view and download option
- Hover effects on cards and buttons
- Smooth scrolling to sections
- Professional photo gallery functionality

### **Content Sections**
1. **Hero Section** - Professional introduction with contact info
2. **About Me** - Background and personal information
3. **Education** - Academic qualifications and timeline
4. **Experience** - Professional work and internships
5. **Technical Skills** - Categorized programming languages and tools
6. **Certifications** - Learning platforms and certifications
7. **Contact** - Multiple contact methods and availability status

## 🛠️ Technology Stack

### **Frontend**
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library for UI elements

### **Build & Deployment**
- **GitHub Actions** - Automated CI/CD pipeline
- **GitHub Pages** - Static site hosting
- **ESLint** - Code quality and linting
- **PostCSS** - CSS processing

### **Performance & Optimization**
- Static Site Generation (SSG)
- Optimized images with Next.js Image component
- Code splitting and lazy loading
- Minified production builds

## 📁 Project Structure

```
├── .github/workflows/
│   └── build-and-deploy.yml    # CI/CD pipeline configuration
├── src/app/
│   ├── globals.css            # Global styles and animations
│   ├── layout.tsx             # Root layout component
│   └── page.tsx               # Main portfolio page
├── public/
│   └── procom-event.jpg       # Professional profile image
├── configuration files
│   ├── next.config.js         # Next.js configuration
│   ├── tailwind.config.js     # Tailwind CSS configuration
│   ├── tsconfig.json          # TypeScript configuration
│   ├── eslintrc.json          # ESLint configuration
│   └── postcss.config.js      # PostCSS configuration
```

## 🚀 Deployment

The project uses GitHub Actions for automatic deployment:

### **CI/CD Pipeline Features:**
- Triggered on every push to `main` branch
- Uses Node.js 22 with npm caching
- Static site generation with Next.js
- Automatic deployment to GitHub Pages
- Concurrency control to prevent multiple deployments

### **Build Process:**
1. Checkout repository
2. Setup Node.js environment
3. Install dependencies with npm caching
4. Build Next.js static site
5. Upload artifacts
6. Deploy to GitHub Pages

## 🎨 Styling & Design

### **Theme**
- Dark gradient background (#000000 → #0f172a → #1e3a8a)
- Cyan (#06b6d4) and Blue (#0c4a6e) accent colors
- Glassmorphism effects with backdrop blur
- Gradient borders and text effects

### **Animations**
- Gradient background shifting (15s cycle)
- Floating particle animations
- Blob morphing animations
- Pulse glow effects
- Smooth slide-in transitions

### **Responsive Design**
- Mobile-first approach
- Flexbox and Grid layouts
- Responsive typography
- Adaptive navigation

## 📱 Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 Included Files
- **Resume** - Downloadable PDF (ZA_Resume.pdf)
- **Professional Photo** - High-quality image with download option
- **Source Code** - All configuration and component files

## 🔧 Development

### **Prerequisites**
- Node.js 22.x or higher
- npm or yarn

### **Local Development**
```bash
# Clone repository
git clone <repository-url>

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### **Environment Variables**
No environment variables required for this static deployment.

## 🤝 Contributing
This is a personal portfolio website, but suggestions and improvements are welcome through issues and pull requests.

## 📄 License
Personal project - All rights reserved.

## 📞 Contact
- **Email**: zahmad2812@gmail.com
- **LinkedIn**: linkedin.com/in/zubair-ahmed-448041344
- **GitHub**: github.com/zahmed02

---

**Built with ❤️ using Next.js & Tailwind CSS**
