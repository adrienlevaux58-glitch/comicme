import { NextRequest, NextResponse } from 'next/server';

const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID;
const CF_TOKEN = process.env.CLOUDFLARE_TOKEN;
const MODEL = "@cf/stabilityai/stable-diffusion-xl-base-1.0";

function generatePrompts(description: string, style: string, mood: string) {
  const styleDesc = style === "Manga"
    ? "manga anime style, japanese illustration, cel shading, detailed lineart"
    : style === "US Comics"
    ? "american comic book style, bold outlines, vibrant colors, marvel style"
    : "stick figure style, simple black and white, minimalist cartoon";

  const moodDesc = mood === "Funny"
    ? "humorous, exaggerated expressions, comedic"
    : mood === "Dramatic"
    ? "dramatic lighting, emotional, cinematic"
    : "epic, dynamic, powerful";

  return [
    { prompt: `${styleDesc}, ${moodDesc}, opening scene, calm and normal, setting the scene, ${description}, wide establishing shot`, bubble: "Just a normal day..." },
    { prompt: `${styleDesc}, ${moodDesc}, something unexpected begins, first sign of trouble, ${description}, medium shot, surprised expression`, bubble: "Wait... what?!" },
    { prompt: `${styleDesc}, ${moodDesc}, main event starts, action begins, ${description}, dynamic angle, intense moment`, bubble: "Oh no, this is happening!" },
    { prompt: `${styleDesc}, ${moodDesc}, situation gets worse, complication, ${description}, close up, panic or shock`, bubble: "This can't be real!!" },
    { prompt: `${styleDesc}, ${moodDesc}, peak moment climax, most intense scene, ${description}, dramatic composition, maximum expression`, bubble: "NOOOOO!!!" },
    { prompt: `${styleDesc}, ${moodDesc}, aftermath and resolution, consequence, ${description}, quiet moment, emotional ending`, bubble: "Well... that happened." },
  ];
}

async function generatePanel(prompt: string): Promise<string> {
  const response = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/ai/run/${MODEL}`,
    {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${CF_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt })
    }
  );
  const buffer = await response.arrayBuffer();
  const base64 = Buffer.from(buffer).toString('base64');
  return `data:image/png;base64,${base64}`;
}

export async function POST(request: NextRequest) {
  const { description, style, mood } = await request.json();

  try {
    const panelConfigs = generatePrompts(description, style, mood);

    const images = await Promise.all(
      panelConfigs.map(config => generatePanel(config.prompt))
    );

    const panels = panelConfigs.map((config, i) => ({
      image: images[i],
      bubble: config.bubble
    }));

    return NextResponse.json({ panels });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Generation failed" }, { status: 500 });
  }
}