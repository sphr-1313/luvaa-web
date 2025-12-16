"use client";
import React, { useState } from 'react';

async function fileToBase64(file: File | null) {
  if (!file) return null;
  return await new Promise<string | null>((resolve) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string | null;
      if (!result) return resolve(null);
      // result is like data:application/pdf;base64,XXXXX
      const base64 = result.split(',')[1] || null;
      resolve(base64);
    };
    reader.onerror = () => resolve(null);
    reader.readAsDataURL(file);
  });
}

export default function ApplyForm({ roleTitle }: { roleTitle: string }) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [fileObj, setFileObj] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const name = String(formData.get('name') || '');
    const email = String(formData.get('email') || '');
    const cover = String(formData.get('cover') || '');

    const base64 = await fileToBase64(fileObj);

    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, cover, roleTitle, fileName, fileBase64: base64 }),
      });
      const json = await res.json();
      if (!res.ok || json?.error) {
        setError(json?.error || 'Submission failed');
      } else {
        setSubmitted(true);
      }
    } catch (err) {
      console.error(err);
      setError('Network error');
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return <div className="mt-6 p-4 bg-green-50 border border-green-100 rounded">Thank you — your application for <strong>{roleTitle}</strong> has been received.</div>;
  }

  return (
    <div className="mt-6">
      {!open && (
        <button onClick={() => setOpen(true)} className="bg-[#ec547c] cursor-pointer text-white px-4 py-2 rounded">Apply for this role</button>
      )}

      {open && (
        <form onSubmit={onSubmit} className="mt-4 space-y-4">
          <div>
            <label className="block text-sm text-gray-700">Full name</label>
            <input name="name" required className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm text-gray-700">Email</label>
            <input name="email" type="email" required className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm text-gray-700">Cover letter</label>
            <textarea name="cover" className="w-full border rounded px-3 py-2" rows={5} />
          </div>
          <div>
            <label className="block text-sm text-gray-700">Upload CV (PDF or DOC)</label>
            <div className="mt-2 flex items-center gap-4">
              <label className="bg-gray-100 cursor-pointer text-gray-700 px-4 py-2 rounded inline-flex items-center" htmlFor="cv-input">
                Choose file
              </label>
              <input id="cv-input" name="cv" type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={(e) => { setFileName(e.target.files?.[0]?.name || null); setFileObj(e.target.files?.[0] || null); }} />
              <span className="text-sm text-gray-600">{fileName ?? 'No file selected'}</span>
            </div>
          </div>
          {error && <div className="text-sm text-red-600">{error}</div>}
          <div className="flex gap-3">
            <button type="submit" disabled={loading} className="bg-[#ec547c] text-white px-4 py-2 rounded">{loading ? 'Sending...' : 'Send Application'}</button>
            <button type="button" onClick={() => setOpen(false)} className="px-4 py-2 rounded border">Cancel</button>
          </div>
        </form>
      )}
    </div>
  );
}
