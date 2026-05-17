import supabase from "./supabase";

export type ResourceName = "customers" | "assets" | "asset_types" | "customers_assets";

export async function listResource(resource: ResourceName, query?: any) {
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

export function getResourceById(resource: ResourceName, id: string) {
    return supabase.from(resource).select("*").eq("id", id).single();
}

export function createResource(resource: ResourceName, data: any) {
    return supabase.from(resource).insert(data).select().single();
}

export function updateResource(resource: ResourceName, id: string, data: any) {
    return supabase.from(resource).update(data).eq("id", id).select().single();
}

export function deleteResource(resource: ResourceName, id: string) {
    return supabase.from(resource).delete().eq("id", id);
}