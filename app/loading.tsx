export default function Loading() {
  return (
    <div className="fixed inset-0 bg-white/80 z-50 flex items-center justify-center backdrop-blur-sm">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
        <p className="mt-4 text-primary font-medium tracking-wide animate-pulse">Loading...</p>
      </div>
    </div>
  );
}
