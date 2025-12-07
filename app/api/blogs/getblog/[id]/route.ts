import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

type Params = {
    params : Promise<{
        id:string
    }>
}
// 
export async function GET(req:NextRequest, context : Params){
    try {
        const params = await context.params;
        const newId = params.id
        
        const data = await prisma.blog.findFirst({
            where: {
                id: newId
            }
        })

        const path = req.nextUrl.searchParams.get("path") || "/"
        revalidatePath(path)

        return NextResponse.json({data}, {status: 201})
    } catch (error) {
        return NextResponse.json({message: error}, {status: 500})
    }
}
