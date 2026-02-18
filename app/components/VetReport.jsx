"use client";
import React, { useState } from "react";
import reportData from "../data/reportData";
import Image from "next/image";

export default function VetReport() {
  const today = new Date().toLocaleDateString("en-GB");
  const nowDateTime = new Date().toLocaleString("en-GB");

  const [data, setData] = useState(() => {
    const clone = structuredClone(reportData);
    if (!clone.patientDetails.registrationDate)
      clone.patientDetails.registrationDate = today;
    if (!clone.patientDetails.reportedDate)
      clone.patientDetails.reportedDate = today;
    if (!clone.reportFooter.printedDateTime)
      clone.reportFooter.printedDateTime = nowDateTime;
    return clone;
  });

  const {
    header = {},
    patientDetails = {},
    hematology = {},
    biochemistry = {},
    bloodSmearHaemoprotozoan = {},
    reportFooter = {},
  } = data;

  const updateRow = (section, field, index, key, value) => {
    const n = structuredClone(data);
    n[section][field][index][key] = value;
    setData(n);
  };

  const renderRows = (section, field, rows = []) =>
    rows.map((item, index) => {
      const isAbnormal =
        String(item.result || "").includes("L") ||
        String(item.result || "").includes("H");

      return (
        <tr key={index} className="border-b last:border-none">
          <td className="px-2 py-2">{item.test}</td>
          <td
            className={`px-2 py-2 text-center font-bold ${
              isAbnormal ? "text-red-600" : ""
            }`}
          >
            <input
              value={item.result ?? ""}
              onChange={(e) =>
                updateRow(section, field, index, "result", e.target.value)
              }
              className="w-full bg-transparent outline-none text-center"
            />
          </td>
          <td className="px-2 py-2 text-center">
            <input
              value={item.unit ?? ""}
              onChange={(e) =>
                updateRow(section, field, index, "unit", e.target.value)
              }
              className="w-full bg-transparent outline-none text-center"
            />
          </td>
          <td className="px-2 py-2 text-center text-gray-500">
            <input
              value={item.referenceRange ?? ""}
              onChange={(e) =>
                updateRow(
                  section,
                  field,
                  index,
                  "referenceRange",
                  e.target.value
                )
              }
              className="w-full bg-transparent outline-none text-center"
            />
          </td>
        </tr>
      );
    });

  return (
    <div className="max-w-4xl mx-auto my-10 p-8 bg-white border shadow text-sm">
      {/* HEADER */}
      <div className="text-center border-b-2 border-blue-900 pb-4 mb-6">
        <Image
          src="/logo.png"
          alt="Lab Logo"
          width={120}
          height={120}
          className="mx-auto mb-2"
        />

        <input
          value={header.labName}
          onChange={(e) => {
            const n = structuredClone(data);
            n.header.labName = e.target.value;
            setData(n);
          }}
          className="text-3xl font-bold text-blue-900 uppercase w-full text-center bg-transparent outline-none"
        />

        <input
          value={header.tagline}
          onChange={(e) => {
            const n = structuredClone(data);
            n.header.tagline = e.target.value;
            setData(n);
          }}
          className="italic text-gray-600 w-full text-center bg-transparent outline-none"
        />
      </div>

    
   {/* PATIENT DETAILS */}
<div className="border rounded-lg p-6 mb-8 text-sm">
  <div className="grid grid-cols-2 gap-y-6 gap-x-12">

    {/* NAME */}
    <div>
      <span className="font-semibold">Name:</span>{" "}
      <span>{patientDetails.name}</span>
    </div>

    {/* AGE / SEX */}
    <div className="text-right">
      <span className="font-semibold">Age / Sex:</span>{" "}
      <span>
        {patientDetails.age} / {patientDetails.sex}
      </span>
    </div>

    {/* ADDRESS (FULL WIDTH – CLEAN) */}
    <div className="col-span-2">
      <span className="font-semibold block mb-1">Address:</span>
      <textarea
        rows={2}
        value={patientDetails.address || ""}
        onChange={(e) => {
          const n = structuredClone(data);
          n.patientDetails.address = e.target.value;
          setData(n);
        }}
        className="w-full bg-transparent outline-none resize-none border-b border-gray-400"
        placeholder="Enter full address"
      />
    </div>

    {/* SPECIES / BREED */}
    <div>
      <span className="font-semibold">Species / Breed:</span>{" "}
      <span>
        {patientDetails.species} / {patientDetails.breed}
      </span>
    </div>

    {/* REF BY */}
    <div className="text-right">
      <span className="font-semibold">Ref By:</span>{" "}
      <span>{patientDetails.refBy}</span>
    </div>

  </div>
</div>


      {/* HEMATOLOGY */}
      <h2 className="font-bold text-center underline mb-2">HEMATOLOGY</h2>
      <table className="w-full border mb-6">
        <tbody>
          {renderRows(
            "hematology",
            "completeBloodCount",
            hematology.completeBloodCount
          )}
        </tbody>
      </table>

      {/* BIOCHEMISTRY */}
      <h2 className="font-bold underline mb-2">BIOCHEMISTRY</h2>
      <table className="w-full border mb-6">
        <tbody>
          {renderRows(
            "biochemistry",
            "serumTests",
            biochemistry.serumTests
          )}
        </tbody>
      </table>

      {/* FOOTER */}
      <div className="border-t pt-4 flex justify-between text-xs">
        <div>
          Printed By:{" "}
          <input
            value={reportFooter.printedBy}
            onChange={(e) => {
              const n = structuredClone(data);
              n.reportFooter.printedBy = e.target.value;
              setData(n);
            }}
            className="bg-transparent outline-none"
          />
          <br />
          {reportFooter.printedDateTime}
        </div>

        <div className="text-center">
          <Image
            src="/signature.png"
            alt="Signature"
            width={120}
            height={60}
            className="mx-auto"
          />
          <input
            value={reportFooter.signatory || "Authorized Signatory"}
            onChange={(e) => {
              const n = structuredClone(data);
              n.reportFooter.signatory = e.target.value;
              setData(n);
            }}
            className="bg-transparent outline-none font-bold text-center"
          />
        </div>
      </div>
    </div>
  );
}
