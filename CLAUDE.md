# CLAUDE.md — Architecture & Agent Workflow Guidelines

> **Project:** YouTube Adung Commercial & Adung Web Distribution  
> **Maintainer:** Dung Duy — Founder & Lead Developer ([founder@adung.top](mailto:founder@adung.top))  
> **Brand:** Adung ([https://adung.top](https://adung.top))

---

## Project Overview

Adung is an independent, bootstrapped creator intelligence workstation engineered for Windows desktop. It combines deep YouTube metadata research, full-transcript extraction (4k–18k words), narrative architecture modeling, and native Anthropic Claude integration via API and Model Context Protocol (MCP).

---

## Development & Distribution Workflows

### 1. Web Portal & Landing Page (`adung.top`)
- **Hosting:** GitHub Pages via custom CNAME `adung.top` on Cloudflare DNS.
- **Language Structure:**
  - `/` (`index.html`): International English landing page (Primary canonical).
  - `/vi.html`: Vietnamese localized landing page.
  - `/privacy.html`: Comprehensive GDPR/CCPA Privacy Policy.
  - `/terms.html`: Transparent Commercial Terms of Service.
- **Verification Standards:**
  - Machine-readable Schema.org JSON-LD in `<head>` linking to official Founder LinkedIn profile (`dung-duy-72a123442`).
  - Strict compliance with Cloudflare email protection bypass (`<!--email_off-->`) to ensure automated crawler accessibility for `founder@adung.top`.
  - XML sitemap compliance (`sitemap.xml`) validated against W3C standards.

### 2. Standalone Application Packaging
- **Runtime:** Python 3.11 64-bit bundled with embedded runtimes.
- **Packaging:** PyInstaller single-folder/single-installer executable (`Setup_Youtube_Adung_Commercial_v1.2.exe`).
- **Binary Mirroring:** Hosted via official GitHub Releases and secured Google Drive distribution.

---

## Model Context Protocol (MCP) Integration Standards

Adung integrates with Anthropic Claude through the Model Context Protocol (MCP) specification:

1. **Local Bridge:** Operates on `127.0.0.1` to prevent unauthorized network exposure.
2. **Credential Privacy (BYOK):** Users provide their own Anthropic API keys. Keys are encrypted at rest using OS-level secure storage (Windows DPAPI) and never transmitted to intermediary servers.
3. **Claude Tools Exposed:**
   - `fetch_youtube_transcript`: Ingests and formats long-form timestamped captions for narrative analysis.
   - `query_niche_velocity`: Returns Views-Per-Hour (VPH) calculations and outlier multipliers across 110 tracked niche taxonomy buckets.
   - `export_script_outline`: Formats synthesized 3-act narrative structures for video production.

---

## Commit & Release Conventions

- `feat:` New creator tools, niche libraries, or MCP capabilities.
- `fix:` Bug fixes, UI scaling improvements, or platform compliance patches.
- `docs:` Documentation updates, sitemap improvements, or licensing terms.
- `sync:` Content alignment between development repo and web distribution mirrors.
