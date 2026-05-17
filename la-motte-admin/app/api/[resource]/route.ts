import {
    listResource,
    createResource,
} from "@/lib/resource"
import { handleResult } from "@/lib/apiHandler"

export async function GET(req: Request, context: { params: Promise<{ resource: string }> }) {
    const { resource } = await context.params
    const { searchParams } = new URL(req.url)

    const range = searchParams.get("range")
    const sort = searchParams.get("sort")
    const filter = searchParams.get("filter")

    const result = await listResource(resource, {
        range,
        sort,
        filter
    })

    return handleResult(result, resource, result.meta.range, result.count)
}

export async function POST(req: Request, context: { params: Promise<{ resource: string }> }) {
    const { resource } = await context.params
    const body = await req.json()

    const result = await createResource(resource, body)
    return handleResult(result)
}