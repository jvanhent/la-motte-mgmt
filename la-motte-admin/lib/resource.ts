import supabase from "./supabase";

const allowed: string[] = [
    "customers",
    "assets",
    "asset_types",
    "customers_assets",
];

function checkResource(resource: string) {
    if (!allowed.includes(resource)) {
        throw new Response("Invalid resource: " + resource, { status: 400 });
    }
}

export async function listResource(resource: string, query?: any) {
    checkResource(resource)
    const range = query?.range
        ? JSON.parse(query.range)
        : [0, 9];

    const sort = query?.sort
        ? JSON.parse(query.sort)
        : ["id", "ASC"];

    const [from, to] = range;
    const [field, order] = sort;

    const result = await supabase
        .from(resource)
        .select("*", { count: "exact" })
        .range(from, to)
        .order(field, { ascending: order === "ASC" });

    return {
        ...result,
        meta: {
            range,
            sort,
        },
    };
}

export function getResourceById(resource: string, id: string) {
    checkResource(resource)
    return supabase.from(resource).select("*").eq("id", id).single();
}

export function createResource(resource: string, data: any) {
    checkResource(resource)
    return supabase.from(resource).insert(data).select().single();
}

export function updateResource(resource: string, id: string, data: any) {
    checkResource(resource)
    return supabase.from(resource).update(data).eq("id", id).select().single();
}

export function deleteResource(resource: string, id: string) {
    checkResource(resource)
    return supabase.from(resource).delete().eq("id", id);
}