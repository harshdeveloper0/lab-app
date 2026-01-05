"use client";
import PreviewPage from "./components/Preview";
import Preview from "./components/Preview"

export default function HomePage() {
  const openPreview = () => {
    window.open("/preview", "_blank");
  };

  return (
    <main className="p-4">
      <button
        onClick={openPreview}
        className="bg-green-700 text-white px-6 py-2 rounded"
      >
        Preview Report
      </button>
      <div className="bg-white mt-6">
        <Preview/>
      </div>
    </main>
  );
}
