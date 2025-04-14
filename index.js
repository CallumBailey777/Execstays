import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <Head>
        <title>ExecStays - Corporate Apartments AI Booking</title>
      </Head>
      <main className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Welcome to ExecStays</h1>
        <p className="mb-4 text-lg">AI-powered corporate apartment rentals. Smart, seamless, and personalized.</p>
        <Link href="/book">
          <button className="bg-black text-white px-6 py-3 rounded-2xl">Book Now</button>
        </Link>
      </main>
    </div>
  );
}
