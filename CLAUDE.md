# CLAUDE.md

This file provides essential context for AI assistants (like Claude) working on this codebase.

## Project Overview

**dndxdnd.com** is a personal blog and digital garden built with Next.js 15. It features blog posts, weekly updates, a Spotify listening page, and full-text search capabilities with Chinese language support.

- **Owner**: Donald Mok (@donaldxdonald)
- **License**: MIT (code), CC BY-NC-SA 4.0 (content/images)
- **Live Site**: https://dndxdnd.com

## Common Commands

```bash
# Development
pnpm dev                    # Start development server

# Building
pnpm build                  # Full build (generates data + builds app)
pnpm build:only             # Build Next.js app only (no data generation)
pnpm gen:data               # Generate RSS feeds and Spotify tracks data
pnpm gen:rss                # Generate RSS/Atom/JSON feeds
pnpm gen:tracks             # Fetch latest Spotify listening data

# Code Quality
pnpm lint                   # Run ESLint
pnpm format                 # Alias for lint

# Production
pnpm start                  # Start production server

# Other
pnpm prepare                # Setup git hooks (runs automatically)
```

## Architecture & Tech Stack

### Core Framework
- **Next.js 15.5.3** with App Router
- **React 19** with strict mode
- **TypeScript** with strict compiler options
- **pnpm** as package manager (requires Node.js >= 22)

### Content Management
- **Fumadocs MDX** (`fumadocs-mdx`) - MDX processing and content collections
- Content is stored in `/content/blog` and `/content/weekly` as MDX files
- Source configuration in `source.config.ts` defines two collections: `blog` and `weekly`
- MDX processing includes:
  - Syntax highlighting with Shiki (Rose Pine Moon theme)
  - Auto-linking headings with `#` anchors
  - Opening external links in new windows
  - GitHub Flavored Markdown support

### Styling
- **Tailwind CSS** with custom configuration
- **SASS** for complex component styles
- Custom fonts:
  - Jost (display, via `@fontsource/jost`)
  - Noto Serif (serif, via `@fontsource/noto-serif`)
  - Variable fonts defined in app/fonts (e.g., Geist Sans, Geist Mono)
- Custom animations: fade-up, fade-down, slide-up-fade, slide-down-fade
- Theme color: `#7d4bde` (purple)

### Search
- **Orama** (`@orama/orama`) for in-memory full-text search
- Custom Chinese tokenizer using `Intl.Segmenter` (server-side implementation)
- Search API at `/api/search/route.tsx`
- Client-side search UI using `cmdk` (Command+K interface)
- Highlights matched text in search results using `@orama/highlight`

### Other Key Dependencies
- `@vercel/analytics` - Analytics integration
- `@spotify/web-api-ts-sdk` - Spotify API for listening page
- `motion` - Animation library
- `next-view-transitions` - Page transition effects
- `feed` - RSS/Atom/JSON feed generation
- `sharp` - Image optimization

## Project Structure

```
donaldxdonald.xyz-V2/
├── app/                        # Next.js App Router
│   ├── (prose)/                # Route group for blog/weekly
│   │   ├── blog/
│   │   │   ├── [slug]/page.tsx # Individual blog post page
│   │   │   └── page.tsx        # Blog list page
│   │   ├── weekly/
│   │   │   ├── [slug]/page.tsx # Individual weekly post page
│   │   │   └── page.tsx        # Weekly list page
│   │   └── layout.tsx          # Shared layout for prose pages
│   ├── (gallery)/              # Route group for gallery-style pages
│   │   └── listening/          # Spotify listening page
│   ├── api/
│   │   └── search/             # Search API endpoint
│   ├── og/                     # OpenGraph image generation
│   ├── fonts/                  # Font definitions
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home page
│   ├── source.ts               # Content source loaders
│   ├── sitemap.ts              # Sitemap generation
│   └── opengraph-image.tsx     # OG image handler
├── components/
│   ├── layout/                 # Layout components (post, post-list)
│   ├── mdx/                    # MDX components (TOC, etc.)
│   ├── motion/                 # Animation components
│   ├── SearchContext.tsx       # Search command palette
│   └── AnimatedMonologue.tsx   # Home page animation
├── content/
│   ├── blog/                   # Blog post MDX files
│   ├── weekly/                 # Weekly update MDX files
│   └── json/                   # Generated JSON data (gitignored)
├── lib/
│   ├── search/                 # Search implementation
│   │   ├── server.ts           # Server-side search with Orama
│   │   ├── client.ts           # Client-side search hooks
│   │   └── shared.ts           # Shared types
│   ├── rehype.ts               # Rehype plugins
│   ├── remark.ts               # Remark plugins
│   ├── constants.ts            # App constants
│   └── utils.ts                # Utility functions
├── scripts/
│   ├── rss.ts                  # RSS feed generation
│   └── tracks.ts               # Spotify tracks fetching
├── public/                     # Static assets
│   ├── *.xml, *.atom, *.json   # Generated feeds (gitignored)
│   └── ...                     # Other static files
├── .source/                    # Generated by fumadocs-mdx (gitignored)
├── source.config.ts            # Fumadocs content configuration
├── next.config.js              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
└── tsconfig.json               # TypeScript configuration
```

## Configuration Files

### source.config.ts
Defines content collections and MDX processing options:
- **Collections**: `blog` and `weekly` (both from `/content/{type}`)
- **Schema**: Extended frontmatter with optional `date` and `image` fields
- **MDX Options**: 
  - Shiki syntax highlighting (Rose Pine Moon theme)
  - Auto-linked headings with `#` anchors
  - External links open in new windows
  - Custom code block headers showing language

### next.config.js
- Wraps config with `fumadocs-mdx/next` for MDX support
- Image domains: `cdn.donaldxdonald.xyz`, `i.scdn.co`
- Redirects: `/github` and `/twitter` to social profiles
- React strict mode enabled

### tsconfig.json
- Path aliases: `@/components/*`, `@/app/*`, `@/lib/*`, etc.
- `@/.source` points to generated Fumadocs output
- Strict mode enabled
- Module resolution: Bundler

### tailwind.config.ts
- Custom theme color: `#7d4bde`
- Font families: `display` (Jost), `serif` (Noto Serif), `default` (sans)
- Custom animations: `fade-up`, `fade-down`, `slide-up-fade`, `slide-down-fade`
- Tailwind Typography plugin enabled
- Future flag: `hoverOnlyWhenSupported: true`

## Content Management

### Adding Blog Posts
1. Create a new `.md` or `.mdx` file in `/content/blog/`
2. Add frontmatter:
   ```yaml
   ---
   title: 'Post Title'
   date: 2025-01-01
   image: https://example.com/image.jpg  # Optional
   description: Post description          # Optional
   ---
   ```
3. Write content in Markdown/MDX
4. The file will be automatically picked up by Fumadocs

### Adding Weekly Updates
Same process as blog posts, but in `/content/weekly/`

### Content Features
- **Syntax Highlighting**: Uses Shiki with Rose Pine Moon theme
- **Heading Anchors**: Auto-generated `#` links on all headings
- **External Links**: Automatically open in new tabs
- **GFM**: GitHub Flavored Markdown support (tables, task lists, etc.)
- **Frontmatter**: YAML frontmatter for metadata

## Build Process

The build process has two main steps:

1. **Data Generation** (`pnpm gen:data`):
   - Generates RSS/Atom/JSON feeds from blog and weekly posts
   - Fetches latest Spotify listening data (requires env vars)
   - Outputs to `/public` for feeds and `/content/json` for tracks data

2. **Next.js Build** (`pnpm build:only`):
   - Fumadocs processes MDX content into `.source` directory (via `postinstall` hook)
   - Next.js builds the application with Turbopack
   - Static pages generated for all blog/weekly posts

**Important**: The full `pnpm build` runs both steps sequentially. In CI/CD, ensure environment variables for Spotify API are set if you want fresh listening data. The `postinstall` script runs `fumadocs-mdx` automatically after package installation.

## Environment Variables

Required for Spotify integration (listening page):
- `SPOT_R_TOKEN` - Spotify refresh token
- `SPOT_C_ID` - Spotify client ID
- `SPOT_C_SECRET` - Spotify client secret

These are only needed for the `/listening` page and `pnpm gen:tracks` script.

## Search Implementation

The search system is built with Orama and supports Chinese text:

1. **Indexing** (`/lib/search/server.ts`):
   - Combines blog and weekly posts from content collections
   - Indexes title, description, and content fields
   - Uses custom Chinese tokenizer with `Intl.Segmenter` for proper CJK text segmentation

2. **Search API** (`/app/api/search/route.tsx`):
   - GET endpoint at `/api/search?query=...`
   - Server-side search using Orama database
   - Returns highlighted matches with context using `@orama/highlight`

3. **UI** (`/components/SearchContext.tsx`):
   - Command palette interface (Cmd+K / Ctrl+K)
   - Built with `cmdk` library
   - Shows search results or social links when empty
   - Highlights matched text in results

## Code Style & Linting

- **ESLint**: Custom config from `@dndxdnd/eslint-config`
- **Git Hooks**: Pre-commit hook runs `lint-staged` via `simple-git-hooks`
- **Auto-formatting**: ESLint auto-fixes on commit for `.js`, `.jsx`, `.ts`, `.tsx` files
- Enforces React 19 best practices and Next.js patterns

## Routing Pattern

Uses Next.js route groups for organization:

- **`(prose)`**: Content-focused pages (blog, weekly)
  - Shares a common layout with reading-optimized styling
  - Includes table of contents for individual posts
  
- **`(gallery)`**: Media-focused pages (listening)
  - Different layout optimized for visual content
  
- **Root**: Home page with animated introduction

All routes use the App Router with async Server Components where applicable.

## Key Patterns & Conventions

1. **Content Source**: Use `getBlogs()` and `getWeeklies()` from `/app/source.ts`
2. **Types**: Blog and weekly posts come from fumadocs-mdx collections
3. **Metadata**: Generate OpenGraph images via `/og` route with dynamic titles
4. **Styling**: Use Tailwind classes; custom animations defined in tailwind.config.ts
5. **MDX Components**: Define custom components in `/components/mdx`
6. **View Transitions**: Enabled via `next-view-transitions` library
7. **Package Manager**: Use `pnpm` exclusively (enforced by `engineStrict: true`)
8. **Node Version**: Requires Node.js >= 22

## Common Tasks

### Adding a New Page Type
1. Add new collection to `source.config.ts`
2. Create loader in `/app/source.ts`
3. Create route group or page in `/app`
4. Update search API to include new content

### Updating MDX Processing
1. Modify `source.config.ts` for global MDX options (plugins, syntax highlighting, etc.)
2. Add custom rehype plugins in `/lib/rehype.ts`
3. Add custom remark plugins in `/lib/remark.ts`
4. Fumadocs will reprocess during next build (via `postinstall` hook)

### Customizing Themes
1. Update Tailwind config in `tailwind.config.ts`
2. Modify Shiki syntax highlighting theme in `source.config.ts` (`rehypeCodeOptions`)
3. Update global styles in `/app/globals.css` (if needed)

## Notes for AI Assistants

- Content is managed via MDX files in `/content` - never edit `.source` directly
- The `.source` directory is auto-generated by Fumadocs MDX during builds (via `postinstall` hook)
- Search uses a custom Chinese tokenizer with `Intl.Segmenter` - consider this when modifying search
- RSS feeds are generated at build time by `scripts/rss.ts`, not at runtime
- The listening page requires Spotify API credentials to update (env vars: `SPOT_R_TOKEN`, `SPOT_C_ID`, `SPOT_C_SECRET`)
- Git hooks (`simple-git-hooks` + `lint-staged`) will auto-fix lint errors on commit
- Use `pnpm` exclusively (not npm or yarn) - enforced by `engineStrict: true`
- Node.js >= 22 is required
- The project uses Fumadocs MDX (not the older `content-collections` library visible in git status)
