import connectDB from "@/lib/db";
import VetReport from "@/models/VetReport";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    await connectDB();

    const report = await VetReport.findOne({
      "patientDetails.labNumber": params.labNumber,
    });

    if (!report) {
      return NextResponse.json(
        { message: "Report not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(report);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
