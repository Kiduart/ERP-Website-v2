export default function StubPage({ title }: { title: string }) {
  return (
    <div className="pt-32 pb-20 flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">{title}</h1>
      <p className="text-xl text-brand-navy/70 mb-8 max-w-2xl">This page is coming soon. Our team is working hard to bring you this content.</p>
    </div>
  );
}
