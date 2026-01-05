"use client";
import React, { useState } from "react";
import reportData from "../data/reportData";

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
    bloodSmearHaemoprotozoan = {},
    reportFooter = {},
  } = data || {};

  const updateRow = (section, field, index, key, value) => {
    const newData = structuredClone(data);
    newData[section][field][index][key] = value;
    setData(newData);
  };

  const renderRows = (section, field, rows = []) =>
    rows.map((item, index) => {
      const isAbnormal =
        String(item.result || "").includes("L") ||
        String(item.result || "").includes("H");

      return (
        <tr key={index} className="border-b last:border-none">
          <td className="py-2 px-2">{item.test}</td>

          <td
            className={`py-2 px-2 font-bold text-center ${
              isAbnormal ? "text-red-600" : ""
            }`}
          >
            <input
              value={item.result || ""}
              onChange={(e) =>
                updateRow(section, field, index, "result", e.target.value)
              }
              className="w-full bg-transparent outline-none text-center"
            />
          </td>

          <td className="py-2 px-2 text-center">
            <input
              value={item.unit || ""}
              onChange={(e) =>
                updateRow(section, field, index, "unit", e.target.value)
              }
              className="w-full bg-transparent outline-none text-center"
            />
          </td>

          <td className="py-2 px-2 text-center text-gray-500">
            <input
              value={item.referenceRange || ""}
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
    <div className="relative max-w-4xl mx-auto my-10 p-8 bg-white border shadow-lg text-sm text-gray-800 overflow-hidden">
      {/* WATERMARK */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-gray-200 text-7xl font-bold rotate-[-30deg] opacity-40">
          {header.labName}
        </span>
      </div>

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
            <strong>Name:</strong>{" "}
            <input
              value={patientDetails.name || ""}
              onChange={(e) => {
                const n = structuredClone(data);
                n.patientDetails.name = e.target.value;
                setData(n);
              }}
              className="bg-transparent outline-none w-40"
            />
          </p>

          <p>
            <strong>Lab No:</strong>{" "}
            <input
              value={patientDetails.labNumber || ""}
              onChange={(e) => {
                const n = structuredClone(data);
                n.patientDetails.labNumber = e.target.value;
                setData(n);
              }}
              className="bg-transparent outline-none w-40"
            />
          </p>

          <p>
            <strong>Age / Sex:</strong>{" "}
            <input
              value={patientDetails.age || ""}
              onChange={(e) => {
                const n = structuredClone(data);
                n.patientDetails.age = e.target.value;
                setData(n);
              }}
              className="bg-transparent outline-none w-20"
            />{" "}
            /{" "}
            <input
              value={patientDetails.sex || ""}
              onChange={(e) => {
                const n = structuredClone(data);
                n.patientDetails.sex = e.target.value;
                setData(n);
              }}
              className="bg-transparent outline-none w-20"
            />
          </p>

          <p>
            <strong>Reg. Date:</strong>{" "}
            <input
              value={patientDetails.registrationDate}
              onChange={(e) => {
                const n = structuredClone(data);
                n.patientDetails.registrationDate = e.target.value;
                setData(n);
              }}
              className="bg-transparent outline-none w-40"
            />
          </p>

          <p>
            <strong>Species / Breed:</strong>{" "}
            <input
              value={patientDetails.species || ""}
              onChange={(e) => {
                const n = structuredClone(data);
                n.patientDetails.species = e.target.value;
                setData(n);
              }}
              className="bg-transparent outline-none w-24"
            />{" "}
            /{" "}
            <input
              value={patientDetails.breed || ""}
              onChange={(e) => {
                const n = structuredClone(data);
                n.patientDetails.breed = e.target.value;
                setData(n);
              }}
              className="bg-transparent outline-none w-24"
            />
          </p>

          <p>
            <strong>Reported:</strong>{" "}
            <input
              value={patientDetails.reportedDate}
              onChange={(e) => {
                const n = structuredClone(data);
                n.patientDetails.reportedDate = e.target.value;
                setData(n);
              }}
              className="bg-transparent outline-none w-40"
            />
          </p>

          <p className="col-span-2">
            <strong>Ref By:</strong>{" "}
            <input
              value={patientDetails.refBy || ""}
              onChange={(e) => {
                const n = structuredClone(data);
                n.patientDetails.refBy = e.target.value;
                setData(n);
              }}
              className="bg-transparent outline-none w-64"
            />
          </p>
        </div>

        {/* HEMATOLOGY */}
        <h2 className="text-center font-bold text-xl underline mb-2">
          HEMATOLOGY
        </h2>

        <h2 className="text-green-700 underline mb-2">
          Complete Blood Count <br /> Erythrocytes
        </h2>

        <table className="w-full mb-6 border">
          <thead className="bg-purple-400">
            <tr>
              <th className="px-2 py-2 text-left underline">Test</th>
              <th className="px-2 py-2 text-center underline">Result</th>
              <th className="px-2 py-2 text-center underline">Unit</th>
              <th className="px-2 py-2 text-center underline">Range</th>
            </tr>
          </thead>
          <tbody>
            {renderRows(
              "hematology",
              "completeBloodCount",
              hematology.completeBloodCount
            )}
          </tbody>
        </table>

        {/* THROMBOCYTES */}
        <h2 className="text-green-700 underline">THROMBOCYTES</h2>
        <table className="w-full mb-6 border">
          <tbody>
            {renderRows("hematology", "thrombocytes", hematology.thrombocytes)}
          </tbody>
        </table>

        {/* DIFFERENTIAL */}
        <h2 className="text-green-700 underline">DIFFERENTIAL BLOOD COUNT</h2>
        <table className="w-full mb-6 border">
          <tbody>
            {renderRows(
              "hematology",
              "differentialBloodCount",
              hematology.differentialBloodCount
            )}
          </tbody>
        </table>

        {/* BLOOD SMEAR */}
        <h2 className="section-title text-center">
          BLOOD SMEAR – HAEMOPROTOZOAN
        </h2>

        <div className="border rounded mb-6">
          {bloodSmearHaemoprotozoan.results?.map((item, i) => (
            <div
              key={i}
              className="flex justify-between items-center px-4 py-2 border-b last:border-none"
            >
              <span>{item.test}</span>

              <select
                value={item.result}
                onChange={(e) => {
                  const n = structuredClone(data);
                  n.bloodSmearHaemoprotozoan.results[i].result = e.target.value;
                  setData(n);
                }}
                className={`w-32 text-center font-bold bg-transparent outline-none border-b
                  ${
                    item.result === "Positive"
                      ? "text-red-600 border-red-500"
                      : "text-green-700 border-green-500"
                  }`}
              >
                <option value="Negative">Negative</option>
                <option value="Positive">Positive</option>
              </select>
            </div>
          ))}
        </div>

        {/* REMARKS */}
        {/* REMARKS */}
        <div className="text-xs mt-4">
          <p className="font-bold text-red-700 mb-1">Remark:</p>

          {bloodSmearHaemoprotozoan.remarks?.map((r, i) => (
            <textarea
              key={i}
              value={r}
              rows={2}
              onChange={(e) => {
                const newData = structuredClone(data);
                newData.bloodSmearHaemoprotozoan.remarks[i] = e.target.value;
                setData(newData);
              }}
              className="w-full bg-transparent outline-none resize-none mb-1 italic text-gray-600"
            />
          ))}

          <p className="font-bold mt-3 mb-1">Advice:</p>

          <ul className="list-disc ml-5">
            {bloodSmearHaemoprotozoan.advised?.map((a, i) => (
              <li key={i}>
                <input
                  value={a}
                  onChange={(e) => {
                    const newData = structuredClone(data);
                    newData.bloodSmearHaemoprotozoan.advised[i] =
                      e.target.value;
                    setData(newData);
                  }}
                  className="w-full bg-transparent outline-none"
                />
              </li>
            ))}
          </ul>
        </div>

        {/* FOOTER */}

        <div className="mt-10 flex justify-between border-t pt-6 text-xs">
          <div>
            Printed By:{" "}
            <input
              value={reportFooter.printedBy || ""}
              onChange={(e) => {
                const newData = structuredClone(data);
                newData.reportFooter.printedBy = e.target.value;
                setData(newData);
              }}
              className="bg-transparent outline-none"
            />
            <br />
            <input
              value={reportFooter.printedDateTime || ""}
              onChange={(e) => {
                const newData = structuredClone(data);
                newData.reportFooter.printedDateTime = e.target.value;
                setData(newData);
              }}
              className="bg-transparent outline-none"
            />
          </div>

          <div className="text-center">
            <div className="w-32 border-b mx-auto mb-1"></div>

            <input
              value={reportFooter.signatory || "Authorized Signatory"}
              onChange={(e) => {
                const newData = structuredClone(data);
                newData.reportFooter.signatory = e.target.value;
                setData(newData);
              }}
              className="bg-transparent outline-none text-center font-bold"
            />

            <input
              value={reportFooter.endText || "End of Report"}
              onChange={(e) => {
                const newData = structuredClone(data);
                newData.reportFooter.endText = e.target.value;
                setData(newData);
              }}
              className="bg-transparent outline-none text-center block mt-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
