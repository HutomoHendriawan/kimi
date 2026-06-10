# Configuration Guide

## Password Setup

Edit `src/data/content.ts`:

```typescript
export const CORRECT_PASSWORD = "140520"; // Change to your PIN
```

**Recommendations:**
- Use meaningful dates (anniversaries, birth dates)
- 4-6 digits work best for UX
- Avoid overly simple combinations

## WhatsApp Integration

Edit `src/data/content.ts`:

```typescript
export const WHATSAPP_NUMBER = "6281234567890"; // With country code, no +
```

The feedback form will open WhatsApp with pre-filled message.

## Content Items (Memory Cards)

Each item needs:
- `id`: Unique number
- `title`: Short title (max 3-4 words)
- `description`: Brief teaser (1 line)
- `image`: Path from public folder
- `fullDescription`: Full story text (3-5 sentences)

## Album Photos

Each photo needs:
- `id`: Unique number
- `title`: Photo caption
- `category`: Must match one of `albumCategories`
- `image`: Path from public folder

Categories are defined in `albumCategories` array.

## Article / Love Letter

Edit `articleContent` object:
- `title`: Letter heading
- `paragraphs`: Array of paragraph strings
- `closing`: Closing phrase
- `signature`: Your name/sign-off

## Image Requirements

Store images in `public/images/`:
```
public/images/
  welcome.jpg           # Hero image (Page 2)
  content/
    first-meet.jpg      # Memory card images
    first-date.jpg
    anniversary.jpg
    adventure.jpg
  album/
    fireworks.jpg       # Gallery photos
    cooking.jpg
    picnic.jpg
    stargazing.jpg
    rain.jpg
    beach.jpg
```

Recommended: Generate anime-style romantic illustrations.
