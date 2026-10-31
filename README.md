# Family Heritage Website

A static family heritage website built with Next.js, featuring a photo gallery, family tree, timeline, and more.

## Features

- **Photo Gallery**: Browse family photos with categories and lightbox view
- **Family Tree**: Interactive family tree visualization
- **Timeline**: Family history timeline
- **Events**: Upcoming and past family events
- **Members**: Family member profiles
- **Videos**: Family video collection

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Build

This project is configured for static export:

```bash
npm run build
```

The static files will be generated in the `out/` directory.

## Deployment

### Vercel

1. Push this repository to GitHub
2. Import the project in Vercel
3. Vercel will automatically detect the configuration from `vercel.json`
4. Deploy!

The `vercel.json` configuration:
- Build command: `npm run build`
- Output directory: `out`
- Framework: Static export

### Manual Deployment

You can also deploy the `out/` folder to any static hosting service:
- Netlify
- GitHub Pages
- Cloudflare Pages
- AWS S3 + CloudFront

## Adding New Photos

1. Add images to `public/images/`
2. Update `data/gallery.ts` with the new photo details
3. Rebuild: `npm run build`

## Tech Stack

- Next.js 16 with static export
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Three.js (for 3D effects)
