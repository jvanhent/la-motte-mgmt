import { NextResponse } from "next/server";

export function handleResult(result: any, resource?: string, range?: [number, number], count?: number | null) {
    const { data, error } = result;

    if (error) {
        return NextResponse.json(
            { error: error.message },
            { status: 400 }
        );
    }

    const response = NextResponse.json(data);

    // 👇 React-Admin pagination requirement
    if (resource && range && typeof count === "number") {
        const [from, to] = range;

        response.headers.set(
            "Content-Range",
            `${resource} ${from}-${to}/${count}`
        );

        response.headers.set(
            "Access-Control-Expose-Headers",
            "Content-Range"
        );
    }

    return response;
}