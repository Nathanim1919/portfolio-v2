export interface ProjectDetails {
  obsession: string;
  constraint: string;
  decision: string;
  failure: string;
  insight: string;
}

export interface ProjectNode {
  id: string;
  title: string;
  type: "system" | "failure" | "ambiguous" | "craft";
  shortDesc: string;
  connections: string[];
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  details: ProjectDetails;
}

export const projects: ProjectNode[] = [
  {
    id: "deepen",
    title: "Deepen",
    type: "system",
    shortDesc: "Second Brain / AI",
    x: 50,
    y: 40,
    connections: ["mindscribe", "maed"],
    details: {
      obsession: "Why do we forget the most important connections between ideas?",
      constraint: "Latency. RAG pipelines over local vector stores were too slow for real-time thought.",
      decision: "Sacrificed perfect accuracy for speed. Moved embeddings to the edge.",
      failure: "Early versions hallucinated context that didn't exist because chunks were too small.",
      insight: "Context is not just data; it's the timing of retrieval."
    }
  },
  {
    id: "maed",
    title: "Ma'ed",
    type: "craft",
    shortDesc: "Video-First Discovery",
    x: 30,
    y: 60,
    connections: ["arif-creators", "deepen"],
    details: {
      obsession: "Menus are dead information. Food is an experience.",
      constraint: "Bandwidth. High-res video on intermittent Ethiopian mobile networks.",
      decision: "Aggressive compression and pre-caching the first 3 seconds of every visible viewport item.",
      failure: "Battery drain on older Android devices was catastrophic initially.",
      insight: "Performance is an accessibility feature, not a technical metric."
    }
  },
  {
    id: "arif-creators",
    title: "Arif-Creators",
    type: "system",
    shortDesc: "Influence / Market",
    x: 70,
    y: 55,
    connections: ["maed"],
    details: {
      obsession: "Trust is a currency, but it's hard to measure.",
      constraint: "Trust verification. How to verify influencers without invasive tracking.",
      decision: "Built a reputation protocol based on consistency rather than just reach.",
      failure: "The first metric incentivized spamming low-quality content.",
      insight: "Metrics that can be gamed, will be gamed. Design for behavior, not numbers."
    }
  },
  {
    id: "mindscribe",
    title: "MindScribe",
    type: "ambiguous",
    shortDesc: "Minimal Journaling",
    x: 40,
    y: 20,
    connections: ["deepen", "finance-vision"],
    details: {
      obsession: "Friction kills reflection.",
      constraint: "Security vs. Ease of Access. End-to-end encryption usually means lost passwords mean lost data.",
      decision: "Used local-first key generation. If you lose the key, you lose the data. No backdoors.",
      failure: "Users hated not having a 'forgot password' flow.",
      insight: "Privacy is inconvenient. That's the price."
    }
  },
  {
    id: "finance-vision",
    title: "Finance Vision",
    type: "failure",
    shortDesc: "Future Projection",
    x: 60,
    y: 80,
    connections: ["mindscribe"],
    details: {
      obsession: "Money is just time stored for later.",
      constraint: "Complexity. Financial models are boring.",
      decision: "Visualized money as a fluid system rather than a ledger.",
      failure: "The fluid simulation was confusing for accountants.",
      insight: "Metaphors are powerful, but sometimes people just want a table."
    }
  }
];
