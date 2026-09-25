import Link from "next/link";

const NotFoundPage = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-base-200 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 text-center max-w-2xl">
        {/* 404 */}
        <div className="relative mb-6">
          <span className="text-[110px] md:text-[160px] leading-none font-black tracking-tighter text-primary">
            404
          </span>

          <span className="absolute -top-2 right-[18%] md:right-[24%] text-3xl animate-bounce">
            ✦
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-5">
          Page not found!!!
        </h1>

        {/* Description */}
        <p className="text-base-content/60 text-base md:text-lg leading-8 max-w-xl mx-auto mb-9">
          Oops! Looks like you&apos;ve wandered into a page that doesn&apos;t
          exist. Maybe the page you&apos;re looking for is still being written.
        </p>

        {/* Button */}
        <Link
          href="/"
          className="btn btn-primary rounded-full px-9 h-12 min-h-12 text-base font-semibold shadow-lg shadow-primary/20 hover:scale-105 hover:shadow-xl transition-all duration-300"
        >
          <span className="text-lg">←</span>
          Back to Home
        </Link>

        {/* Small footer text */}
        <div className="mt-10 flex items-center justify-center gap-3 text-sm text-base-content/40">
          <span className="h-px w-10 bg-base-content/10" />
          <span>Lost? Let&apos;s get you back.</span>
          <span className="h-px w-10 bg-base-content/10" />
        </div>
      </div>
    </main>
  );
};
export default NotFoundPage;
