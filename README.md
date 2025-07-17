# Telesub Landing Page

The official landing page for **Telesub** - a platform that simplifies Telegram group subscription management for creators and communities.

🌐 **Live Site**: [admin.telesub.app](https://admin.telesub.app)

## About Telesub

Telesub is a comprehensive platform designed to help content creators and community managers easily manage Telegram group subscriptions. The platform allows:

- **Group Management**: Create and manage multiple Telegram groups with ease
- **Subscription Handling**: Streamlined approval process for subscription requests
- **Member Monitoring**: Track group growth and member engagement
- **Automated Notifications**: Real-time alerts for subscription events
- **Multi-language Support**: Serve users in Spanish and English

## This Project

This repository contains the **marketing landing page** for Telesub, built with modern web technologies to provide an excellent user experience across different languages and regions.

## ✨ Features

### 🌍 **Intelligent Geolocation**

- **Automatic Language Detection**: Users from Latin America get Spanish, others get English
- **Smart Country Targeting**: Includes all Spanish-speaking countries (LATAM + Spain)
- **User Preference Memory**: Manual language choices override geo-detection
- **Edge-based Detection**: Lightning-fast using Vercel's geo capabilities

### 🌐 **Full Internationalization (i18n)**

- **Dual Language Support**: Complete Spanish and English translations
- **SEO Optimized**: Proper meta tags and URL structure for each language
- **Dynamic Content**: All text content managed through translation system
- **Professional Language Switcher**: Elegant toggle between languages

### 🎨 **Modern Design**

- **Beautiful UI**: Professional design with modern glassmorphism effects
- **Responsive Layout**: Perfect experience on desktop, tablet, and mobile
- **Smooth Animations**: Engaging hover effects and transitions
- **Custom Color Scheme**: Brand-consistent blue gradient theme
- **Accessibility**: Proper contrast and navigation patterns

### 📄 **Complete Page Structure**

- **Landing Page**: Hero section, features, benefits, and CTA
- **Privacy Policy**: Comprehensive privacy policy (Spanish & English)
- **Terms & Conditions**: Legal terms and conditions (Spanish & English)
- **Contact Integration**: Direct email contact for support

## 🛠 Tech Stack

- **[Astro](https://astro.build/)** - Modern static site generator
- **[Vercel](https://vercel.com/)** - Deployment platform with edge functions
- **Vanilla CSS** - Custom styling with modern CSS features
- **JavaScript** - Client-side interactivity
- **Vercel Edge Middleware** - Geolocation detection and routing

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd telesub-astro
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open browser**
   Navigate to `http://localhost:4321`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🌍 Language Routes

### Spanish (Default)

- `/` - Homepage
- `/privacy` - Privacy Policy
- `/terms` - Terms & Conditions

### English

- `/en/` - Homepage
- `/en/privacy` - Privacy Policy
- `/en/terms` - Terms & Conditions

## 🔧 Configuration

### Adding New Languages

1. **Add locale to Astro config** (`astro.config.mjs`)
2. **Add translations** to `src/i18n/ui.js`
3. **Create page structure** in `src/pages/[lang]/`
4. **Update middleware** for geolocation rules

### Customizing Geolocation

Edit `src/middleware.js` to modify:

- Target countries for each language
- Redirect behavior
- Cookie preferences

### Styling

- **Colors**: Update CSS custom properties in page styles
- **Layout**: Modify responsive breakpoints and grid systems
- **Animations**: Customize transition timing and effects

## 📦 Deployment

This project is optimized for **Vercel** deployment:

1. **Connect to Vercel**

   ```bash
   npx vercel
   ```

2. **Configure Domain**

   - Set custom domain to `admin.telesub.app`
   - Enable automatic deployments from git

3. **Environment Setup**
   - Geo headers automatically available on Vercel
   - Edge middleware enabled by default

## 🗂 Project Structure

```
telesub-astro/
├── src/
│   ├── components/
│   │   └── LanguageSwitcher.astro    # Language toggle component
│   ├── i18n/
│   │   ├── ui.js                     # Translation content
│   │   └── utils.js                  # i18n utilities
│   ├── pages/
│   │   ├── en/                       # English pages
│   │   │   ├── index.astro
│   │   │   ├── privacy.astro
│   │   │   └── terms.astro
│   │   ├── index.astro               # Spanish homepage
│   │   ├── privacy.astro             # Spanish privacy
│   │   └── terms.astro               # Spanish terms
│   └── middleware.js                 # Geolocation detection
├── public/
│   ├── blue-logo.png                 # Brand logo
│   └── favicon.svg                   # Site favicon
├── astro.config.mjs                  # Astro configuration
├── vercel.json                       # Vercel deployment config
└── package.json
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is part of the Telesub platform. All rights reserved.

## 📞 Contact

For questions about this landing page or the Telesub platform:

- **Email**: [support@telesub.app](mailto:support@telesub.app)
- **Website**: [admin.telesub.app](https://admin.telesub.app)

---

**Built with ❤️ for the Telegram creator community**
