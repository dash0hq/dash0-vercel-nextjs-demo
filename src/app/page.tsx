import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Card x-chunk="dashboard-04-chunk-1">
        <CardHeader>
          <CardTitle>What is this?</CardTitle>
        </CardHeader>
          <CardContent className="prose dark:prose-invert">
              This example demonstrates various scenarios a Next.js app might encounter. Observability data
              is reported to <Link href="https://www.dash0.com">Dash0</Link> for visualization.
          </CardContent>
      </Card>

      <Button>Click me</Button>
    </div>
  );
}
