// Real, hand-verified AI tools (name, category, price tier, description, official URL).
// Every entry below is a real, currently-operating product as of 2026 - no invented
// tools or guessed URLs. Replaces the earlier 3-entry placeholder stub.
const tools = [
    // Chat & Assistants
    { name: "ChatGPT", category: "chat", price: "free", description: "OpenAI's general-purpose chat assistant, with GPT models, browsing, and image generation built in.", link: "https://chatgpt.com/" },
    { name: "Claude", category: "chat", price: "free", description: "Anthropic's assistant, built around Claude models - strong at writing, reasoning, and coding.", link: "https://claude.ai/" },
    { name: "Gemini", category: "chat", price: "free", description: "Google's assistant, tightly integrated with Search, Workspace, and Android.", link: "https://gemini.google.com/" },
    { name: "Perplexity", category: "research", price: "free", description: "An answer engine that searches the live web and cites its sources inline.", link: "https://www.perplexity.ai/" },
    { name: "Le Chat", category: "chat", price: "free", description: "Mistral AI's chat assistant, built on their open-weight model family.", link: "https://chat.mistral.ai/" },

    // Image
    { name: "Midjourney", category: "image", price: "paid", description: "High-fidelity, stylized image generation, historically Discord-first, now with its own web app.", link: "https://www.midjourney.com/" },
    { name: "Stable Diffusion", category: "image", price: "free", description: "Stability AI's open-weight image model family - runs locally or via many hosted front-ends.", link: "https://stability.ai/stable-image" },
    { name: "Adobe Firefly", category: "image", price: "free", description: "Adobe's generative image/design suite, integrated into Photoshop and Illustrator.", link: "https://firefly.adobe.com/" },
    { name: "Ideogram", category: "image", price: "free", description: "Image generation particularly strong at rendering legible text inside images.", link: "https://ideogram.ai/" },
    { name: "Leonardo AI", category: "image", price: "free", description: "Image generation aimed at game assets and production-ready art pipelines.", link: "https://leonardo.ai/" },

    // Video
    { name: "Runway", category: "video", price: "paid", description: "Text-to-video and video-editing AI tools, including the Gen video model family.", link: "https://runwayml.com/" },
    { name: "Pika", category: "video", price: "free", description: "Text- and image-to-video generation focused on short, stylized clips.", link: "https://pika.art/" },
    { name: "Synthesia", category: "video", price: "paid", description: "AI avatar video generation for training and explainer videos, from a text script.", link: "https://www.synthesia.io/" },
    { name: "HeyGen", category: "video", price: "free", description: "AI avatar and voice-cloned video generation, popular for multilingual marketing video.", link: "https://www.heygen.com/" },
    { name: "Luma Dream Machine", category: "video", price: "free", description: "Fast text/image-to-video generation from Luma AI.", link: "https://lumalabs.ai/dream-machine" },

    // Audio & Voice
    { name: "ElevenLabs", category: "audio", price: "free", description: "Realistic text-to-speech and voice cloning, widely used for narration and dubbing.", link: "https://elevenlabs.io/" },
    { name: "Suno", category: "audio", price: "free", description: "Generates full songs - vocals and instrumentation - from a text prompt.", link: "https://suno.com/" },
    { name: "Udio", category: "audio", price: "free", description: "Another text-to-music generator, competing directly with Suno on song quality.", link: "https://www.udio.com/" },
    { name: "Descript", category: "audio", price: "paid", description: "Edits audio/video by editing a text transcript - includes AI voice cloning and filler-word removal.", link: "https://www.descript.com/" },

    // Coding
    { name: "GitHub Copilot", category: "code", price: "paid", description: "In-editor AI pair programmer from GitHub/Microsoft, built into most major IDEs.", link: "https://github.com/features/copilot" },
    { name: "Cursor", category: "code", price: "free", description: "An AI-native code editor (a VS Code fork) built around multi-file, agentic edits.", link: "https://cursor.com/" },
    { name: "Claude Code", category: "code", price: "paid", description: "Anthropic's terminal- and IDE-based coding agent, built on Claude models.", link: "https://claude.com/claude-code" },
    { name: "Replit", category: "code", price: "free", description: "Browser-based coding environment with an AI agent that can scaffold and run whole apps.", link: "https://replit.com/" },
    { name: "v0", category: "code", price: "free", description: "Vercel's tool for generating React/Next.js UI components from a text or image prompt.", link: "https://v0.dev/" },

    // Writing
    { name: "Grammarly", category: "writing", price: "free", description: "Grammar, tone, and clarity assistant that works inline across most apps and browsers.", link: "https://www.grammarly.com/" },
    { name: "Jasper", category: "writing", price: "paid", description: "AI writing assistant aimed at marketing teams - brand voice, campaigns, long-form content.", link: "https://www.jasper.ai/" },
    { name: "Notion AI", category: "writing", price: "paid", description: "Writing, summarizing, and Q&A built directly into Notion pages and databases.", link: "https://www.notion.com/product/ai" },

    // Research
    { name: "NotebookLM", category: "research", price: "free", description: "Google's tool for asking questions across your own uploaded documents, grounded in citations.", link: "https://notebooklm.google/" },
    { name: "Elicit", category: "research", price: "free", description: "Searches and summarizes academic papers to help answer a specific research question.", link: "https://elicit.com/" },
    { name: "Consensus", category: "research", price: "free", description: "A search engine over peer-reviewed research, surfacing consensus across papers on a claim.", link: "https://consensus.app/" },

    // Agents & Automation
    { name: "Zapier", category: "agents", price: "free", description: "No-code automation between apps, now with AI-driven \"Zaps\" and agent-style workflows.", link: "https://zapier.com/ai" },
    { name: "Make", category: "agents", price: "free", description: "Visual workflow automation platform (formerly Integromat), with AI-app integrations.", link: "https://www.make.com/" },
];

// DOM references
const categoryFilter = document.getElementById("category-filter");
const priceFilter = document.getElementById("price-filter");
const toolList = document.getElementById("tool-list");
const searchBar = document.getElementById("search-bar");
const resultCount = document.getElementById("result-count");
const modal = document.getElementById("tool-detail-modal");
const modalLogo = document.getElementById("tool-detail-logo");
const modalCategory = document.getElementById("tool-detail-category");
const modalTitle = document.getElementById("tool-detail-title");
const modalDescription = document.getElementById("tool-detail-description");
const modalLink = document.getElementById("tool-detail-link");
const modalClose = document.querySelector(".close");

const CATEGORY_LABELS = {
    chat: "Chat & Assistants",
    image: "Image",
    video: "Video",
    audio: "Audio & Voice",
    code: "Coding",
    writing: "Writing",
    research: "Research",
    agents: "Agents & Automation",
};

// Minimal hand-drawn line icons (currentColor) - one per category, no icon
// library/CDN, just inline SVG paths sized for the category badges.
const CATEGORY_ICONS = {
    chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
    image: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>',
    video: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="15" height="14" rx="2"/><path d="M17 10l5-3v10l-5-3"/></svg>',
    audio: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 10v4M9 6v12M14 9v6M19 11v2"/></svg>',
    code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l-6-6 6-6M15 6l6 6-6 6"/></svg>',
    writing: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>',
    research: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>',
    agents: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="6" r="2.2"/><circle cx="19" cy="6" r="2.2"/><circle cx="12" cy="18" r="2.2"/><path d="M6.6 7.6L11 16M17.4 7.6L13 16"/></svg>',
};

// Real favicons via Google's public favicon service - no logo files hosted
// or invented here, just the tool's own icon pulled from its real domain.
function faviconUrl(link) {
    const host = new URL(link).hostname;
    return `https://www.google.com/s2/favicons?domain=${host}&sz=64`;
}

function renderToolList() {
    toolList.innerHTML = "";

    const selectedCategory = categoryFilter.value;
    const selectedPrice = priceFilter.value;
    const query = searchBar.value.trim().toLowerCase();

    const filtered = tools.filter((tool) => {
        const categoryOk = selectedCategory === "all" || tool.category === selectedCategory;
        const priceOk = selectedPrice === "all" || tool.price === selectedPrice;
        const searchOk =
            tool.name.toLowerCase().includes(query) ||
            tool.description.toLowerCase().includes(query);
        return categoryOk && priceOk && searchOk;
    });

    resultCount.textContent = `${filtered.length} tool${filtered.length === 1 ? "" : "s"}`;

    filtered.forEach((tool) => {
        const card = document.createElement("div");
        card.className = "tool-card";
        card.innerHTML = `
            <div class="tool-card-head">
                <img class="tool-logo" src="${faviconUrl(tool.link)}" alt="" loading="lazy" onerror="this.style.display='none'">
                <span class="tool-card-category">${CATEGORY_ICONS[tool.category]}${CATEGORY_LABELS[tool.category]}</span>
            </div>
            <h3>${tool.name}</h3>
            <p>${tool.description}</p>
            <a href="#" data-tool="${tool.name}">Details</a>
        `;
        toolList.appendChild(card);
    });
}

categoryFilter.addEventListener("change", renderToolList);
priceFilter.addEventListener("change", renderToolList);
searchBar.addEventListener("input", renderToolList);

toolList.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
        e.preventDefault();
        const toolName = e.target.dataset.tool;
        const tool = tools.find((t) => t.name === toolName);
        if (tool) {
            modalLogo.src = faviconUrl(tool.link);
            modalLogo.style.display = "";
            modalCategory.innerHTML = `${CATEGORY_ICONS[tool.category]}${CATEGORY_LABELS[tool.category]}`;
            modalTitle.textContent = tool.name;
            modalDescription.textContent = tool.description;
            modalLink.href = tool.link;
            modal.style.display = "flex";
        }
    }
});

modalClose.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        modal.style.display = "none";
    }
});

renderToolList();

// Decorative header motif reinforcing the "universe" name: a few faint
// concentric orbit rings plus scattered star-points, drawn once at the
// existing --accent gold at low opacity. Static (no animation loop) so it
// costs nothing at runtime and needs no prefers-reduced-motion guard.
function drawOrbitCanvas() {
    const canvas = document.getElementById("orbit-canvas");
    const header = canvas.parentElement;
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    const w = header.clientWidth;
    const h = header.clientHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);

    const cx = w * 0.82;
    const cy = h * 0.22;
    const accent = "224, 169, 75";

    ctx.strokeStyle = `rgba(${accent}, 0.16)`;
    ctx.lineWidth = 1;
    [0.5, 0.75, 1.0].forEach((scale) => {
        ctx.beginPath();
        ctx.ellipse(cx, cy, 60 * scale, 22 * scale, -0.3, 0, Math.PI * 2);
        ctx.stroke();
    });

    ctx.fillStyle = `rgba(${accent}, 0.9)`;
    ctx.beginPath();
    ctx.arc(cx, cy, 3, 0, Math.PI * 2);
    ctx.fill();

    let seed = 42;
    const rand = () => {
        seed = (seed * 9301 + 49297) % 233280;
        return seed / 233280;
    };
    ctx.fillStyle = `rgba(${accent}, 0.55)`;
    for (let i = 0; i < 22; i++) {
        const x = rand() * w;
        const y = rand() * h * 0.7;
        const r = rand() * 1.2 + 0.4;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
    }
}

drawOrbitCanvas();
window.addEventListener("resize", drawOrbitCanvas);
