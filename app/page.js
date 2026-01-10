"use client";

import PreviewPage from "./components/Preview";
import Preview from "./components/Preview"
import VetReport from "./components/VetReport";

export default function HomePage() {
  const openPreview = () => {
    window.open("/preview", "_blank");
  };
  return (
    <main className="p-4">
      <div className="bg-white mt-6">
        {/* <Preview/> */}
       {/* <VetReport/> */}
       .........
      </div>
    </main>
  );
}
