import { Code, Layers, Shield, Zap } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Type-safe Actions",
    description:
      "Full TypeScript support with automatic type inference. Your inputs and outputs are always type-safe.",
  },
  {
    icon: Code,
    title: "Zod Validation",
    description:
      "Built-in schema validation using Zod. Validate client inputs before they reach your action handler.",
  },
  {
    icon: Layers,
    title: "Middleware Support",
    description:
      "Chain middleware functions to add context like authentication, permissions, or database connections.",
  },
  {
    icon: Zap,
    title: "React Hook",
    description:
      "useKitteAction hook for easy client-side execution with loading states, error handling, and callbacks.",
  },
]

export function Features() {
  return (
    <section className="py-20 border-t border-border/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Everything you need for server actions
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            A clean, chainable API that makes working with Next.js server
            actions a breeze.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-lg border border-border/50 bg-card p-6 transition-colors hover:border-border hover:bg-card/80"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary mb-4">
                <feature.icon className="h-5 w-5 text-foreground" />
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
