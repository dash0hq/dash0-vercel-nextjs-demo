import { ServerSideFetchResultPage } from "@/components/server-side-fetch-result-page";

export const dynamic = "force-dynamic";

export default function RSCFetch4XX() {
  return (
    <ServerSideFetchResultPage
      title="Server Component Fetch: 4XX"
      description={
        <>
          Within the server component, a fetch request was made to <code>example.com</code> that is expected to result
          in a 4XX response status code.
        </>
      }
      url="https://example.com"
      method="DELETE"
    />
  );
}
