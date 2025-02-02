import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8">
        <div>
          <h1 className="text-4xl font-bold text-center text-gray-900">
            ClassMood Insight
          </h1>
          <div className="mt-8 space-y-4">
            <Link 
              href="/login"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-400 hover:bg-pink-200"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}