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

function parseFilter(filter: any = {}) {
    const conditions: ((query: any) => any)[] = [];

    for (const [key, value] of Object.entries(filter)) {
        if (value === undefined || value === null) continue;

        // 👉 array = IN query
        if (Array.isArray(value)) {
            conditions.push((q) =>
                q.in(key, value)
            );
            continue;
        }

        // string → ilike (search)
        if (typeof value === "string") {
            conditions.push((q) =>
                q.ilike(key, `%${value}%`)
            );
            continue;
        }

        // boolean / number → exact match
        if (typeof value === "boolean" || typeof value === "number") {
            conditions.push((q) =>
                q.eq(key, value)
            );
            continue;
        }

        // fallback
        conditions.push((q) =>
            q.eq(key, value)
        );
    }

    return conditions;
}

export async function listResource(resource: string, query?: any) {
    checkResource(resource)
    const range = query?.range
        ? JSON.parse(query.range)
        : [0, 9];

    const sort = query?.sort
        ? JSON.parse(query.sort)
        : ["id", "ASC"];

    const filter = query?.filter
        ? JSON.parse(query.filter)
        : {};

    const [from, to] = range;
    const [field, order] = sort;

    let dbQuery = supabase
        .from(resource)
        .select("*", { count: "exact" })
        .range(from, to)
        .order(field, { ascending: order === "ASC" })

    // ✅ apply filters
    const conditions = parseFilter(filter);

    for (const apply of conditions) {
        dbQuery = apply(dbQuery);
    }

    const result = await dbQuery

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