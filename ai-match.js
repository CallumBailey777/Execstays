import { OpenAI } from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req, res) {
  const { name, dates, preferences } = req.body;
  const prompt = `Suggest the best corporate apartment for: ${name}, for ${dates}, preferences: ${preferences}`;

  const completion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: prompt }],
    model: 'gpt-4',
  });

  const reply = completion.choices[0].message.content;
  res.status(200).json({ match: reply });
}
