import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    let res = new NextResponse();
    const body = await req.json();

    res.cookies.set('locale', body.locale)

    return NextResponse.json({message: "Changed default Locale"}, { headers: res.headers, status: 201, statusText: "OK" });
}