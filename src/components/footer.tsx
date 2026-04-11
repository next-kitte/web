import { APP_NAME, GITHUB_URL } from "../utils/config"

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-foreground">
              <span className="text-xs font-bold text-background">K</span>
            </div>
            <span className="text-sm text-muted-foreground">{APP_NAME}</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#quick-start"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Docs
            </a>
            <a
              href="#api"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              API
            </a>
            <a
              href="#examples"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Examples
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Github
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            Released under the MIT License.
          </p>
        </div>
      </div>
    </footer>
  )
}
