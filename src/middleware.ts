import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { context, trace } from "@opentelemetry/api";

export async function middleware(req: NextRequest) {
  const headers = new Headers(req.headers);
  const traceId = trace.getSpan(context.active())?.spanContext().traceId;
  if (traceId) {
    headers.set("middleware-trace-id", traceId);
  }

  try {
    await fetch("https://example.com");
  } catch {
    // We are not yet exposing any details about this fetch call in the UI.
  }

  return NextResponse.next({
    request: {
      headers,
    },
  });
}

export const config = {
  matcher: "/(rsc-.*)",
};
