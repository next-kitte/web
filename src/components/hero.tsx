import { Code } from "./code"
import { InstallCommand } from "./code/install-command"

const heroCode = `import { Kitte } from "next-kitte"
import { z } from "zod"

const createUser = new Kitte()
  .schema(z.object({ name: z.string(), email: z.string().email() }))
  .use(async ({ ctx }) => ({ user: await getUser() }))
  .action(async ({ input, ctx }) => {
    return { success: true, user: ctx.user }
  })`

export function Hero() {
  return (
    <section className="relative py-20 sm:py-32">
      {/* Gradient background effect */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1 text-sm text-muted-foreground mb-6">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span>v1.0 now available</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
            Type-safe Server Actions
            <br />
            <span className="text-muted-foreground">for Next.js</span>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            A cleaner, type-safe way to create Next.js server actions with
            built-in{" "}
            <span className="text-foreground">Zod schema validation</span> and{" "}
            <span className="text-foreground">middleware support</span>.
          </p>

          <div className="mt-10 max-w-md mx-auto">
            <InstallCommand packageName="next-kitte" />
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href="#quick-start"
              className="inline-flex items-center justify-center rounded-md bg-foreground px-6 py-2.5 text-sm font-medium text-background hover:bg-foreground/90 transition-colors"
            >
              Get Started
            </a>
            <a
              href="#api"
              className="inline-flex items-center justify-center rounded-md border border-border px-6 py-2.5 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
            >
              API Reference
            </a>
          </div>
        </div>

        <div className="mt-16 sm:mt-20">
          <Code
            code={heroCode}
            filename="actions.ts"
            language="typescript"
            showLineNumbers={true}
          />
        </div>
      </div>
    </section>
  )
}
