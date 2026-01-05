"use client";
import React from "react";
import reportData from "../data/reportData";

export default function VetReport() {
  const {
    header = {},
    patientDetails = {},
    hematology = {},
    bloodSmearHaemoprotozoan = {},
    reportFooter = {},
  } = reportData || {};

  const renderRows = (rows = []) =>
    rows.map((item, index) => {
      const resultStr = String(item.result || "");
      const isAbnormal = resultStr.includes("L") || resultStr.includes("H");

      return (
        <tr key={index} className="border-b last:border-none">
          <td className="py-2 px-2 ">{item.test}</td>
          <td
            className={`py-2 px-2 font-bold text-center ${
              isAbnormal ? "text-red-600" : ""
            }`}
          >
            {item.result}
          </td>
          <td className="py-2 px-2 text-center">{item.unit || "-"}</td>
          <td className="py-2 px-2 text-center text-gray-500">
            {item.referenceRange || "-"}
          </td>
        </tr>
      );
    });

  return (
    <div className="relative max-w-4xl mx-auto my-10 p-8 bg-white border shadow-lg text-sm text-gray-800 overflow-hidden">
      {/* WATERMARK */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-gray-200 text-7xl font-bold rotate-[-30deg] opacity-40">
          {header.labName}
        </span>
      </div>

      {/* CONTENT */}
      <div className="relative z-10">
        {/* HEADER */}
        <div className="text-center border-b-2 border-blue-900 pb-4 mb-6">
          <h1 className="text-3xl font-bold text-blue-900 uppercase">
            {header.labName}
          </h1>
          <p className="italic text-gray-600">{header.tagline}</p>
          <p className="text-xs mt-1">{header.address}</p>
          <p className="font-semibold text-sm mt-1">
            {header.contact?.mobile?.join(" / ")} | {header.contact?.email}
          </p>
        </div>

        {/* PATIENT DETAILS */}
        <div className="grid grid-cols-2 gap-y-2 gap-x-6 border p-4 bg-gray-50 rounded mb-6 text-sm">
          <p>
            <strong>Name:</strong> {patientDetails.name}
          </p>
          <p>
            <strong>Lab No:</strong> {patientDetails.labNumber}
          </p>
          <p>
            <strong>Age / Sex:</strong> {patientDetails.age} /{" "}
            {patientDetails.sex}
          </p>
          <p>
            <strong>Reg. Date:</strong> {patientDetails.registrationDate}
          </p>
          <p>
            <strong>Species / Breed:</strong> {patientDetails.species} /{" "}
            {patientDetails.breed}
          </p>
          <p>
            <strong>Reported:</strong> {patientDetails.reportedDate}
          </p>
          <p className="col-span-2">
            <strong>Ref By:</strong> {patientDetails.refBy}
          </p>
        </div>

        {/* CBC */}
        <h2 className="section-title item-center p-2  text-center font-bold text-xl underline">
          HEMATOLOGY
        </h2>
        <h2 className="text-green-700 underline mb-2">
          Complete Blood Count <br /> Erythrocytes
        </h2>

        <table className="w-full mb-6 border">
          <thead className="bg-purple-400">
            <tr>
              <th className="text-left px-2 py-2 underline">Test</th>
              <th className="text-center px-2 py-2 underline">Result</th>
              <th className="text-center px-2 py-2 underline">Unit</th>
              <th className="text-center px-2 py-2 underline">Range</th>
            </tr>
          </thead>

          <tbody>{renderRows(hematology.completeBloodCount)}</tbody>
        </table>
        {/* THROMBOCYTES */}

        <h2 className="text-green-700 underline">THROMBOCYTES </h2>
        <table className="w-full mb-6 border">
          <tbody>{renderRows(hematology.thrombocytes)}</tbody>
        </table>

        {/* DIFFERENTIAL */}
        <h2 className="text-green-700 underline">DIFFERENTIAL BLOOD COUNT</h2>
        <table className="w-full mb-6 border">
          <tbody>{renderRows(hematology.differentialBloodCount)}</tbody>
        </table>

        {/* SMEAR */}
        <h2 className="section-title text-center">
          BLOOD SMEAR – HAEMOPROTOZOAN
        </h2>
        {/* header */}
        <div className="text-center border-b-2 border-blue-900 pb-4 mb-6">
          <h1 className="text-3xl font-bold text-blue-900 uppercase">
            {header.labName}
          </h1>
          <p className="italic text-gray-600">{header.tagline}</p>
          <p className="text-xs mt-1">{header.address}</p>
          <p className="font-semibold text-sm mt-1">
            {header.contact?.mobile?.join(" / ")} | {header.contact?.email}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-y-2 gap-x-6 border p-4 bg-gray-50 rounded mb-6 text-sm">
          <p>
            <strong>Name:</strong> {patientDetails.name}
          </p>
          <p>
            <strong>Lab No:</strong> {patientDetails.labNumber}
          </p>
          <p>
            <strong>Age / Sex:</strong> {patientDetails.age} /{" "}
            {patientDetails.sex}
          </p>
          <p>
            <strong>Reg. Date:</strong> {patientDetails.registrationDate}
          </p>
          <p>
            <strong>Species / Breed:</strong> {patientDetails.species} /{" "}
            {patientDetails.breed}
          </p>
          <p>
            <strong>Reported:</strong> {patientDetails.reportedDate}
          </p>
          <p className="col-span-2">
            <strong>Ref By:</strong> {patientDetails.refBy}
          </p>
        </div>

        <div className="border rounded mb-6">
          {bloodSmearHaemoprotozoan.results?.map((item, i) => (
            <div
              key={i}
              className="flex justify-between px-4 py-2 border-b last:border-none"
            >
              <span>{item.test}</span>
              <span
                className={`font-bold ${
                  item.result === "Positive"
                    ? "text-red-600 underline"
                    : "text-green-700"
                }`}
              >
                {item.result}
              </span>
            </div>
          ))}
        </div>

        {/* REMARKS */}
        <div className="text-xs">
          <p className="font-bold text-red-700">Remark:</p>
          {bloodSmearHaemoprotozoan.remarks?.map((r, i) => (
            <p key={i} className="italic text-gray-600">
              {r}
            </p>
          ))}

          <p className="font-bold mt-2">Advice:</p>
          <ul className="list-disc ml-5">
            {bloodSmearHaemoprotozoan.advised?.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </div>

        {/* FOOTER */}
        <div className="mt-10 flex justify-between border-t pt-6 text-xs">
          <div>
            Printed By: {reportFooter.printedBy}
            <br />
            {reportFooter.printedDateTime}
          </div>
          <div className="text-center">
            <div className="w-32 border-b mx-auto mb-1"></div>
            <p className="font-bold">Authorized Signatory</p>
            <p>End of Report</p>
          </div>
        </div>
      </div>
    </div>
  );
}
