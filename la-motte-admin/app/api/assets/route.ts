import { listResource, createResource } from "@/lib/resource";
import { handleResult } from "@/lib/apiHandler";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);

    const range = searchParams.get("range");
    const parsedRange = range ? JSON.parse(range) : [0, 9];

    const result = await listResource("assets", {
        range,
        sort: searchParams.get("sort"),
    });

    return handleResult(result, "assets", parsedRange, result.count);
}

export async function POST(req: Request) {
    const body = await req.json();
    const result = await createResource("assets", body);
    return handleResult(result);
}