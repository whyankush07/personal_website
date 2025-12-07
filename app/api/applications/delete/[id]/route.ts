import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

import { prisma } from "@/lib/prisma";
type Params = {
    params: Promise<{
        id: string
    }>
}

export async function GET(req: NextRequest, context: Params) {
    try {

        const params = await context.params;
        const newId = params.id
        const data = await prisma.application.delete({
            where: {
                id: newId
            }
        });

        if (!data) {
            return NextResponse.json(
                { success: false, message: 'Error in getting Ghosts' },
                { status: 400 }
            );
        };

        const path = req.nextUrl.searchParams.get('path') || "/kaizen";
        revalidatePath(path);

        return NextResponse.json({ success: true, message: "Deleted Successfully!" }, { status: 200 });

    } catch (error) {
        console.error("Error in deleting application : ", error);
        return NextResponse.json({ success: false, message: "Error in backend" }, { status: 500 });
    }
}