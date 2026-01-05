"use client";
import VetReport from "./VetReport";
export default function PreviewPage() {
  return (
    <>
      {/* PRINT BUTTON */}
      <div className="p-4 text-right print:hidden">
        <button
          onClick={() => window.print()}
          className="bg-blue-700 text-white px-6 py-2 rounded"
        >
          Download PDF
        </button>
      </div>
      {/* REPORT */}
      <div className="bg-white">
        <VetReport />
      </div>
    </>
  );
}
