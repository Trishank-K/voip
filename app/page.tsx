import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900">
      <main className="flex flex-col items-center gap-8 p-8">
        <h1 className="text-4xl font-bold text-white">Video Call Application</h1>
        <p className="text-gray-400 text-center max-w-md">
          A minimal video calling application.
        </p>
        <Link
          href="/call"
          className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-lg"
        >
          Start a Call
        </Link>
      </main>
    </div>
  );
}
