import { ServerSideFetchResultPage } from "@/components/server-side-fetch-result-page";

export const dynamic = "force-dynamic";

export default function RSCFetchFailure() {
  return (
    <ServerSideFetchResultPage
      title="Failing Server Component Fetch"
      description="This server component issues a fetch request to a non-existent domain, which should result in a network error."
      url="https://this-does-not-exist.example.com"
      method="DELETE"
    />
  );
}
