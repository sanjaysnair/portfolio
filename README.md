# Sanjay S Nair - Portfolio Website

A modern, responsive portfolio website built with React and TailwindCSS to showcase freelance work and attract new projects.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean and professional design with smooth animations
- **Easy to Customize**: All content is managed through a single JSON file
- **Fast Performance**: Built with Vite for lightning-fast development and builds
- **No Backend Required**: Static site that can be deployed anywhere

## 📁 Project Structure

```
sanjaysnair/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx      # Navigation bar
│   │   ├── Home.jsx             # Hero section
│   │   ├── About.jsx            # About section
│   │   ├── Experience.jsx       # Work experience timeline
│   │   ├── Skills.jsx           # Skills showcase
│   │   ├── Portfolio.jsx        # Portfolio projects grid
│   │   ├── YouTube.jsx          # YouTube videos showcase
│   │   ├── Contact.jsx          # Contact form and info
│   │   └── Footer.jsx           # Footer section
│   ├── data/
│   │   └── portfolioData.json   # All portfolio content
│   ├── App.jsx                  # Main app component
│   ├── index.css                # Tailwind CSS config
│   └── main.jsx                 # Entry point
├── tailwind.config.js           # Tailwind configuration
├── postcss.config.js            # PostCSS configuration
└── package.json                 # Dependencies
```

## 🛠️ Installation & Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

3. **Build for Production**
   ```bash
   npm run build
   ```
   Built files will be in the `dist/` folder

## ✏️ Customizing Your Portfolio

### Update Your Information

Edit `src/data/portfolioData.json` to update:

- **Profile Information**: Name, title, email, social links
- **About Section**: Your description and highlights
- **Experience**: Your work history
- **Skills**: Your technical skills organized by category
- **Portfolio Projects**: Your freelance work and projects

### Adding New Portfolio Projects

To add a new project to your portfolio, add a new object to the `portfolio` array in `portfolioData.json`:

```json
{
  "id": 5,
  "title": "Your Project Name",
  "description": "Brief description of the project",
  "technologies": ["React", "Node.js", "MongoDB"],
  "image": "https://your-image-url.com/image.jpg",
  "link": "https://project-link.com",
  "category": "Web Development"
}
```

### Customizing Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#2563eb',    // Main brand color
      secondary: '#1e40af',  // Secondary color
      accent: '#3b82f6',     // Accent color
    },
  },
}
```

## 📦 Deployment

### Deploy to Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/repo-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

## 🎨 Technologies Used

- **React** - UI framework
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **JavaScript** - Programming language

## 📝 Contact Form

The contact form currently uses a `mailto:` link to open the user's email client. For production use, you may want to integrate:
- [EmailJS](https://www.emailjs.com/)
- [Formspree](https://formspree.io/)
- [Netlify Forms](https://www.netlify.com/products/forms/)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Support

For any questions or issues, please contact via:
- Email: contact@sanjaysnair.com
- LinkedIn: [Your LinkedIn Profile](https://linkedin.com/in/sanjaysnair)

---

Built with ❤️ by Sanjay S Nair

# portfolio
