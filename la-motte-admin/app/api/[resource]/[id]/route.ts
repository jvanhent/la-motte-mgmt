import {
    getResourceById,
    updateResource,
    deleteResource,
} from "@/lib/resource";
import { handleResult } from "@/lib/apiHandler";

export async function GET(
    req: Request,
    context: { params: Promise<{ id: string, resource: string }> }
) {
    const { id, resource } = await context.params;
    const result = await getResourceById(resource, id);
    return handleResult(result);
}

export async function PUT(
    req: Request,
    context: { params: Promise<{ id: string, resource: string }> }
) {
    const { id, resource } = await context.params;
    const body = await req.json();
    const { id: _ignored, ...updateData } = body;

    const result = await updateResource(resource, id, updateData);
    return handleResult(result);
}

export async function DELETE(
    req: Request,
    context: { params: Promise<{ id: string, resource: string }> }
) {
    const { id, resource } = await context.params;
    const result = await deleteResource(resource, id);
    return handleResult(result);
}