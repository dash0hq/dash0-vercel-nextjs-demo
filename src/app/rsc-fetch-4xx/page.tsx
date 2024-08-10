export const dynamic = "force-dynamic";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ReloadButton } from "@/components/ui/reload-button";
import { FetchResponseInsights } from "@/components/ui/fetch-response-insights";

export default async function RSCFetch4XX() {
  const resp = await fetch("https://example.com", {
    method: "DELETE",
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Server Component Fetch: 4XX</CardTitle>
        <CardDescription>
          Within the server component, a fetch request was made to <code>example.com</code> that is expected to result
          in a 4XX response status code.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FetchResponseInsights status={resp.status} statusText={resp.statusText} />
      </CardContent>
      <CardFooter className="border-t px-6 py-4">
        <ReloadButton />
      </CardFooter>
    </Card>
  );
}
