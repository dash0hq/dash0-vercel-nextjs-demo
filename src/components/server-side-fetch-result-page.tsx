import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FetchResponseInsights } from "@/components/ui/fetch-response-insights";
import { ReloadButton } from "@/components/ui/reload-button";
import { ReactNode } from "react";

type ServerSideFetchResultPageProps = {
  title: string;
  description: ReactNode;
  url: string;
  method: string;
};

export async function ServerSideFetchResultPage({ title, description, url, method }: ServerSideFetchResultPageProps) {
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
