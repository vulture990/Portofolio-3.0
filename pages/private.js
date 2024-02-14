import Head from 'next/head';

export default function Privacy() {
  return (
    <div className="min-h-screen py-10 px-5 md:px-20 bg-gray-100">
      <Head>
        <title>Privacy Policy</title>
      </Head>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-5 md:p-10">
        <h1 className="text-3xl font-bold border-b-2 pb-2">Privacy Policy</h1>
        <p className="mt-5">
          Your privacy is important to us. It is our policy to respect your privacy regarding any
          information we may collect from you across our website, <a href="/" className="text-blue-500 hover:underline">YourWebsite.com</a>, and other sites we own and operate.
        </p>
        <h2 className="mt-5 text-xl font-semibold">Information We Collect</h2>
        <p className="mt-3">
           it's used, only to connect it with the functionality to GPT
        </p>
        {/* Add more sections as needed */}
      </div>
    </div>
  );
}
