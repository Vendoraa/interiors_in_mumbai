# Shrishti Interiors - Automated Blog Pipeline

A multi-agent blog creation and publishing pipeline built with Hermes Agent.

## Architecture

```
┌─────────────────────────────────────────────────┐
│              ORCHESTRATOR AGENT                  │
│   (Receives topic → coordinates all agents)      │
└──────┬──────────────┬──────────────┬─────────────┘
       │              │              │
       ▼              ▼              ▼
┌──────────┐  ┌──────────────┐  ┌──────────┐
│ CONTENT  │  │  HUMANIZER   │  │ QUALITY  │
│  AGENT   │  │    AGENT     │  │  AGENT   │
│          │  │              │  │          │
│ Research │  │ Anti-AI pass │  │ SEO/GEO  │
│ Write    │  │ Tone fix     │  │ Fact chk │
│ Outline  │  │ Burstiness   │  │ Readable │
└────┬─────┘  └──────┬───────┘  └────┬─────┘
     │               │               │
     ▼               ▼               ▼
┌──────────────────────────────────────────────┐
│              IMAGE AGENT                     │
│   (Generates section images via FAL/DALL-E)  │
└──────────────────┬───────────────────────────┘
                   │
                   ▼
┌──────────────────────────────────────────────┐
│              PUBLISHER AGENT                 │
│   (Formats → uploads assets → posts to CF)   │
│   Uses: Contentful MCP server                │
└──────────────────────────────────────────────┘
```

## Setup

### 1. Install Hermes Agent
```bash
# Linux/macOS/WSL2
curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash

# Windows (PowerShell)
iex (irm https://hermes-agent.nousresearch.com/install.ps1)
```

### 2. Setup with Nous Portal
```bash
hermes setup --portal
```
This configures models, image generation (FAL), and web search under one subscription.

### 3. Install Skills
Copy the skills to your Hermes skills directory:
```bash
# Linux/macOS
cp -r skills/* ~/.hermes/skills/

# Windows (PowerShell)
Copy-Item -Path "skills\*" -Destination "$env:LOCALAPPDATA\hermes\skills\" -Recurse
```

### 4. Configure Contentful MCP
The MCP config is already in `hermes-config.yaml`. Update the token if needed.

### 5. Merge Config
```bash
# Merge with your existing Hermes config
cat hermes-config.yaml >> ~/.hermes/config.yaml
```

## Usage

### Manual Run
```bash
hermes
# Then type:
Use the blog-orchestrator skill to write and publish a blog post about "modular kitchen trends in Mumbai 2026"
```

### Scheduled Runs
The cron jobs are pre-configured:
- **Monday 10 AM:** New blog post
- **Thursday 10 AM:** New blog post (different category)

Enable/disable in `hermes-config.yaml` under `cron:`.

### Start Gateway (for Telegram/Discord)
```bash
hermes gateway setup
hermes gateway start
```

## Pipeline Output

Each run produces:
```
blog_draft.md              # First draft from Content Writer
blog_metadata.json         # Title, slug, keywords, FAQs
blog_humanized.md          # Anti-AI processed version
humanization_report.json   # Humanization metrics
blog_final.md              # Quality-approved final version
quality_report.json        # SEO/GEO/readability scores
publish_report.json        # Contentful publish status
pipeline_report.json       # Full pipeline summary
images/                    # Generated images
  featured_image.jpg
  section_*.jpg
image_manifest.json        # Image metadata
research_notes.md          # Research sources
```

## Agents

| Agent | Role | Tools |
|-------|------|-------|
| Content Writer | Research + draft | Web search, file I/O |
| Image Generator | Section images | FAL image generation |
| Humanizer | Anti-AI, tone | File I/O |
| Quality Reviewer | SEO/GEO check | File I/O |
| Publisher | Contentful publish | Contentful MCP |
| Orchestrator | Pipeline coordination | Subagent spawning |

## Topic Categories

The orchestrator rotates through these to ensure variety:
1. Room-specific (bedroom, kitchen, living room)
2. Style-specific (modern, minimalist, traditional)
3. Problem-specific (small spaces, storage, lighting)
4. Trend-specific (2026 trends, new materials)
5. Budget-specific (under 5 lakhs, luxury)
6. Location-specific (Mira Road, Andheri, Bandra)

## Customization

- **Change model:** Edit `model.provider` and `model.model` in config
- **Change schedule:** Edit `cron:` entries in config
- **Change output dir:** Edit `blog_pipeline.output_dir` in config
- **Add new agents:** Create a new skill in `skills/` and add to config
