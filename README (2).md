# 🏢 ExecStays — AI-Powered Corporate Apartment Booking

ExecStays is an AI-driven corporate housing platform that matches business travelers with personalized, fully-serviced apartment rentals. It uses OpenAI to recommend the best options and Stripe to handle secure payments.

---

## 🚀 Features

- 🤖 **AI Matching**: Suggests apartments based on user input using GPT-4
- 💳 **Secure Payments**: Stripe checkout for booking deposits
- 🏗️ **Modern Stack**: Built with Next.js, Tailwind CSS, and serverless API routes
- ⚡ **Fast Deployment**: Fully compatible with Vercel

---

## 📦 Tech Stack

- [Next.js](https://nextjs.org/) — React Framework
- [Tailwind CSS](https://tailwindcss.com/) — UI Styling
- [OpenAI API](https://platform.openai.com/) — AI Apartment Match
- [Stripe](https://stripe.com/) — Payment Handling

---

## 🛠️ Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/yourusername/execstays.git
cd execstays
```

### 2. Install dependencies
```bash
npm install
```

### 3. Create a `.env.local` file
Rename `.env.example` to `.env.local` and add your API keys:

```env
OPENAI_API_KEY=your-openai-key
STRIPE_SECRET=your-stripe-secret-key
```

### 4. Run locally
```bash
npm run dev
```

Go to `http://localhost:3000`

---

## 💡 AI Matching API

The `/api/ai-match` route sends user preferences to OpenAI and returns an apartment suggestion.

Input:
```json
{
  "name": "John Doe",
  "dates": "April 22-28",
  "preferences": "Quiet, near convention center"
}
```

Output:
```json
{
  "match": "We recommend a quiet 1BR apartment near the downtown convention center, with a dedicated workspace and weekly cleaning service."
}
```

---

## 🧪 Test Payments

Use [Stripe test cards](https://stripe.com/docs/testing) when testing.

---

## 📤 Deploy

1. Push to GitHub
2. Go to [Vercel](https://vercel.com/)
3. Import the repo
4. Add your environment variables
5. Click **Deploy**

---

## 📧 Contact

Have questions or want to contribute?

- Founder: [Your Name or GitHub Profile]
- Email: your@email.com

---

## 🏷️ License

MIT — use it, build on it, make it your own.
