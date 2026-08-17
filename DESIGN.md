---
name: Backend Engineer Portfolio — Motion Dark
description: Near-black engineering portfolio with a single warm brass accent and film-like motion.
colors:
  ink: "#0b0d10"
  ink-raised: "#101318"
  surface: "#14181e"
  surface-raise: "#1a1f26"
  line: "rgba(255, 255, 255, 0.09)"
  line-strong: "rgba(255, 255, 255, 0.16)"
  text: "#e9e6df"
  text-soft: "#c9c4ba"
  muted: "#8b929c"
  accent: "#c9a86a"
  accent-hot: "#d8b97e"
typography:
  display:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.3rem, 6.5vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.9rem, 4.5vw, 2.8rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 600
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.06rem"
    lineHeight: 1.6
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.8rem"
    fontWeight: 500
    letterSpacing: "0.14em"
    textTransform: "uppercase"
rounded:
  pill: "999px"
  frame: "18px"
  card: "16px"
  panel: "14px"
  mock: "10px"
spacing:
  section: "clamp(4.5rem, 9vw, 7rem)"
  grid-gap: "1.4rem"
  card-pad: "1.3rem 1.4rem 1.5rem"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.8rem 1.5rem"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    rounded: "{rounded.pill}"
    padding: "0.8rem 1.5rem"
  filter-chip:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    rounded: "{rounded.pill}"
    padding: "0.55rem 1.2rem"
  filter-chip-active:
    backgroundColor: "rgba(201, 168, 106, 0.08)"
    textColor: "{colors.accent}"
    rounded: "{rounded.pill}"
    padding: "0.55rem 1.2rem"
  tag-chip:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    rounded: "{rounded.pill}"
    padding: "0.3rem 0.65rem"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.card}"
    padding: "1.3rem 1.4rem 1.5rem"
---

# Design System: The Night Desk

## Overview

**Creative North Star: "The Night Desk"**

This is the surface of a backend engineer working late: a near-black desk lit only by a single warm brass lamp whose glow follows the cursor. Every surface reads as resting dark — deep ink backgrounds, slightly-lifted charcoal panels, hairline borders of faint white — and the only color that ever burns is the brass accent, used sparingly and always with intent: the lamp glow, the active filter, the brand dot, the timeline nodes, the "open case study" arrow. It is engineering telemetry over salesmanship: mono uppercase kickers label every section like console output, and motion behaves like a well-built system — precise, damped, never decorative.

The system is **minimal, dark, and calm**, with a restrained premium feel. Type leads with tight-tracking Archivo; JetBrains Mono supplies the instrument-panel labels. Density is comfortable: generous section padding, a three-column project grid with a featured 2×2 anchor, centered section heads. Motion is the signature — every entrance uses a spring-like `cubic-bezier(0.16, 1, 0.3, 1)` ease, cards lift and their media slowly zooms, and the hero carries a cursor-tracking radial spotlight. But motion defers to the user: the entire app runs under `reducedMotion="user"`.

**Key Characteristics:**
- Near-black layered surfaces with hairline white borders; flat at rest, depth via soft drop shadows on hover.
- A single warm brass accent used sparingly as glow, focus, and signal.
- Tight-tracked Archivo display type + uppercase JetBrains Mono kickers and metadata.
- Film-quality entrance motion with `cubic-bezier(0.16, 1, 0.3, 1)`; everything honors reduced motion.
- Centered editorial section heads; responsive grid that collapses 3 → 2 → 1 columns.
- Pill-shaped controls and chips; generous radius on media frames; dark browser-mock artwork.

## Colors

One accent over a five-step near-black ramp: cold-dark neutrals that let the brass read as heat.

### Primary
- **Brass Accent** (#c9a86a): The single source of warmth. Used for the hero cursor spotlight, brand dot and its glow, hero kicker + `em` emphasis, active filter chip, timeline rail + node glow, expertise numerals, "open case study" arrows, primary button fill, and card `::before` borders on hover. Hotter hover variant **Brass Hot** (#d8b97e). Keep it under ~10% of any screen — its rarity is the point.

### Neutral
- **Ink** (#0b0d10): Page background, hero, timeline node fill, primary button text.
- **Raised Ink** (#101318): Alternate section bands (raised sections) and footer.
- **Surface** (#14181e): Cards, expertise items.
- **Surface Raise** (#1a1f26): Hover state of interactive panels.
- **Text** (#e9e6df): Primary copy, card titles, headings.
- **Soft Text** (#c9c4ba): Detail-page prose and list items.
- **Muted** (#8b929c): Decks, metadata, tags, secondary labels.
- **Line** (rgba(255,255,255,0.09)): Hairline borders, dividers.
- **Line Strong** (rgba(255,255,255,0.16)): Prominent borders (buttons, frame, card hover).

### Named Rules
**The Brass Rarity Rule.** Brass covers ≤10% of any given screen; it appears as glow or signal, never as fill except the single primary button. When everything glows, nothing does.
**The Hairline Rule.** Surfaces are separated by 1px hairlines of faint white, never by colored borders. The dark palette is cold; only the accent may introduce hue.

## Typography

**Display Font:** Archivo (with system-ui fallback)
**Body Font:** Archivo (with system-ui fallback)
**Label/Mono Font:** JetBrains Mono (with ui-monospace, monospace fallback)

**Character:** A confident, tight-tracking engineered sans for display and copy, paired with a functional mono for instrument-panel labels. The pairing reads "technical brief, well written" — no serifs, no ornament.

### Hierarchy
- **Display** (700, `clamp(2.3rem, 6.5vw, 4.5rem)`, 1.02, `-0.035em`): Hero h1, max-width 15ch, with `em` spans in brass.
- **Headline** (700, `clamp(1.9rem, 4.5vw, 2.8rem)`, 1.05, `-0.03em`): Section headings, centered under a mono kicker.
- **Title** (600, 1.2rem, `-0.01em`): Card titles; featured card title at 1.7rem.
- **Body** (400, 1.06rem, 1.6): Decks (max 56ch), detail prose (max 820px container), list items.
- **Label** (JetBrains Mono, 500, 0.8rem, `0.14em`, uppercase): Kickers, category labels, years, timeline years, expertise numerals, captions, footer meta.

### Named Rules
**The Kicker Rule.** Every section and the hero open with an uppercase mono kicker in brass (e.g. "The work", "Capabilities", "The record") before the heading. If a section lacks a kicker, it is not a section.
**The Mono Meta Rule.** All metadata — category, year, tags, method, captions, footer meta — is JetBrains Mono. Human copy is Archivo; machine data is mono.

## Layout

Content centers on a `max-width: 1200px` container (hero inner, grid, section heads, media). Sections breathe with `padding: clamp(4.5rem, 9vw, 7rem)` horizontal `clamp(1.25rem, 6vw, 5rem)`.

- **Nav:** sticky top, `rgba(11,13,16,0.7)` + `backdrop-filter: blur(12px)`, hairline bottom border. Brand (dot + name) left, section links right (hidden under 640px), pill Resume button at far right.
- **Hero:** top-heavy asymmetric — kicker, tight h1, deck, CTA row; below, a framed app mock with parallax and a mono caption. A cursor-tracking radial spotlight (`620px`, brass at 9% alpha) sits behind the content.
- **Projects grid:** 3 columns (`repeat(3, 1fr)`), gap 1.4rem; featured card spans 2×2. Collapses to 2 columns under 960px and 1 column under 640px (featured collapses to a single cell). Filter chips centered above.
- **Section heads:** centered, `max-width: 860px`; expertise grid is 2 columns (1 under 720px); timeline is 760px max with a 3rem left rail; about text is 720px centered.
- **Detail page:** hero + framed media, then a 820px body with bordered sections (`2.6rem` vertical padding, hairline separators), 2-column screenshot grid (1 under 720px).
- **Footer:** raised band, centered heading + deck, CTA row, mono meta line.

## Elevation & Depth

The system is **flat by default with light as the depth tool**. At rest, surfaces are separated by hairlines and tonal steps, never shadows. Depth appears only as a response to interaction or to stage media.

### Shadow Vocabulary
- **Card Hover** (`0 24px 50px -20px rgba(0,0,0,0.7)`): Lifted cards under cursor (`translateY(-4px)`).
- **Hero Frame** (`0 40px 90px -30px rgba(0,0,0,0.8)`): The single always-on ambient shadow, staging the product frame.
- **Accent Glow** (`0 10px 30px -12px rgba(201,168,106,0.4)` and `0 10px 34px -10px rgba(201,168,106,0.55)`): Hover glow under buttons; also used at 0.6 alpha as the brand-dot and timeline-node halo.

### Named Rules
**The Flat-By-Default Rule.** No resting shadows on cards or panels. Shadows and lift belong to hover and focus states only; the hero frame is the sole exception.

## Shapes

Pill language for anything interactive or tagged, generous radius for media, none of it playful.

- **Pills (999px):** buttons, filter chips, tags, resume, brand dot (9px), card method/featured badges.
- **Frames (18px):** hero product frame.
- **Cards (16px):** project cards.
- **Panels (14px):** expertise items, detail screenshot frames.
- **Mocks (10px):** browser-mock artwork corners (chrome bar + rounded body).
- **Timeline nodes:** 17px circles, 3px brass ring on ink fill, with glow.

All radii are `overflow: hidden`-safe; card media clips to the card corner. No sharp 0px corners anywhere in interactive surfaces.

## Components

### Buttons
- **Shape:** pill (999px), 0.8rem/1.5rem padding, 0.94rem, weight 600.
- **Primary:** brass fill, ink text; hover becomes Brass Hot (#d8b97e) with a warmer glow; arrow slides +5px.
- **Outline:** transparent fill, hairline-strong border; hover tints border brass and lifts 2px with brass shadow.
- **Ghost:** no border; used for tertiary links (e.g. GitHub).

### Filter Chips
- **Style:** pill, transparent, mono? No — 0.9rem weight 500 in muted; hairline border.
- **Hover:** text → bright, border → strong.
- **Active:** brass text, `rgba(201,168,106,0.5)` border, `rgba(201,168,106,0.08)` fill.

### Cards / Project Cards
- **Corner Style:** 16px, clipped media.
- **Background:** surface; raised band keeps them on ink.
- **Hover:** border → strong, lift 4px, brass shadow, media zooms 1.04 over 0.7s, arrow slides.
- **Layout:** media top (browser mock, category-method pill top-right, brass "Featured" pill top-left on the anchor), body with meta row (brass category in mono + muted year), title, summary, mono tag chips, brass "Open case study →".

### Tags / Chips
- **Style:** pill, hairline border, mono 0.72rem, muted text. Non-interactive.

### Timeline
- **Style:** 1px rail (`linear-gradient(180deg, brass, line)`) on the left; items grid `3rem 1fr`; year in brass mono, 17px brass-ring node with glow, title + muted detail.

### Navigation
- **Style:** sticky blurred ink bar; brand (accent-glow dot + name) left; mono-free section links (0.92rem, muted → bright) center-right; pill Resume at right; links hidden under 640px.

### Signature: Cursor Spotlight
- The hero carries a `radial-gradient(620px circle at var(--spot-x) var(--spot-y), rgba(201,168,106,0.09), transparent 60%)` that tracks the pointer — the desk lamp. Subtle by design; it is atmosphere, not interface.

## Do's and Don'ts

### Do:
- **Do** keep surfaces in the ink ramp and reserve brass for glow, focus, and signal (the Brass Rarity Rule).
- **Do** open every section with an uppercase mono kicker in brass before the heading.
- **Do** set all metadata (category, year, tags, captions, footer meta) in JetBrains Mono.
- **Do** use `cubic-bezier(0.16, 1, 0.3, 1)` for entrances and `cubic-bezier(0.16, 1, 0.3, 1)`-eased hover lifts, and cap parallax/zoom motion so it stays subtle.
- **Do** honor reduced motion — the app runs under `MotionConfig reducedMotion="user"` and CSS guards hide parallax.
- **Do** keep cards flat at rest; lift only on hover with the card-hover shadow.
- **Do** use pill shapes (999px) for every interactive chip, button, and tag; 16px for cards; 18px for the hero frame.

### Don't:
- **Don't** introduce a second accent hue or warm the neutrals; the palette is cold until brass appears.
- **Don't** fill large surfaces with brass; it is a glow and a signal, not a theme color.
- **Don't** use serif type anywhere in this world; Archivo + JetBrains Mono is the pairing.
- **Don't** add resting shadows to cards or panels (the Flat-By-Default Rule).
- **Don't** use sharp 0px corners on interactive or framed surfaces.
- **Don't** add decorative or looping motion; every animation serves emphasis or state.
- **Don't** center body copy — center only section heads, about, and footer; prose and grids align left.
