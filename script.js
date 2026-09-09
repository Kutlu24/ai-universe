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
            <span class="tool-card-category">${CATEGORY_LABELS[tool.category]}</span>
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
            modalCategory.textContent = CATEGORY_LABELS[tool.category];
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
