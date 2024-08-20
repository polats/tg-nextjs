import { useEffect } from 'react';

export function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset?: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>NEXT_PUBLIC_VERCEL_ENV - {process.env.NEXT_PUBLIC_VERCEL_ENV} : An unhandled error occurred!</h2>
      <blockquote>
        <code>
          {error.message}
        </code>
      </blockquote>
      {reset && <button onClick={() => reset()}>Try again</button>}
    </div>
  );
}