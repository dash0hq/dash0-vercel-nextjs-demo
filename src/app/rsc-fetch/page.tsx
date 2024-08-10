import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ReloadButton } from "@/components/ui/reload-button";

export default async function Home() {
  const resp = await fetch("https://www.example.com");
  if (!resp.ok) {
    console.error("Failed to fetch example.com");
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>RSC: Fetch</CardTitle>
        <CardDescription>
          To render this page, a fetch request was made to <code>example.com</code>.
        </CardDescription>
      </CardHeader>
      <CardContent>TODO</CardContent>
      <CardFooter className="border-t px-6 py-4">
        <ReloadButton />
      </CardFooter>
    </Card>
  );
}
