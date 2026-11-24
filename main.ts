import { mkdirSync, writeFileSync } from "node:fs";

// Loading Screen Gold: one tip, 200 characters or fewer, for stressed developers
// and the AI coding agents sharing their keyboard at 3 a.m.
// The tip speaks to both at once: the agent is the dev's own stubbornness,
// mirrored back with more patience than the dev has left.
const tip = "Tip: your agent has now tried the same fix four times. It is not stubborn. It is you, with more patience.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", tip);
