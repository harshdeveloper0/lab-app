import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import VetReport from "@/models/vetReport-2";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    if (!body) {
      return NextResponse.json(
        { message: "No data received" },
        { status: 400 }
      );
    }

    const savedReport = await VetReport.create(body);

    return NextResponse.json(
      {
        message: "Report saved successfully",
        data: savedReport,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("SAVE REPORT ERROR:", error);

    return NextResponse.json(
      {
        message: "Failed to save report",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
