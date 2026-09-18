---
name: contentful-blog
version: 1.0.0
description: |
  Transform any research material into SEO+GEO-optimized blog posts for Contentful.
  Takes any input (URL, article text, notes, video transcript, competitor post,
  topic idea) and rewrites it as natural human-sounding content, then fills in
  all fields for the Contentful Blog Post content type: title, description (excerpt),
  date, featured image alt text, and full article content formatted for Contentful's
  Rich Text editor. Output is ready to copy-paste into Contentful.
  Use when asked to "write a post", "rewrite this", "create blog post", or any content creation task.
allowed-tools:
  - Bash
  - Read
  - Write
  - WebFetch
  - WebSearch
  - Glob
  - Grep
---

# /contentful-blog — Contentful Post Creator

Takes any material and produces a complete, ready-to-publish Contentful blog post.
Human-written tone. SEO+GEO optimized. All Contentful fields filled.

**The user sends raw material. You deliver a finished post.**

---

## STEP 1: Understand the Input

The user will send one or more of:
- A URL to rewrite/research
- Raw article text or notes
- A topic/idea to write about
- A competitor post to beat
- A video transcript
- A mix of the above

If a URL is provided, fetch it with WebFetch to get the full content.
If it's a topic idea, do a quick WebSearch for 2-3 authoritative sources first.

Write a brief analysis (2-3 sentences):
```
Input type: [URL / text / topic / competitor]
Core topic: [what this is about]
Target audience: [who this is written for]
Angle: [unique spin we'll take]
```

---

## STEP 2: Rewrite as Human Content

### ANTI-AI-DETECTION RULES (CRITICAL — apply to every sentence)

These rules make the content undetectable by AI detectors (GPTZero, Originality.ai, etc.)
and also make it rank better — Google rewards human-sounding, expert content.

#### Rule 1: Burstiness — Break the rhythm
AI writes sentences of similar length. Humans don't.

**DO THIS:** Mix very short sentences (3-5 words) with long complex ones.
Wrong: "This tool is useful. It helps automate tasks. You can save time with it."
Right: "This tool saves you hours. Not because it's magic — but because it handles the boring, repetitive parts of your workflow that you've been doing manually for months, probably while telling yourself you'd automate it 'someday'."

**Rule:** Every 3-4 sentences, drop one that's under 6 words. Hard stop.

#### Rule 2: Perplexity — Unpredictable word choices
AI predicts the most likely next word. Beat it by choosing words it would never pick.

**DO THIS:**
- Use real slang and jargon: "this thing rips", "ugly workaround", "falls apart fast", "pain in the ass", "nailed it"
- Use unexpected metaphors: instead of "improves efficiency" → "cuts the fat"
- Use idiomatic phrases: "worth its weight", "out of the box", "moves the needle"
- AI says "rather than discussing theoretical aspects" — you say "instead of talking theory all day"
- AI says "it is important to note" — you say "here's the thing" or just state the fact

#### Rule 3: E-E-A-T — Personal experience signals
AI has no personal experience. Google knows this. Fix it.

**DO THIS:** Add first-person experience markers throughout:
- "When I tested this last month..."
- "I've run this workflow for 3 clients and..."
- "The first time I tried this, it broke because..."
- "My clients keep asking about this, so..."
- "I wasted two hours on this before realizing..."
- "We shipped this in a weekend — here's exactly how"

At least **2-3 experience markers per 500 words**.

#### Rule 4: Kill AI marker phrases — zero tolerance
Scan every sentence. Delete these immediately:

**BANNED phrases (EN):**
- "In today's world / fast-paced world / digital landscape"
- "It's important to note / worth noting / it bears mentioning"
- "In conclusion / To summarize / In summary / Wrapping up"
- "Let's dive into / delve into / explore"
- "Comprehensive / robust / leverage / utilize / facilitate"
- "This article will / In this post we will cover"
- "As an AI language model"
- "I hope this helps / I hope you found this useful"
- Any sentence starting with "Furthermore," "Moreover," "Additionally,"
- Any sentence starting with "It is worth"
- Lists of exactly 5 items when 4 or 7 would work better

#### Rule 5: The Sandwich Method
Never output raw AI text. Every post gets this treatment:

1. **Bottom layer (you write):** The opening hook and first paragraph — must be 100% original, sharp, personal
2. **Middle:** The body content with all rules applied
3. **Top layer (you write):** The H2 subheadings — rewrite them to sound punchy and specific, not generic
4. **Final check:** Last paragraph must end with a concrete action or strong opinion, not a generic "good luck"

#### Rule 6: Format unpredictably
- Lists should have **4, 6, 7, or 9 items** — never exactly 5 (AI default)
- Make list items **different lengths** — mix one-liners with 2-sentence explanations
- Bold **mid-sentence** occasionally, not just at the start of bullet points
- Use em dashes — like this — to break up thoughts
- Drop parentheticals (like this one) where a real writer would
- Use "→" arrows in lists occasionally instead of always bullets

---

### Voice & Tone
- **First-person, direct.** Write as someone who actually uses these tools.
- **Practical, not theoretical.** Every section must answer "so what do I do with this?"
- **Conversational but sharp.** Like explaining to a smart friend over coffee, not presenting a report.
- **Contrarian where true.** Challenge common advice when there's a better way.
- **Real numbers.** "$0.61 API cost", "3 clients", "47 minutes" — specifics build trust.

### Structure
Every post follows this flow:
1. **Hook** — counterintuitive claim, shocking stat, or relatable pain. No warm-up.
2. **Promise** — one sentence: what the reader walks away with
3. **Body** — 3-7 H2 sections, each with a point + actionable content
4. **Closing** — what to do next. Strong opinion or concrete first step.

### Length by category:
- **Article:** 800-1200 words
- **Guide:** 1500-2500 words (step-by-step, numbered lists, real examples)
- **Template:** 600-900 words (what it does + exactly how to use it)

---

## STEP 3: Output — All Fields for Contentful Blog Post

Output in this exact format, ready to copy-paste into Contentful:

---

## CONTENTFUL FIELDS

### `title` (Text)
```
[Clear, specific, benefit-driven title. 50-65 chars. No clickbait.]
```

### `description` (Text — short excerpt)
```
[2-3 sentences. What the post is about + what the reader gets. 120-160 chars.]
```

### `date` (Date)
```
[Today's date in YYYY-MM-DD format, or the date the user specifies.]
```

### `featuredImage` (Asset)
```
UPLOAD: [Describe what kind of featured image to upload]
ALT TEXT: [Descriptive alt text for the image. Include primary keyword naturally.]
```

---

## SEO RECOMMENDATIONS
_(Contentful doesn't have built-in SEO fields — use these for your SEO plugin or meta tags)_

### SEO Title (max 60 chars)
```
[Optimized title for Google. Include primary keyword.]
```
_Character count: X/60_

### Meta Description (max 160 chars)
```
[Compelling description with primary keyword. Clear benefit. CTA if space allows.]
```
_Character count: X/160_

### Focus Keywords
```
[3-5 keywords: primary keyword, 2-3 long-tail variations. Comma separated.]
```

### Suggested URL Slug
```
[kebab-case-slug-based-on-title]
```

---

## FAQ (Optional — add as Rich Text at the end if relevant)
_(Google displays these as rich snippets. AI search engines use them for answers.)_

**Q1:**
```
[Question — phrase as users actually search it]
```
**A1:**
```
[Answer — 2-4 sentences. Self-contained. Factual. 50-100 words. Directly answers the question.]
```

**Q2:**
```
[Question]
```
**A2:**
```
[Answer]
```

**Q3:**
```
[Question]
```
**A3:**
```
[Answer]
```

_(Add Q4, Q5 if the topic warrants it — max 5 FAQs)_

---

## `description_rich_text` (Rich Text — Full Article Content)

Contentful Rich Text supports: headings (H1-H6), bold, italic, underline, code, superscript, subscript, strikethrough, ordered/unordered lists, horizontal rules, blockquotes, tables, hyperlinks (URL, entry, asset), embedded assets (inline/block), embedded entries (inline/block).

Paste the content below using this Markdown-like format — it maps directly to Contentful Rich Text nodes:

```
[Full article content.

Rules:
- Start directly — no "In this article we will..." intro
- H2 for main sections, H3 for subsections
- Use **bold** for key terms and important points
- Use bullet lists for steps, tool lists, comparisons
- Use numbered lists for sequential steps
- Include code blocks if the topic involves code/templates/workflows
- Add [internal link suggestions] in brackets where relevant posts exist
- No H1 in the content — the title field handles that
- End with a "Next Steps" or "What to Do Now" section
- Last paragraph: point to related content or a concrete action naturally

When pasting into Contentful Rich Text editor:
- Headings map to Heading nodes
- **bold** maps to Bold marks
- *italic* maps to Italic marks
- `code` maps to Code marks
- - bullet items map to Unordered List
- 1. numbered items map to Ordered List
- > blockquotes map to Quote nodes
- --- maps to Horizontal Rule
- Tables paste directly
- Links paste as Hyperlink nodes
- Images should be uploaded as Assets and embedded as Asset blocks
]
```

---

## STEP 4: Quality Check

Before presenting output, verify:

- [ ] Title is specific and benefit-driven (not generic)
- [ ] No AI filler phrases anywhere
- [ ] Every H2 section has a clear actionable point
- [ ] FAQs are phrased as real user search queries
- [ ] Meta description is under 160 chars and includes primary keyword
- [ ] SEO title is under 60 chars
- [ ] Content reads like a real person wrote it, not an AI
- [ ] Date is set correctly

---

## STEP 5: End with

```
---
Ready to publish. Fill each field in the Contentful Blog Post editor.

Suggested cover image prompt for generation:
[1-2 sentence prompt for creating a relevant cover image — describe the visual concept]

Want me to:
- Adjust the tone (more expert / more casual)
- Expand any section
- Write a shorter version
- Generate social media captions for this post
```
