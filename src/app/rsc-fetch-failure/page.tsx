export const dynamic = 'force-dynamic';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ReloadButton } from "@/components/ui/reload-button";
import { FetchResponseInsights } from "@/components/ui/fetch-response-insights";

export default async function RSCFetchFailure() {
  let errorMessage = "";
  try {
    await fetch("https://this-does-not-exist.example.com", {
      method: "DELETE",
    });
  } catch (e) {
    errorMessage = String(e);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Failing Server Component Fetch</CardTitle>
        <CardDescription>
          This server component issues a fetch request to a non-existent domain, which should result in a network error.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FetchResponseInsights errorMessage={errorMessage} />
      </CardContent>
      <CardFooter className="border-t px-6 py-4">
        <ReloadButton />
      </CardFooter>
    </Card>
  );
}
