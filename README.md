# Adung — YouTube Adung Commercial

[![Official Website](https://img.shields.io/badge/Website-adung.top-7c3aed.svg)](https://adung.top/)
[![Latest Release](https://img.shields.io/badge/Release-v1.2-blue.svg)](https://adung.top/#download)
[![Platform](https://img.shields.io/badge/Platform-Windows%2010%20%7C%2011%20(64--bit)-0078d7.svg)](https://adung.top/#download)
[![AI Engine](https://img.shields.io/badge/AI-Anthropic%20Claude%20%7C%20Gemini-orange.svg)](https://adung.top/)
[![Architecture](https://img.shields.io/badge/Architecture-Local--First%20%2B%20MCP-emerald.svg)](https://adung.top/)

> **Official Release & Documentation Repository for YouTube Adung Commercial**  
> Independent, bootstrapped creator intelligence workstation developed by **Adung** ([https://adung.top](https://adung.top)).

---

## Overview

**YouTube Adung Commercial** is a standalone, local-first desktop application designed for digital creators, investigative storytellers, and media production teams. It unifies deep YouTube metadata discovery, automated long-form transcript extraction, competitor velocity analysis, and AI-assisted narrative script generation.

- **Official Web Portal:** [https://adung.top](https://adung.top)
- **Vietnamese Portal:** [https://adung.top/vi.html](https://adung.top/vi.html)
- **Current Version:** v1.2 (Commercial Auto-Installer)
- **Founder & Lead Developer:** Dung Duy ([founder@adung.top](mailto:founder@adung.top))
- **LinkedIn Profile:** [https://www.linkedin.com/in/dung-duy-72a123442/](https://www.linkedin.com/in/dung-duy-72a123442/)

---

## Core Capabilities

1. **Deterministic Niche Discovery:** Pre-configured with 110 curated YouTube niche taxonomies (65 Faceless/AI + 45 Real-life Creator niches) with real-time Views-Per-Hour (VPH) velocity filters.
2. **Deep Transcript Extraction:** Extracts complete timestamped spoken transcripts from long-form videos (4,000 to 18,000+ words) in seconds to dissect 3-act narrative arcs and retention drop-offs.
3. **Anthropic Claude & MCP Integration:** Native integration with **Anthropic Claude** via API (BYOK) and developing **Model Context Protocol (MCP)** server architecture to empower Claude Desktop and Claude Code agents with live YouTube research data.
4. **Local-First Security:** All project metadata and transcripts are indexed locally in encrypted SQLite databases. Cryptographic license binding via Windows DPAPI ensures maximum privacy.

---

## Anthropic Claude & Model Context Protocol (MCP)

Adung adopts Anthropic's open-source **Model Context Protocol (MCP)** standard to bridge live YouTube intelligence into AI workflows:

```json
{
  "mcpServers": {
    "adung-youtube": {
      "command": "python",
      "args": ["-m", "adung_mcp.server"],
      "env": {
        "ADUNG_HOST": "127.0.0.1",
        "ADUNG_PORT": "8000"
      }
    }
  }
}
```

- **BYOK (Bring Your Own Key):** Users configure their own Claude API credentials locally.
- **Privacy:** Analysis happens locally on the desktop; credentials never traverse intermediary cloud servers.
- **Workflow Tools:** Exposes tools for transcript ingestion, creator-led outline development, and competitor keyword velocity to Claude.

---

## Releases & Downloads

- **Direct Download (v1.2):** [Google Drive Official Mirror](https://drive.google.com/file/d/11K-27Hlk_PLbA05L8D087sjsTE-plGSR/view?usp=sharing)
- **GitHub Release Binary:** [Setup_Youtube_Adung_Commercial_v1.2.exe](https://github.com/AdungApp/youtube-adung/releases/download/v1.2/Setup_Youtube_Adung_Commercial_v1.2.exe)
- **Package Size:** 107 MB (Bundled self-contained Windows runtime)

---

## Legal & Compliance

- **Privacy Policy:** [https://adung.top/privacy.html](https://adung.top/privacy.html)
- **Terms of Service:** [https://adung.top/terms.html](https://adung.top/terms.html)
- **YouTube Compliance:** Adung processes creator-selected public or authorized metadata strictly for research and analysis under applicable platform terms.

© 2024–2026 Adung. All rights reserved.
