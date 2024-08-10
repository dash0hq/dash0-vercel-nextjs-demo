import { ServerSideFetchResultPage } from "@/components/server-side-fetch-result-page";

export const dynamic = "force-dynamic";

export default function RSCFetchSuccess() {
  return (
    <ServerSideFetchResultPage
      title="Server Component Fetch: 2XX"
      description={
        <>
          To render this page, a fetch request was made to <code>example.com</code>.
        </>
      }
      url="https://example.com"
      method="GET"
    />
  );
}
