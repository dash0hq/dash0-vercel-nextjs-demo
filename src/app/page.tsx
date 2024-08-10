import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import dash0TraceScreenshot from "@/assets/dash0-trace.png";

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle>What is this?</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert">
          <p>
            This example demonstrates various scenarios a Next.js app deployed on Vercel might encounter. Each scenario
            is represented by a different page. You can use the navigation on the left to explore each scenario.
          </p>
          <p>
            The app is instrumented with OpenTelemetry via{" "}
            <Link href="https://github.com/vercel/otel">@vercel/otel</Link> to collect traces, which are then sent to{" "}
            <Link href="https://www.dash0.com">Dash0</Link> for visualization. Additionally, a Vercel log drain is
            leveraged to export logging information.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>What does the observability data look like?</CardTitle>
          <CardDescription>
            The following screenshot shows a visualized distributed trace for a failed fetch issued by a React server
            component.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link href={dash0TraceScreenshot.src}>
            <Image
              src={dash0TraceScreenshot}
              alt="Dash0 trace view showing how a React server-component is rendered"
              className="rounded-md"
            />
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
