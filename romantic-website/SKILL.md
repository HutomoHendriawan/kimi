---
name: romantic-website
description: Create romantic, interactive couple websites with password protection, animated welcome pages, content galleries, love letters, photo albums, and feedback forms. Use when building surprise websites for partners, anniversaries, Valentine's Day, or romantic gestures. Features include PIN protection, evasive buttons, floating heart animations, music players, and WhatsApp integration.
---

# Romantic Website Builder

Build multi-page romantic surprise websites as Single-Page Applications (SPA) with smooth transitions.

## Workflow

1. Read `references/configuration.md` for content customization
2. Initialize webapp with `webapp-building` skill
3. Generate romantic illustrations (anime art style recommended)
4. Implement 6-page structure following `references/page-structure.md`
5. Configure password, WhatsApp number, and content in `src/data/content.ts`
6. Build and deploy

## Page Structure

| Page | Feature | Key Interaction |
|------|---------|-----------------|
| 1 - Password | PIN input | Wrong PIN shakes, correct PIN advances |
| 2 - Welcome | Hero image + message | "No" button runs from cursor, "Yes" advances |
| 3 - Content | Memory cards grid | Click opens detail modal with navigation |
| 4 - Article | Love letter / message | Scrollable text with romantic styling |
| 5 - Album | Photo gallery by category | Filter tabs + lightbox modal |
| 6 - Thank You | Gratitude + feedback form | Submits to WhatsApp |

## Key Features

- **SPA Architecture**: No page refreshes, framer-motion transitions
- **Password Protection**: Client-side PIN check (customizable in `content.ts`)
- **Evasive Button**: Mouse-tracking button that relocates on hover
- **Floating Hearts**: CSS animated background particles
- **Music Player**: Mini player with play/pause/stop/prev/next/volume
- **Responsive Design**: Mobile-first, works on all devices
- **WhatsApp Integration**: Feedback form opens WhatsApp with pre-filled message

## Content Customization

All customizable content lives in `src/data/content.ts`:
- `CORRECT_PASSWORD`: Set the PIN (default: "140520")
- `WHATSAPP_NUMBER`: Set recipient number with country code
- `contentItems`: Array of memory cards (image, title, description, full text)
- `albumPhotos`: Array of gallery photos (image, title, category)
- `articleContent`: Love letter paragraphs

## Tech Stack

- React + TypeScript + Vite
- Tailwind CSS + shadcn/ui
- Framer Motion (page transitions)
- Lucide React (icons)

## Dependencies

```bash
npm install framer-motion lucide-react
```

## Important Notes

- Password is client-side only; determined users can inspect source
- Music player uses placeholder audio URLs; replace with actual songs
- All images stored in `public/images/` with subfolders
- Anime art style illustrations recommended for romantic aesthetic
