# Casmir Okeke - Front-End Developer Portfolio

A professional, modern, and fully responsive portfolio website showcasing my web development skills, featured projects, and experience as a front-end developer.

## 🌟 Features

- **Responsive Design**: Fully optimized for all devices (desktop, tablet, mobile)
- **Dark/Light Mode**: Toggle between light and dark themes with local storage persistence
- **Smooth Animations**: AOS (Animate On Scroll) library for smooth section animations
- **Interactive Modals**: Project case studies with detailed information in beautiful modals
- **Custom Cursor**: Dynamic custom cursor effects for enhanced UX
- **Mobile Navigation**: Smooth hamburger menu for mobile devices
- **Project Showcase**: 5 featured projects with detailed case studies
- **Timeline Experience**: Visual timeline of work experience
- **Contact Form**: Integrated contact form with Formspree backend
- **Social Media Links**: Direct links to social profiles
- **WhatsApp Integration**: Floating WhatsApp button for direct messaging
- **Performance Optimized**: Preloader, lazy loading, and smooth scrolling

## 🛠️ Tech Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS variables, Flexbox, and CSS Grid
- **JavaScript (Vanilla)**: No framework dependencies, pure JavaScript
- **AOS Library**: Animate On Scroll effects
- **Ionicons**: Icon library for social media links
- **Font Awesome**: Icon library for features and UI elements
- **Google Fonts**: Poppins font family
- **Formspree**: Backend for contact form submissions

## 📋 Project Structure

```
specimen/
├── index.html           # Main HTML file
├── css/
│   └── style.css        # Main stylesheet with responsive design
├── js/
│   └── script.js        # JavaScript functionality
├── image/               # Image assets
│   ├── logo.png
│   ├── profile.jpg
│   └── project screenshots
├── videos/              # Project demo videos
├── files/               # CV and downloadable files
│   └── CASMIR OKEKE.pdf
└── README.md            # Project documentation
```

## 📱 Responsive Breakpoints

- **1024px and below**: Tablet optimization
- **768px and below**: Mobile menu, stacked layout
- **600px and below**: Smaller screens, optimized sizing
- **480px and below**: Extra-small devices, full mobile optimization

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional installations required

### Installation

1. **Clone or Download** the repository
   ```bash
   git clone https://github.com/casmircodes-frontend/portfolio.git
   cd specimen
   ```

2. **Open the Portfolio**
   - Simply open `index.html` in your web browser
   - Or deploy to a web server (GitHub Pages, Netlify, Vercel, etc.)

3. **Live Preview**
   - Use VS Code Live Server extension
   - Or use Python: `python -m http.server 8000`
   - Or use Node.js: `npx http-server`

## 📚 Sections

### 1. **Hero Section**
- Eye-catching introduction with profile image
- Call-to-action buttons (Download CV, Hire Me)
- Social media links
- Custom cursor effects

### 2. **About Me**
- Personal introduction
- Professional summary
- Statistics (projects completed, etc.)

### 3. **Technical Skills**
- HTML5, CSS3, JavaScript
- Responsive Design skills
- Expandable for additional skills

### 4. **Featured Projects**
- 5 showcase projects with:
  - Project images
  - Short descriptions
  - Technology tags
  - Mobile-friendly badge
  - "Read Case Study" button
  - Detailed modals with full project information

### 5. **Work Experience**
- Timeline view of professional journey
- Freelance experience
- Self-taught developer journey

### 6. **Contact**
- Contact information (email, phone, location)
- Social media links
- Functional contact form
- Formspree integration for email submissions

### 7. **Footer**
- About section (left)
- Quick navigation links (center)
- Social media icons (right)
- Copyright information

## ⚙️ Features in Detail

### Dark/Light Mode
- Automatically detects system preference
- Toggles with button in navbar
- Persists user choice using localStorage

### Project Modals
- Click "Read Case Study" on any project
- Beautiful modal displays:
  - Project title
  - Technology stack
  - Context and problem
  - Your role
  - Process and solution
  - Results and outcomes
  - Demo and GitHub links
- Close with X button, overlay click, or Escape key

### Mobile Menu
- Hamburger icon appears on screens below 768px
- Smooth slide-down animation
- Auto-closes when link is clicked
- Closes on outside click

### Contact Form
- Real-time validation
- Integrated with Formspree (formspree.io/f/mjgawrzp)
- Sends emails directly to configured address
- Success/error handling

## 🎨 Customization

### Update Content
1. Edit `index.html` to update:
   - Your name and title
   - About me section
   - Skills list
   - Project information
   - Experience timeline
   - Contact details

2. Edit `css/style.css` to customize:
   - Color scheme (CSS variables in `:root`)
   - Typography
   - Spacing and sizing
   - Breakpoints for responsiveness

3. Edit `js/script.js` to modify:
   - Animation speeds
   - Interaction behaviors
   - Modal functionality
   - Form handling

### Update Images
- Replace images in the `image/` folder
- Update image paths in `index.html`
- Optimize images for web performance

### Update Projects
- Modify project card content
- Update modal case study information
- Add demo video links
- Link to GitHub repositories

## 📧 Contact Form Setup

The contact form uses **Formspree** for email handling:
1. Create account at [formspree.io](https://formspree.io)
2. Get your form endpoint (e.g., `f/mjgawrzp`)
3. Update the form action in `index.html`:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

## 🚀 Deployment

### GitHub Pages
```bash
git push origin main
```
Enable GitHub Pages in repository settings

### Netlify
1. Connect GitHub repository
2. Build command: (leave empty, static site)
3. Publish directory: `./`
4. Deploy

### Vercel
1. Import project from GitHub
2. Deploy with one click
3. Custom domain support

## 📊 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Performance Metrics

- **Preloader**: Custom loading animation
- **Smooth Scrolling**: Native `scroll-behavior: smooth`
- **Optimized Animations**: Hardware-accelerated CSS transitions
- **Lazy Loading Ready**: Prepared for image lazy loading
- **Minimal Dependencies**: Only 3 external libraries (AOS, Ionicons, FontAwesome)

## 🔐 Security

- No sensitive data stored locally
- Contact form uses Formspree (secure third-party)
- No JavaScript vulnerabilities
- Clean, validated HTML

## 📈 SEO Optimization

- Semantic HTML5 structure
- Meta tags for description and viewport
- Proper heading hierarchy
- Alt text on images
- Fast loading performance

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This portfolio template is open source and available under the MIT License. Feel free to use it as a template for your own portfolio.

## 👤 Author

**Casmir Okeke**
- 🌐 Portfolio: [Your Portfolio URL]
- 📧 Email: casmirokeke38@gmail.com
- 📱 WhatsApp: +234 816 351 3869
- 🐙 GitHub: [casmircodes-frontend](https://github.com/casmircodes-frontend)
- 💼 LinkedIn: [casmir-okeke](https://linkedin.com/in/casmir-okeke)
- 🐦 Facebook: [casmir.okeke.920493](https://www.facebook.com/casmir.okeke.920493)
- 📸 Instagram: [casmircodes](https://instagram.com/casmircodes)

## 🙏 Acknowledgments

- [AOS Library](https://michalsnik.github.io/aos/) - Scroll animation library
- [Ionicons](https://ionicons.com/) - Icon library
- [Font Awesome](https://fontawesome.com/) - Icon library
- [Google Fonts](https://fonts.google.com/) - Poppins font
- [Formspree](https://formspree.io/) - Form backend service

## 📝 Notes

- All projects are responsive and tested on multiple devices
- Custom cursor is disabled on mobile devices
- Animations respect `prefers-reduced-motion` preference
- Dark mode uses system preference as default
- Contact form requires internet connection to send emails

---

**Last Updated**: June 2026
**Version**: 1.0.0

For questions or support, reach out via email or WhatsApp! 🚀
