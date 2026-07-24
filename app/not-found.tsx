import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <section>
      <div className="container-max flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <span className="font-headline text-[80px] font-bold leading-none text-uofl-red md:text-[120px]">
          404
        </span>
        <h1 className="mt-2 font-headline text-headline-lg font-bold text-on-surface">
          This page isn&apos;t on the ballot.
        </h1>
        <p className="mt-3 max-w-md text-body-md text-secondary">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you back
          to something useful.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/" variant="primary" icon="arrow-right">
            Back to home
          </Button>
          <Button href="/resources" variant="outline">
            Find a resource
          </Button>
        </div>
      </div>
    </section>
  );
}
