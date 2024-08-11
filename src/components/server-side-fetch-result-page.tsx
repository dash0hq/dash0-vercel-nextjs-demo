import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FetchResponseInsights } from "@/components/ui/fetch-response-insights";
import { ReloadButton } from "@/components/ui/reload-button";
import { ReactNode } from "react";
import { context, trace } from "@opentelemetry/api";
import { headers } from "next/headers";

type ServerSideFetchResultPageProps = {
  title: string;
  description: ReactNode;
  url: string;
  method: string;
};

export async function ServerSideFetchResultPage({ title, description, url, method }: ServerSideFetchResultPageProps) {
  const middlewareTraceId = headers().get("middleware-trace-id");
  const traceId = trace.getSpan(context.active())?.spanContext().traceId;
  let errorMessage = "";
  let response: Response | null = null;

  try {
    response = await fetch(url, {
      method,
    });
  } catch (e) {
    errorMessage = String(e);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <FetchResponseInsights
          traceId={traceId}
          middlewareTraceId={middlewareTraceId ?? undefined}
          status={response?.status}
          statusText={response?.statusText}
          errorMessage={errorMessage}
        />
      </CardContent>
      <CardFooter className="border-t px-6 py-4">
        <ReloadButton />
      </CardFooter>
    </Card>
  );
}
