# Urmila Physiotherapy Home Care

A modern, professional website for Urmila Physiotherapy Home Care services built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

✨ **Professional Design**
- Premium purple and white color scheme
- Fully responsive mobile-first design
- Modern UI/UX with smooth animations

📄 **Pages**
- **Home**: Hero section with CTA buttons (Call Now, WhatsApp Booking)
- **About Us**: Dr. Aman Mishra's profile and specializations
- **Services**: Complete list of physiotherapy services
- **Booking**: Appointment booking form with contact options

🎯 **Services Offered**
- Back Pain Treatment
- Neck Pain Relief
- Stroke Rehabilitation
- Manual Therapy
- Electrotherapy
- Home Visit Physiotherapy

📱 **Contact Integration**
- Direct call button
- WhatsApp booking integration
- Contact form with WhatsApp/Call submission

## Tech Stack

- **Framework**: Next.js 16.2
- **UI Library**: React 19
- **Styling**: Tailwind CSS 3.4
- **Language**: TypeScript 5.5
- **Build Tools**: ESLint, PostCSS, Autoprefixer

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm run start
```

## Project Structure

```
.
├── app/
│   ├── components/
│   │   ├── Navigation.tsx      # Top navigation bar
│   │   └── Footer.tsx           # Footer component
│   ├── about/
│   │   └── page.tsx             # About Us page
│   ├── services/
│   │   └── page.tsx             # Services page
│   ├── booking/
│   │   └── page.tsx             # Booking page
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   └── globals.css              # Global styles
├── public/                      # Static assets
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies
```

## Customization

### Contact Information
Update phone and WhatsApp numbers in:
- `app/components/Footer.tsx`
- `app/page.tsx`
- `app/booking/page.tsx`

### Colors
Modify the color scheme in `tailwind.config.ts`:
- Primary: `#7C3AED` (Purple)
- Secondary: `#F3F4F6` (Light Gray)

### Doctor Information
Update Dr. Aman Mishra's details in `app/about/page.tsx`

## Future Enhancements

- [ ] Backend integration for appointment storage
- [ ] Email notifications
- [ ] Payment gateway integration
- [ ] Patient testimonials
- [ ] Blog section
- [ ] Online consultation features
- [ ] CMS integration

## Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables if needed
4. Deploy with one click

### Deploy on Other Platforms

The project is compatible with:
- Netlify
- AWS Amplify
- Firebase Hosting
- Docker
- Traditional Node.js servers

## Environment Variables

Create a `.env.local` file if needed for future integrations:

```
NEXT_PUBLIC_API_URL=your_api_url
```

## Performance

- Optimized images
- Code splitting
- CSS minification
- Fast page loads with Next.js

## Accessibility

- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance

## License

This project is proprietary and owned by Urmila Physiotherapy.

## Support

For any questions or issues, contact:
- 📞 Phone: +91 98765 43210
- 💬 WhatsApp: https://wa.me/919876543210

---

**Last Updated**: April 2026
**Version**: 1.0.0
