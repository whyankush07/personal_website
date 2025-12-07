import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type Params = {
    params : Promise<{
        id:string
    }>
}

export async function GET(req : NextRequest, context: Params){
    try {
        const params = await context.params;
        const newId = params.id
        const project = await prisma.projects.delete({
            where: {
                id: newId
            }
        })

        const path = req.nextUrl.searchParams.get('path') || "/freelance"
        revalidatePath(path)

        return NextResponse.json({message: "Project deleted successfully"}, {status: 200})

    } catch (error) {
        return NextResponse.json({message: error}, {status: 500})
    }
}