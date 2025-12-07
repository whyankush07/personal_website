import { Connect } from "@/lib/db";
import { FreelanceModel } from "@/models/FreelanceModels";
import mongoose from "mongoose";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

type Params = {
    params: Promise<{
        id: string
    }>
}

export async function GET(req: NextRequest, context: Params) {
    Connect();
    const params = await context.params;
    const id = params.id;

    try {

        const isDeleted = await FreelanceModel.deleteOne({ _id: new mongoose.Types.ObjectId(id) })
        if (!isDeleted) {
            return NextResponse.json(
                { success: false, message: "Error in deleting Skill" },
                { status: 403 }
            );
        }

        const path = req.nextUrl.searchParams.get('path') || "/";
        revalidatePath(path);

        return NextResponse.json(
            { sucess: true, message: "Deleted Successfully" },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { success: false, message: "Error in API request" },
            { status: 500 }
        );
    }
}