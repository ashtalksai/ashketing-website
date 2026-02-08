# ashketing.com

Personal portfolio website for Ash Hatef - AI Automation Specialist.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Deployment:** Static export (Docker/Nginx)

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## Build

```bash
# Build for production (static export)
npm run build

# Output is in ./out directory
```

## Deployment

### Docker (Coolify/Hetzner)

```bash
# Build and run with Docker Compose
docker-compose up -d --build

# Or build manually
docker build -t ashketing-website .
docker run -p 3000:80 ashketing-website
```

### Static Hosting

The `npm run build` command generates a static export in the `out/` directory. 
This can be deployed to any static hosting service:

- Coolify (Docker)
- Vercel
- Netlify
- Cloudflare Pages
- Any nginx/Apache server

## Pages

- `/` - Home page with hero, services overview, and about preview
- `/services` - Detailed service offerings
- `/about` - Professional bio and journey
- `/contact` - Contact form and booking options

## Customization

### Add Your Photo
Replace the placeholder in the About page by adding your photo to `public/` and updating the image source.

### Calendly Integration
In `/contact`, replace the placeholder with your Calendly embed code or link.

### Contact Form
The contact form currently simulates submission. Connect it to:
- API route with email service (SendGrid, Resend)
- Formspree
- Google Forms
- Any backend of your choice

## Author

**Ash Hatef**
- LinkedIn: https://www.linkedin.com/in/ashhatef/
- Email: ash@ashketing.com
