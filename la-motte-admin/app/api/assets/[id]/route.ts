import { NextResponse } from "next/server";
import {
    getResourceById,
    updateResource,
    deleteResource,
} from "@/lib/resource";
import { handleResult } from "@/lib/apiHandler";

export async function GET(
    req: Request,
    { params }: { params: { id: string } }
) {
    const result = await getResourceById("assets", params.id);
    return handleResult(result);
}

export async function PUT(
    req: Request,
    { params }: { params: { id: string } }
) {
    const body = await req.json();

    const result = await updateResource("assets", params.id, body);
    return handleResult(result);
}

export async function DELETE(
    req: Request,
    { params }: { params: { id: string } }
) {
    const result = await deleteResource("assets", params.id);
    return handleResult(result);
}