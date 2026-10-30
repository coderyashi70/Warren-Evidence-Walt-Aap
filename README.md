# THE WARREN EVIDENCE VAULT 🪆🔮

> *"The glass cannot hold what was never alive."*

A single-page paranormal investigation and evidence-management portal for the Warrens' Occult Museum, fusing an eerie **Annabelle** occult motif with a **Phantom Hologram** futuristic supernatural dashboard.

Built with **React 19, TypeScript, Vite, Tailwind CSS**, and client-side browser persistence (**localStorage** for metadata, **IndexedDB** via `idb-keyval` for custom binary media).

---

## ⚡ Quickstart

Ensure Node.js (>= 18) is installed, then run:

```bash
# Install dependencies
npm install

# Start the local development server
npm run dev
```

Open your browser at `http://localhost:5173/` to enter the Vault.

To build for production:
```bash
npm run build
npm run preview
```

---

## 🔮 Key Features

### 1. Evidence Management & Upload
- **Drag-and-Drop Ingestion Zone**: Accepts photographic evidence, EVP audio logs, and field notes.
- **Dossier Records**: Each item captures Title, Media Classification (Photo / Audio / Note), Case Assignment, Classification Tags, Capture Timestamp, Extraction Site, Threat Level (1–5), and Investigator Field Notes.
- **Full Client Persistence**:
  - Metadata stored in `localStorage` (`warren_evidence_meta_v1`).
  - High-resolution images and audio streams stored in **IndexedDB** using `idb-keyval`.
- **Preloaded Seed Data**: 9 fictional paranormal artifacts spanning 3 notorious Warren cases (no copyrighted film assets; custom spectral SVGs and acoustic models).
- **Reset Demo Data**: Easily restore baseline demo data at any time.

### 2. Instant Search & Multi-Criteria Filtering
- **Full-Text Real-Time Search**: Searches across titles, field notes, classification tags, case codes, and extraction locations.
- **Multi-Filter Engine**: Filter concurrently by Media Type, Case Dossier, Threat Level (1–5), and Tag Chips.

### 3. Grid & Holographic Timeline Views
- **Grid View**: Layered glass cards with foil-like iridescent shimmer, threat meters, and thumbnail previews.
- **Timeline View**: A central, glowing vertical chronological spine organizing evidence nodes by date and time with interactive beacons.

### 4. Interactive Paranormal Media Player & Modal
- **Built-in Procedural Audio Synthesizer**: Powered by the Web Audio API, generating authentic 14Hz infrasonic rumbles, EVP static whispers, and 432Hz harmonic containment ward tones.
- **Audio Playback**: Full support for uploaded MP3/WAV files with animated frequency meters.
- **In-place Editing & Safe Expunge**: Edit dossier details or expunge records with an in-theme confirmation modal.

### 5. "POSSESSED" Mode Toggle (Containment Breach)
- Toggle the **"POSSESS VAULT"** switch in the top HUD to trigger an emergency containment breach:
  - The void shifts to blood-obsidian and crimson embers.
  - Particle canvas motes transform into frantic rising ash.
  - Glass panels crackle with chromatic aberration and urgent warning banners.
  - Annabelle's porcelain doll eyes glow blood-red in the background.

---

## 🛡️ Sponsor Integration: KAPIDHWAJ Innovations

**Official Instagram:** [@kapidhwaj.innovations](https://www.instagram.com/kapidhwaj.innovations/)

Kapidhwaj is integrated deeply into the universe of the Vault:
1. **In-Universe Lore**: Kapidhwaj Innovations is the Vault's official "Containment Ward Supplier" and founding member of the Alliance. ("Kapidhwaj Innovations forges the wards that keep the Vault sealed. Every cabinet, every seal, every warning bears their mark.")
2. **Dedicated Allies Panel**: A prominent section in the main layout with metaphysical lore and defense specs.
3. **Themed Instagram Card**: A holographic glass card matching the UI with `@kapidhwaj.innovations` and an **"Open the portal"** button.
4. **Interactive Ward Seal Portal**: A circular rotating containment seal that pulses on hover and warps to Instagram.
5. **HUD Status**: The top telemetry bar permanently displays **"WARDED BY KAPIDHWAJ"**.
6. **Threat Level 4–5 Ward Badges**: High-danger items display **"Ward required: Kapidhwaj Seal"**.
7. **Fourth-Wall Easter Egg**: A transcribed quote from the Higgins doll: *"Even I respect the Kapidhwaj wards."*
8. **In-Theme Empty State**: *"No evidence here. The wards are holding."*

---

## 🎨 Visual Aesthetics: "Phantom Hologram"

- **Void Background**: Deep indigo-black (`#04060d`) overlaid with drifting ethereal spectral particles.
- **Layered Glass**: `backdrop-blur-md`, subtle iridescent 1px borders, and glowing drop-shadows.
- **Subtle Scanlines**: Classic CRT/HUD monitor overlay.
- **Typography**: Google Fonts **Orbitron** & **Rajdhani** for headings, **JetBrains Mono** for data.
- **Accessibility**: Full keyboard support and respect for `prefers-reduced-motion`.
