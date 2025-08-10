# Elite Commercial Cleaning Website

A responsive, SEO-optimized website built with Next.js and TailwindCSS for a commercial cleaning company. Designed to dominate Google search results and convert visitors into leads.

## 🌟 Features

### SEO Optimization
- **Schema.org LocalBusiness JSON-LD** structured data
- **Meta tags** optimized for each page
- **SEO-friendly URLs** and titles
- **Open Graph** and Twitter Card support
- **Google verification** ready
- **Sitemap** friendly structure

### Responsive Design
- **Mobile-first** approach with TailwindCSS
- **Fully responsive** across all devices
- **Modern UI/UX** with smooth animations
- **Optimized images** with Next.js Image component
- **Fast loading** with performance optimizations

### Pages & Features
- **Homepage** - Hero section, value props, testimonials, trust indicators
- **About** - Company story, team, values, certifications
- **Services** - Detailed service offerings with pricing
- **Industries** - Industry-specific solutions
- **Contact** - Contact form, Google Maps, FAQ
- **Get a Quote** - Comprehensive quote form with all requested fields

### Technical Features
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **TailwindCSS** for styling
- **Google Fonts** (Inter & Poppins)
- **Lucide React** icons
- **Form handling** with validation
- **Accessibility** compliant (WCAG guidelines)
- **Performance optimized**

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd commercial-cleaning-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/
│   ├── contact/
│   ├── industries/
│   ├── quote/
│   ├── services/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/             # Reusable components
│   ├── Header.tsx
│   └── Footer.tsx
├── lib/                    # Utilities
└── types/                  # TypeScript types
```

## 🎨 Customization

### Brand Colors
The website uses a blue and green color scheme. To customize:

1. **Update TailwindCSS colors** in `tailwind.config.ts`
2. **Modify the color variables** in `globals.css`

### Content Updates
1. **Company information** - Update in `layout.tsx` (JSON-LD schema)
2. **Contact details** - Update in `Header.tsx` and `Footer.tsx`
3. **Services** - Modify service arrays in respective page files
4. **Google Maps** - Replace embed URLs in `Contact.tsx` and `Footer.tsx`

### SEO Customization
1. **Meta tags** - Update in each page's metadata export
2. **Schema.org data** - Modify JSON-LD in `layout.tsx`
3. **Google verification** - Add your verification code in `layout.tsx`

## 📧 Form Integration

The contact and quote forms are currently set up with client-side validation and mock submission. To integrate with a real backend:

1. **Replace the form submission logic** in `Contact.tsx` and `Quote.tsx`
2. **Add your API endpoints**
3. **Configure email notifications**
4. **Set up form analytics**

Popular integration options:
- Netlify Forms
- Formspree
- EmailJS
- Custom API routes

## 🔧 Production Deployment

### Build the project
```bash
npm run build
```

### Deploy options
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Traditional hosting** with static export

### Pre-deployment checklist
- [ ] Update Google Maps embed with real location
- [ ] Add real company information
- [ ] Configure form submissions
- [ ] Add Google Analytics/Search Console
- [ ] Set up real images (replace placeholders)
- [ ] Test all forms and links
- [ ] Verify mobile responsiveness
- [ ] Check SEO with tools like Lighthouse

## 🎯 SEO Best Practices Included

### Technical SEO
- ✅ Semantic HTML structure
- ✅ Proper heading hierarchy (H1, H2, H3)
- ✅ Alt text for images
- ✅ Schema.org structured data
- ✅ Meta descriptions and titles
- ✅ Open Graph tags
- ✅ Mobile-friendly design
- ✅ Fast loading speeds

### Local SEO
- ✅ LocalBusiness schema
- ✅ NAP (Name, Address, Phone) consistency
- ✅ Google Maps integration
- ✅ Service area definition
- ✅ Industry-specific content

### Content SEO
- ✅ Keyword-optimized content
- ✅ Industry-specific landing pages
- ✅ Service-focused pages
- ✅ FAQ sections
- ✅ Customer testimonials
- ✅ Trust indicators

## 🏗️ Built With

- [Next.js](https://nextjs.org/) - React framework
- [TailwindCSS](https://tailwindcss.com/) - CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Lucide React](https://lucide.dev/) - Icons
- [Google Fonts](https://fonts.google.com/) - Typography

## 📞 Support

For questions about this website template, please refer to:
- Next.js documentation
- TailwindCSS documentation
- React documentation

## 📄 License

This project is created as a template for commercial cleaning businesses. Customize and use as needed for your business.

---

**Ready to dominate your local market?** This website template includes all the SEO and conversion optimization features you need to attract more commercial cleaning clients. Customize the content, add your branding, and watch your leads grow! 🚀
