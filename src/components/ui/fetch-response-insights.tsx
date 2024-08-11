type FetchResponseInsightsProps = {
  status?: number;
  statusText?: string;
  errorMessage?: string;
  traceId?: string;
  middlewareTraceId?: string;
};

export function FetchResponseInsights({
  status,
  statusText,
  errorMessage,
  traceId,
  middlewareTraceId,
}: FetchResponseInsightsProps) {
  return (
    <>
      <KeyValue title="Trace ID" value={traceId} />
      {traceId !== middlewareTraceId && <KeyValue title="Middleware Trace ID" value={middlewareTraceId} />}
      <KeyValue title="HTTP Status" value={`${status || ""}${statusText ? `: ${statusText}` : ""}`} />
      <KeyValue title="Error Message" value={errorMessage} />
    </>
  );
}

function KeyValue({ title, value }: { title: string; value?: string }) {
  if (!value) {
    return null;
  }
  return (
    <div className="mb-2 border-b pb-2 last:mb-0 last:border-b-0 last:pb-0">
      <dt className="text-sm font-medium text-muted-foreground">{title}</dt>
      <dd className="font-mono">{value}</dd>
    </div>
  );
}
