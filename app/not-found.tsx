import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-background text-foreground">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-primary-400 font-mono">
          404
        </p>
        <h1 className="mt-3 text-4xl md:text-5xl font-bold">
          Page not <span className="gradient-text">found</span>
        </h1>
        <p className="mt-4 text-foreground/70 max-w-md mx-auto">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been
          moved.
        </p>
        <Link href="/" className="btn-primary mt-8 inline-flex">
          Go back home
        </Link>
      </div>
    </main>
  );
}
