import fs from 'fs';

const HF_TOKEN = process.env.HF_TOKEN;

async function generateImage(prompt, filename) {
  console.log(`Generating: ${filename}...`);
  
  const response = await fetch(
    "https://router.huggingface.co/fal-ai/fal-ai/fast-sdxl",
    {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${HF_TOKEN}`,
        "Content-Type": "application/json"
      },
   body: JSON.stringify({
  prompt: prompt,
  width: 512,
  height: 512,
  num_inference_steps: 20
})
    }
  );

  console.log("Status:", response.status);
  
 if (response.status === 200) {
    const json = await response.json();
    const imageUrl = json.images[0].url;
    console.log("Image URL:", imageUrl);
    const imageResponse = await fetch(imageUrl);
    const buffer = await imageResponse.arrayBuffer();
    fs.writeFileSync(`public/${filename}`, Buffer.from(buffer));
    console.log(`Saved: ${filename} ✅`);
  } else {
    const error = await response.text();
    console.log("Error:", error);
  }
}

const style = "manga anime style, same young male character, black hair, blue shirt, consistent character design, high quality illustration, japanese manga";

await generateImage(
  `${style}, sitting at desk drinking coffee, morning routine, sunny kitchen, relaxed happy expression, warm lighting`,
  "panel-before.png"
);

await generateImage(
  `${style}, running frantically on city street, disheveled hair, wide eyes panic expression, speed lines background, late for work, briefcase in hand`,
  "panel-during.png"
);

await generateImage(
  `${style}, standing alone in rain, watching bus drive away in distance, shoulders slumped, sad defeated expression, puddles on ground`,
  "panel-after.png"
);

console.log("Done!");