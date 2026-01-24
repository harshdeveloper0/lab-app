import mongoose from "mongoose";

const { Schema } = mongoose;

/* ---------- Common Test Schema ---------- */
const TestSchema = new Schema(
  {
    test: String,
    result: Schema.Types.Mixed, // number | string (L/H/Positive etc.)
    unit: String,
    referenceRange: String,
  },
  { _id: false }
);

/* ---------- Header ---------- */
const HeaderSchema = new Schema(
  {
    labName: String,
    tagline: String,
    registrationNumber: String,
    address: String,
    ownerName: String,

    doctor: {
      name: String,
      qualification: String,
    },

    contact: {
      mobile: [String],
      email: String,
    },

    logo: {
      required: Boolean,
      usage: String,
    },
  },
  { _id: false }
);

/* ---------- Patient Details ---------- */
const PatientDetailsSchema = new Schema(
  {
    name: String,
    ownerName: String,
    age: String,
    sex: String,
    refBy: String,
    species: String,
    breed: String,
    color: String,
    labNumber: String,
    registrationDate: String,
    sampleDate: String,
    reportedDate: String,
  },
  { _id: false }
);

/* ---------- Hematology ---------- */
const HematologySchema = new Schema(
  {
    completeBloodCount: [TestSchema],
    thrombocytes: [TestSchema],
    differentialBloodCount: [TestSchema],
    absoluteLeucocyteCount: [TestSchema],
  },
  { _id: false }
);

/* ---------- Blood Smear / Haemoprotozoan ---------- */
const BloodSmearSchema = new Schema(
  {
    results: [
      {
        test: String,
        result: String,
      },
    ],
    remarks: [String],
    notes: [String],
    advised: [String],
  },
  { _id: false }
);

/* ---------- Footer ---------- */
const ReportFooterSchema = new Schema(
  {
    printedBy: String,
    printedDateTime: String,
    endOfReport: Boolean,
    watermark: String,
  },
  { _id: false }
);

/* ---------- MAIN REPORT SCHEMA ---------- */
const VetReportSchema = new Schema(
  {
    header: HeaderSchema,
    patientDetails: PatientDetailsSchema,
    hematology: HematologySchema,
    bloodSmearHaemoprotozoan: BloodSmearSchema,
    reportFooter: ReportFooterSchema,
  },
  {
    timestamps: true, // createdAt, updatedAt
  }
);

export default mongoose.model("VetReport", VetReportSchema);
