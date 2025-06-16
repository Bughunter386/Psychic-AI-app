const OPENAI_API_KEY = process.env.NEXT_PUBLIC_OPENAI_KEY;

export async function scanToken(address) {
  const prompt = `Analyze this token address: ${address}. Is it safe? Renounced? LP locked? Give tokenomics summary.`;

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
    }),
  });

  const json = await res.json();
  return json.choices?.[0]?.message?.content || "No response from AI.";
}