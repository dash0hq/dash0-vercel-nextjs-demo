type FetchResponseInsightsProps = {
  status: number;
  statusText: string;
};
export function FetchResponseInsights({ status, statusText }: FetchResponseInsightsProps) {
  return (
    <div className="border-b last:border-b-0">
      <dt className="font-medium text-muted-foreground">HTTP Status</dt>
      <dd>
        {status}
        {statusText && `: ${statusText}`}
      </dd>
    </div>
  );
}
