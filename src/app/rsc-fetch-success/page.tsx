export const dynamic = "force-dynamic";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ReloadButton } from "@/components/ui/reload-button";
import { FetchResponseInsights } from "@/components/ui/fetch-response-insights";

export default async function RSCFetchSuccess() {
  const resp = await fetch("https://www.example.com");

  return (
    <Card>
      <CardHeader>
        <CardTitle>Server Component Fetch: 2XX</CardTitle>
        <CardDescription>
          To render this page, a fetch request was made to <code>example.com</code>.
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
