# Changelog — YouTube Adung Commercial

All notable changes to the YouTube Adung Commercial workstation will be documented in this file.

---

## [v1.2.0] — 2026-10-06

### Added
- **Anthropic Claude Integration:** Support for direct Claude API connectivity (BYOK) for 3-act narrative dissection and script outline synthesis.
- **Model Context Protocol (MCP) Server Bridge:** Experimental local MCP server module exposing YouTube transcript ingestion and niche velocity queries to Claude Desktop & Claude Code.
- **110 Curated Niche Libraries:** Expanded library covering 65 Faceless/AI storytelling niches and 45 Real-life creator niches.
- **Automated YouTube Compliance Layer:** Explicit creator-directed metadata analysis guidelines adhering to platform terms.

### Improved
- **Transcript Extraction Speed:** Optimized caption parser reducing 18,000-word transcript processing time to under 4 seconds.
- **Hardware-bound Licensing:** Upgraded Windows DPAPI encryption handshake for offline license validation.
- **Dual Language Documentation:** Dedicated English and Vietnamese web distribution portals on `https://adung.top`.

### Fixed
- Fixed memory overhead during concurrent multi-channel catalog scraping.
- Fixed character encoding quirks on multi-language YouTube subtitle tracks.

---

## [v1.1.0] — 2026-09-18

### Added
- **Views-Per-Hour (VPH) Outlier Detection:** Added real-time velocity multipliers to identify breakout emerging videos.
- **Emerging Channel Filter:** Filter creator catalogs by maximum video count and subscriber-to-view ratios.
- **Voice Studio CPU Integration:** Bundled lightweight offline TTS engine for previewing narration pacing.

### Improved
- SQLite indexing for faster keyword caching and competitor history recall.
- Clean dark-mode UI workstation layout with responsive sizing.

---

## [v1.0.0] — 2026-08-15

### Initial Release
- Core YouTube niche keyword finder and search volume analyzer.
- Competitor metadata inspection and tag analysis.
- Single-click Windows standalone installer (`Setup.exe`).
