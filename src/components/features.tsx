import { Code, Layers, Shield, Zap } from "lucide-react"

const secondaryFeatures = [
  {
    icon: Code,
    title: "Zod validation",
    description:
      "Validate client inputs with Zod before they reach your handler—schemas are optional but first-class.",
  },
  {
    icon: Layers,
    title: "Middleware support",
    description:
      "Chain `.use()` steps to inject auth, DB, or permissions into `ctx` with full type narrowing.",
  },
  {
    icon: Zap,
    title: "useKitteAction",
    description:
      "Client hook with idle, loading, success, and error states plus optional success/error callbacks.",
  },
] as const

export function Features() {
  return (
    <section className="border-t border-border/50 bg-card/8 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 lg:mb-14">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
            Why next-kitte
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-balance max-w-2xl">
            Everything you need for server actions
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl text-pretty leading-relaxed">
            A clean, chainable API that keeps types honest from schema to
            middleware to the client.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-5 lg:grid-cols-3 lg:grid-rows-3 lg:gap-5">
          {/* Featured tile */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-border/60 bg-card p-6 sm:p-8 transition-colors hover:border-accent/35 hover:bg-card/90 lg:col-span-2 lg:row-span-3 min-h-[280px] lg:min-h-0">
            <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-accent/10 blur-3xl transition-opacity group-hover:opacity-100 opacity-70" />
            <div className="relative">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-secondary ring-1 ring-border/60 transition-colors group-hover:bg-accent/15 group-hover:ring-accent/25">
                <Shield className="h-5 w-5 text-foreground transition-colors group-hover:text-accent" />
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-tight">
                Type-safe, chainable actions
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed max-w-md text-pretty">
                Build flows with{" "}
                <code className="rounded bg-secondary/80 px-1.5 py-0.5 font-mono text-sm text-foreground/90">
                  createKitte()
                </code>
                —TypeScript infers inputs, merged context, and return types
                across every step.
              </p>
            </div>
            <p className="relative mt-6 text-sm text-muted-foreground border-t border-border/50 pt-6 font-mono leading-relaxed">
              .input() → .use() → .action()
            </p>
          </div>

          {secondaryFeatures.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border/60 bg-card/80 p-6 transition-colors hover:border-border hover:bg-card sm:p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary ring-1 ring-transparent transition-all group-hover:ring-accent/20 group-hover:bg-accent/10">
                <feature.icon className="h-5 w-5 text-foreground transition-colors group-hover:text-accent" />
              </div>
              <h3 className="mt-4 font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed text-pretty">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
