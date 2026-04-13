import { NPM_PACKAGE, RELEASE_VERSION } from "../utils/config"
import { Code } from "./code"
import { InstallCommand } from "./code/install-command"

const heroCode = `import { createKitte } from "next-kitte"
import { z } from "zod"

const createUser = createKitte()
  .input(z.object({ name: z.string(), email: z.string().email() }))
  .use(async ({ ctx }) => ({ user: await getUser() }))
  .action(async ({ input, ctx }) => {
    return { success: true, user: ctx.user }
  })`

export function Hero() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 lg:py-28">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-[520px] w-[min(90vw,720px)] -translate-x-1/2 rounded-full bg-accent/12 blur-[100px]" />
        <div className="absolute top-1/3 right-[-10%] h-[380px] w-[380px] rounded-full bg-accent/8 blur-[80px]" />
        <div className="absolute bottom-0 left-[-5%] h-[280px] w-[280px] rounded-full bg-foreground/[0.04] blur-[70px]" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `linear-gradient(oklch(0.22 0 0 / 0.5) 1px, transparent 1px),
              linear-gradient(90deg, oklch(0.22 0 0 / 0.5) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)",
          }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_min(0,1.05fr)] lg:gap-14">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1 text-sm text-muted-foreground mb-6 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-green-500 motion-reduce:animate-none animate-pulse" />
              <span>
                {RELEASE_VERSION} now available ·{" "}
                <span className="text-foreground/80">{NPM_PACKAGE}</span>
              </span>
            </div>

            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-6xl font-bold tracking-tight text-balance leading-[1.08]">
                <span className="bg-linear-to-br from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
                  Type-safe Server Actions
                </span>
                <br />
                <span className="text-muted-foreground">for Next.js</span>
              </h1>

              <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 text-pretty leading-relaxed">
                A cleaner, type-safe way to create Next.js server actions with
                built-in{" "}
                <span className="text-foreground">Zod schema validation</span>{" "}
                and <span className="text-foreground">middleware support</span>.
              </p>
            </div>

            <div className="mt-8 max-w-md mx-auto lg:mx-0">
              <InstallCommand packageName={NPM_PACKAGE} />
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <a
                href="#quick-start"
                className="inline-flex items-center justify-center rounded-md bg-foreground px-6 py-2.5 text-sm font-medium text-background hover:bg-foreground/90 transition-colors ring-1 ring-foreground/10"
              >
                Get Started
              </a>
              <a
                href="#api"
                className="inline-flex items-center justify-center rounded-md border border-border bg-card/40 px-6 py-2.5 text-sm font-medium text-foreground hover:bg-secondary/80 transition-colors backdrop-blur-sm"
              >
                API Reference
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-xl border border-border/80 bg-code-bg/80 p-1 shadow-[0_0_0_1px_oklch(0.65_0.15_250_/0.12),0_24px_80px_-20px_oklch(0_0_0_/0.65)] ring-1 ring-accent/20 backdrop-blur-sm">
              <Code
                code={heroCode}
                filename="actions.ts"
                language="typescript"
                showLineNumbers={true}
                className="border-0 shadow-none ring-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
