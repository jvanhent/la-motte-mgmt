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
    const result = await getResourceById("asset_types", params.id);
    return handleResult(result);
}

export async function PUT(
    req: Request,
    { params }: { params: { id: string } }
) {
    const body = await req.json();

    const result = await updateResource("asset_types", params.id, body);
    return handleResult(result);
}

export async function DELETE(
    req: Request,
    { params }: { params: { id: string } }
) {
    const result = await deleteResource("asset_types", params.id);
    return handleResult(result);
}