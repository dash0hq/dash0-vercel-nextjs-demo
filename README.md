# Dash0: Vercel & Next.js Example

[This example](https://dash0-vercel-nextjs-demo.vercel.app/) demonstrates various scenarios a Next.js app deployed on Vercel might encounter. Each scenario is represented by a different page. You can use the navigation on the left to explore each scenario.

The app is instrumented with OpenTelemetry via `@vercel/otel` to collect traces, which are then sent to [Dash0](https://www.dash0.com) for visualization. Additionally, a Vercel log drain is leveraged to export logging information.
