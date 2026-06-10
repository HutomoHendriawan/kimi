# Page Structure Reference

## Page 1: Password Protection

**File:** `src/components/PasswordPage.tsx`

- Centered card with lock icon
- PIN input with show/hide toggle
- Shake animation on wrong password
- Floating hearts background
- No access to other pages without correct PIN

## Page 2: Welcome Screen

**File:** `src/components/WelcomePage.tsx`

- Romantic hero image
- Question/message for partner
- Two buttons: "Ya" (fixed) and "Tidak" (evasive)
- Evasive button relocates randomly on mouse approach
- Floating hearts background

**Evasive Button Logic:**
- Track mouse position relative to container
- Calculate random position away from cursor
- Use CSS transform for smooth relocation
- Keep button within viewport bounds

## Page 3: Content Gallery

**File:** `src/components/ContentPage.tsx`

- Grid of memory cards with images
- Click opens modal with full story
- Previous/Next navigation in modal
- Counter showing current position

## Page 4: Article/Love Letter

**File:** `src/components/ArticlePage.tsx`

- Decorative header with gradient
- Scrollable content area
- Paragraph-by-paragraph fade-in
- Signature section at bottom

## Page 5: Photo Album

**File:** `src/components/AlbumPage.tsx`

- Category filter tabs at top
- Responsive photo grid (2-3 columns)
- Click opens lightbox modal
- Category badges on hover

**Categories:**
- Semua (All)
- Romantis
- Petualangan (Adventure)
- Kebersamaan (Togetherness)
- Spesial

## Page 6: Thank You + Feedback

**File:** `src/components/ThankYouPage.tsx`

- Thank you message
- Textarea for feedback
- Submit opens WhatsApp with pre-filled message
- Success state after submission

## Shared Components

**FloatingHearts.tsx:**
- Fixed position background
- Configurable heart count
- CSS animation for floating effect

**MusicPlayer.tsx:**
- Fixed bottom-right position
- Minimized/expanded states
- Playlist with 3+ songs
- Progress bar, volume control
- Only visible after password page
