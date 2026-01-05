import connectDB from "@/lib/db";
import VetReport from "@/models/VetReport";
import { NextResponse } from "next/server";

/* GET SINGLE */
export async function GET(req, { params }) {
  try {
    await connectDB();
    const report = await VetReport.findById(params.id);

    if (!report) {
      return NextResponse.json({ message: "Not found" }, { status: 404 });
    }

    return NextResponse.json(report);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

/* UPDATE */
export async function PUT(req, { params }) {
  try {
    await connectDB();
    const body = await req.json();

    const updated = await VetReport.findByIdAndUpdate(
      params.id,
      body,
      { new: true }
    );

    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

/* DELETE */
export async function DELETE(req, { params }) {
  try {
    await connectDB();
    await VetReport.findByIdAndDelete(params.id);

    return NextResponse.json({ message: "Deleted successfully" });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
