# ShivinShubham - Cross-Platform PWA Wrapper

[![Platform Support](https://shields.io)](#)
[![Hosting](https://shields.io)](#)
[![Deployment](https://shields.io)](#)

This repository contains the architecture, assets, and service worker scripts required to transform the Site portfolio [shivinshubham.com](https://www.shivinshubham.com) into a standalone, installable **Progressive Web App (PWA)**. 

By utilizing an optimization proxy wrapper layer hosted via GitHub Pages, this codebase bypasses Google's closed ecosystem constraints to satisfy high-tier installability heuristics for all major web browsers and passing strict telemetry rules for the **Microsoft Store**.

---

## 🏗️ Architecture Design

Because root-level files like `manifest.json` and `sw.js` cannot be directly uploaded to a Google Sites server directory, this project implements a **Dual-Delivery Mirror Architecture**:

```text
                               ┌──► Web Browser Link ──► [Installable App Frame on iOS, Android, Mac]
                               │
[shivinshubham-pwa GitHub Repository] ┤
                               │
                               └──► PWABuilder Engine ──► [Native .msixbundle File for Microsoft Store]
```

The top-level `index.html` file serves as a secure, sandboxed full-bleed gateway container that smoothly renders the target ecosystem via an optimized viewport script.

---

## 📁 Repository Directory Structure

```text
📁 shivinshubham-pwa
 ├── 📄 index.html        # Viewport layout container, deep-link router, and PWA prompt engine
 ├── 📄 offline.html      # Offline version
 ├── 📄 manifest.json     # Advanced application manifest configuring taskbar shortcuts & OS criteria
 ├── 📄 sw.js             # Validation cache handling background routine script
 ├── 🖼️ icon-512.png      # 512x512 pixel high-resolution PNG brand application icon
 └── 📝 README.md         # Documentation file
```

---

## 🚀 Native Windows OS Features Included

Through configuration optimization inside the `manifest.json` file, this app setup unlocks advanced desktop utility functions:
* **Deep-Linked Taskbar Shortcuts:** Right-clicking the app icon on Windows triggers immediate link options pointing straight to internal layout pages (`/about`, `/products`, `/blogs`, `/contact`).
* **Edge Side Panel Hook:** Permits Microsoft Edge users to dock your portfolio layout securely inside their browser utility sidebar menu.
* **Launch Interface Handler:** Restricts the operating system from launching multiple instances of the application, forcing duplicate clicks to smoothly refocus the active open window instead.
* **Tabbed Display Fallbacks:** Enables tabbed window options if chosen over standard standalone layouts.

---

## 🛠️ Update & Maintenance Deployment Pipeline

Because the codebase utilizes a dynamic reference pointer pointing to your live domain space, maintenance requires minimal oversight:

1. **Content Adjustments:** Any text edits, layout updates, or image uploads published via the **Google Sites Dashboard** update inside the desktop PWA and mobile environments immediately.
2. **App Capability Adjustments:** Modifying shortcut paths, updating branding color hex codes, or changing display settings is managed entirely by editing the files inside this repository. Changes take effect on live web engines automatically within **60 seconds** of saving a commit.

---

## ⚖️ License & Open-Source Security

This project contains zero backend configurations, active servers, database configurations, or cryptographic access tokens. The static code properties served are entirely open, public, read-only client utilities designed following secure cross-origin sandboxing guidelines. 
