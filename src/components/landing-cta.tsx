import { APP_NAME, GITHUB_URL, NPM_PACKAGE } from "../utils/config"
import { InstallCommand } from "./code/install-command"

export function LandingCta() {
  return (
    <section className="border-t border-border/50 bg-card/12 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-linear-to-br from-card via-card to-secondary/30 px-6 py-12 sm:px-10 sm:py-14">
          <div className="pointer-events-none absolute -right-16 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-accent/15 blur-3xl" />
          <div className="relative mx-auto max-w-2xl text-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-balance">
                Ship type-safe server actions with {APP_NAME}
              </h2>
              <p className="mt-4 text-muted-foreground text-pretty leading-relaxed">
                Install in seconds, validate with Zod, compose middleware, and
                call from the client with a hook built for React.
              </p>
            </div>
            <div className="mt-8 max-w-md mx-auto text-left">
              <InstallCommand packageName={`${NPM_PACKAGE} zod`} />
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#quick-start"
                className="inline-flex items-center justify-center rounded-md bg-foreground px-6 py-2.5 text-sm font-medium text-background hover:bg-foreground/90 transition-colors"
              >
                Read the quick start
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-border bg-background/50 px-6 py-2.5 text-sm font-medium hover:bg-secondary/80 transition-colors backdrop-blur-sm"
              >
                Star on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
