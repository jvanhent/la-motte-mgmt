import {
    listResource,
    createResource,
} from "@/lib/resource";
import { handleResult } from "@/lib/apiHandler";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);

    const range = searchParams.get("range");
    const sort = searchParams.get("sort");

    const result = await listResource("customers", {
        range,
        sort,
    });

    return handleResult(result, "customers", result.meta.range, result.count);
}

export async function POST(req: Request) {
    const body = await req.json();

    const result = await createResource("customers", body);
    return handleResult(result);
}