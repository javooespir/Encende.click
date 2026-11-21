import { NextRequest, NextResponse } from "next/server";

const EU = new Set([
  "AL","AD","AT","BY","BE","BA","BG","HR","CY","CZ","DK","EE","FI","FR",
  "DE","GR","HU","IS","IE","IT","XK","LV","LI","LT","LU","MT","MD","MC",
  "ME","NL","MK","NO","PL","PT","RO","RU","SM","RS","SK","SI","ES","SE",
  "CH","TR","UA","GB","VA",
]);

export async function GET(request: NextRequest) {
  const country = request.headers.get("x-vercel-ip-country") ?? "AR";
  const number = EU.has(country) ? "34623943367" : "541131462214";
  return NextResponse.json({ number }, {
    headers: { "Cache-Control": "no-store" },
  });
}
