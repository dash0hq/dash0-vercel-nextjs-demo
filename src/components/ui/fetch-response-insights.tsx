type FetchResponseInsightsProps = {
  status?: number;
  statusText?: string;
  errorMessage?: string;
};

export function FetchResponseInsights({ status, statusText, errorMessage }: FetchResponseInsightsProps) {
  return (
    <>
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
      <dt className="font-medium text-muted-foreground">{title}</dt>
      <dd>{value}</dd>
    </div>
  );
}
