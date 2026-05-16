import {
    getResourceById,
    updateResource,
    deleteResource,
} from "@/lib/resource";
import { handleResult } from "@/lib/apiHandler";

export async function GET(
    req: Request,
    context: { params: Promise<{ id: string }> }
) {
    const { id } = await context.params;
    const result = await getResourceById("assets", id);
    return handleResult(result);
}

export async function PUT(
    req: Request,
    context: { params: Promise<{ id: string }> }
) {
    const { id } = await context.params;
    const body = await req.json();

    const result = await updateResource("assets", id, body);
    return handleResult(result);
}

export async function DELETE(
    req: Request,
    context: { params: Promise<{ id: string }> }
) {
    const { id } = await context.params;
    const result = await deleteResource("assets", id);
    return handleResult(result);
}