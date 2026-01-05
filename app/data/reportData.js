const reportData = {
  header: {
    labName: "Happy Paws Vet Lab",
    tagline: "Pets Diagnostic Center",
    registrationNumber: "UPVC6414",
    address: "Near Sonda Chauraha (Pipra Chandrabhan Road, Deoria, U.P.)",
    ownerName: "Ganesh Kumar Gupta",
    doctor: {
      name: "Dr. Samar",
      qualification: "B.VSc. & AH",
    },
    contact: {
      mobile: ["9984980785", "9214725401"],
      email: "ganeshgupta832@gmail.com",
    },
    logo: {
      required: true,
      usage: "header + watermark",
    },
  },

  patientDetails: {
    name: "Cow - 253",
    ownerName: null,
    age: "4 Years",
    sex: "Female",
    refBy: "Gurbir Jassar Kakra",
    species: "Cow",
    breed: "HF",
    color: null,
    labNumber: "M13130496",
    registrationDate: "02-09-2024 12:37:16",
    sampleDate: "02-09-2024 12:37:16",
    reportedDate: "02-09-2024 14:58:26",
  },

  hematology: {
    completeBloodCount: [
      { test: "Haemoglobin (HB)", result: 8.9, unit: "g/dl", referenceRange: "8 - 15" },
      { test: "PCV (Packed Cell Volume)", result: 26.3, unit: "%", referenceRange: "25.8 - 40.1" },
      { test: "Total Leucocytes Count (TLC)", result: "6.1 L", unit: "thou/mm3", referenceRange: "6.2 - 13.6" },
      { test: "RBC Count", result: 6.25, unit: "mill/mm3", referenceRange: "5 - 7.2" },
      { test: "MCV", result: 40.6, unit: "fL", referenceRange: "38 - 51" },
      { test: "MCH", result: 14.2, unit: "pg", referenceRange: "11.1 - 15.3" },
      { test: "MCHC", result: 35.1, unit: "g/dl", referenceRange: "34 - 38" },
      { test: "RDW", result: 12.0, unit: "%", referenceRange: null },
    ],

    thrombocytes: [
      { test: "Platelet Count", result: "732 H", unit: "thou/mm3", referenceRange: "200 - 600" },
      { test: "MPV (Mean Platelet Volume)", result: 3.6, unit: "fL", referenceRange: null },
    ],

    differentialBloodCount: [
      { test: "Neutrophils", result: 30, unit: "%", referenceRange: "13 - 39" },
      { test: "Lymphocytes", result: 63, unit: "%", referenceRange: "48 - 75" },
      { test: "Monocytes", result: 3, unit: "%", referenceRange: "3 - 11" },
      { test: "Eosinophils", result: 4, unit: "%", referenceRange: "0 - 7" },
      { test: "Basophils", result: 0, unit: "%", referenceRange: "0 - 3" },
    ],

    absoluteLeucocyteCount: [
      { test: "Neutrophils", result: 1.8, unit: "thou/mm3", referenceRange: "0.6 - 6.44" },
      { test: "Lymphocytes", result: 3.8, unit: "thou/mm3", referenceRange: "1.92 - 10.73" },
      { test: "Monocytes", result: 0.2, unit: "thou/mm3", referenceRange: "0.08 - 1" },
      { test: "Eosinophils", result: 0.2, unit: "thou/mm3", referenceRange: "0.08 - 2.15" },
      { test: "Basophils", result: 0.0, unit: "thou/mm3", referenceRange: "0 - 0.29" },
    ],
  },
  biochemistry: {
    serumTests: [
      { test: "Glucose", result: 82, unit: "mg/dL", referenceRange: "70 - 110" },
      { test: "Blood Urea", result: 34, unit: "mg/dL", referenceRange: "15 - 45" },
      { test: "Creatinine", result: 1.1, unit: "mg/dL", referenceRange: "0.6 - 1.5" },
      { test: "Total Protein", result: 6.8, unit: "g/dL", referenceRange: "6.0 - 8.0" },
      { test: "Albumin", result: 3.4, unit: "g/dL", referenceRange: "3.0 - 4.5" },
      { test: "Globulin", result: 3.4, unit: "g/dL", referenceRange: "2.5 - 4.0" },
      { test: "A/G Ratio", result: 1.0, unit: "", referenceRange: "0.8 - 2.0" },
      { test: "Total Bilirubin", result: 0.6, unit: "mg/dL", referenceRange: "0.2 - 1.2" },
      { test: "SGOT (AST)", result: 72, unit: "U/L", referenceRange: "20 - 100" },
      { test: "SGPT (ALT)", result: 34, unit: "U/L", referenceRange: "15 - 45" },
      { test: "Alkaline Phosphatase (ALP)", result: 168, unit: "U/L", referenceRange: "100 - 350" },
      { test: "Calcium", result: 9.4, unit: "mg/dL", referenceRange: "8.0 - 11.5" },
      { test: "Phosphorus", result: 4.6, unit: "mg/dL", referenceRange: "3.0 - 6.5" }
    ]
  },

  bloodSmearHaemoprotozoan: {
    results: [
      { test: "Theileriosis spp. - annulata", result: "Positive" },
      { test: "Anaplasmosis spp.", result: "Negative" },
      { test: "Babesiosis spp. (Babesia bigemina & B. bovis)", result: "Negative" },
      { test: "Trypanosoma spp. - evansi", result: "Negative" },
    ],
    remarks: [
      "Parasite detection in smear has limitation due to small size of organism and low parasitemia.",
    ],
    notes: [
      "Sensitivity of the test can be improved by providing capillary blood from ear vein.",
    ],
     note: ["Not for medical usage"],
    advised: ["PCR detection which has higher sensitivity and specificity."],
  },

  reportFooter: {
    printedBy: "Vet. Sunil Kumar",
    printedDateTime: "02-09-2024 14:58:30",
    endOfReport: true,
    watermark: "Happy Paws Vet Lab",
  },
};

export default reportData;
