"use client";

import { useState } from "react";
import { Icon } from "@/components/Icon";
import { sgaLinks } from "@/data/links";

const topics = [
  "General question",
  "Funding for my organization",
  "An issue on campus",
  "Getting involved / joining SGA",
  "Media / press",
];

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    topic: topics[0],
    message: "",
  });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Front-end only: compose a mailto so the message actually goes somewhere real.
    const subject = encodeURIComponent(`[SGA Website] ${form.topic}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nTopic: ${form.topic}\n\n${form.message}`
    );
    window.location.href = `mailto:${sgaLinks.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const inputCls =
    "w-full rounded border border-uofl-black/80 bg-white px-4 py-3 text-body-md text-on-surface outline-none transition-shadow focus:border-uofl-red focus:ring-2 focus:ring-uofl-red";
  const labelCls = "mb-1.5 block font-body text-label-md font-bold text-on-surface";

  if (sent) {
    return (
      <div className="rounded-lg border border-border-subtle border-l-4 border-l-accent-progress bg-white p-8 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent-progress text-white">
          <Icon name="check" size={28} />
        </span>
        <h3 className="mt-4 font-headline text-headline-sm font-bold text-on-surface">
          Your email is ready to send
        </h3>
        <p className="mt-2 text-body-md text-secondary">
          We opened your email app with the message pre-filled to{" "}
          <a href={`mailto:${sgaLinks.email}`} className="font-semibold text-uofl-red hover:underline">
            {sgaLinks.email}
          </a>
          . If nothing opened, email us there directly.
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-5 text-label-md font-semibold text-uofl-red hover:underline"
        >
          Write another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-border-subtle bg-white p-6 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelCls}>Name</label>
          <input id="name" required value={form.name} onChange={update("name")} className={inputCls} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className={labelCls}>Email</label>
          <input id="email" type="email" required value={form.email} onChange={update("email")} className={inputCls} placeholder="you@louisville.edu" />
        </div>
      </div>
      <div className="mt-5">
        <label htmlFor="topic" className={labelCls}>What&apos;s this about?</label>
        <select id="topic" value={form.topic} onChange={update("topic")} className={inputCls}>
          {topics.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>
      <div className="mt-5">
        <label htmlFor="message" className={labelCls}>Message</label>
        <textarea id="message" required rows={5} value={form.message} onChange={update("message")} className={`${inputCls} resize-y`} placeholder="Tell us what's on your mind…" />
      </div>
      <button
        type="submit"
        className="mt-6 inline-flex items-center gap-2 rounded bg-uofl-red px-7 py-3.5 font-body text-label-md font-bold uppercase tracking-[0.05em] text-white transition-all hover:bg-[#8f0000] hover:shadow-ambient"
      >
        Send message <Icon name="arrow-right" size={18} />
      </button>
      <p className="mt-3 text-label-sm text-secondary">
        This opens your email app addressed to {sgaLinks.email}. No message is stored by this site.
      </p>
    </form>
  );
}
