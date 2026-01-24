import mongoose from "mongoose";

const VetReportSchema = new mongoose.Schema(
  {
    header: Object,
    patientDetails: Object,
    hematology: Object,
    bloodSmearHaemoprotozoan: Object,
    reportFooter: Object,
  },
  { timestamps: true }
);

export default mongoose.models.VetReport ||
  mongoose.model("VetReport", VetReportSchema);
