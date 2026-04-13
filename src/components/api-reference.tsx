import { Card } from "@/src/components/ui/card"
import { Code } from "./code"

const kitteClassCode = `const action = createKitte()
  .input(zodSchema)   // Optional: Zod schema for input validation
  .output(zodSchema)  // Optional: Zod schema for output validation
  .use(middleware)    // Optional: Add context middleware
  .action(handler)    // Required: Define the action handler`

const useKitteActionCode = `const {
  data,    // TOutput | null - the action result on success
  status,  // "idle" | "loading" | "success" | "error"
  error,   // unknown | null - the error on failure
  execute, // (input: TInput) => Promise<ActionResult<TOutput>>
} = useKitteAction(action, {
  onSuccess?: (data) => void,
  onError?: (error) => void,
})`

const typesCode = `// Return type for all actions
type Response = KitteResult<typeof action>

// Possible error types
type PossibleError = Error | ZodError`

const methods = [
  {
    name: "createKitte()",
    description: "Creates the Kitte client.",
  },
  {
    name: ".input(schema)",
    description:
      "Sets or updates the Zod schema for input validation. Returns the Kitte instance for chaining.",
  },
  {
    name: ".output(schema)",
    description:
      "Sets or updates the Zod schema for output validation. Returns the Kitte instance for chaining.",
  },
  {
    name: ".use(middlewareFn)",
    description:
      "Adds middleware that receives { input, ctx } and returns { ctx: TNewCtx }. Can be chained multiple times.",
  },
  {
    name: ".onStart(callbackFn)",
    description: "Adds a callback that runs before everyting handler.",
  },
  {
    name: ".onSuccess(callbackFn)",
    description:
      "Adds a callback that runs after the action handler succeeds. Receives { data }.",
  },
  {
    name: ".onError(callbackFn)",
    description:
      "Adds a callback that runs after the action handler fails. Receives { error }.",
  },
  {
    name: ".action(handlerFn)",
    description:
      "Defines the action handler. Receives { input, ctx } with all middleware context merged.",
  },
]

export function APIReference() {
  return (
    <section
      id="api"
      className="border-t border-border/50 bg-card/6 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
            Reference
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            API Reference
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl text-pretty leading-relaxed">
            Complete API documentation for next-kitte.
          </p>
        </div>

        <div className="space-y-16">
          <div>
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <span className="text-muted-foreground font-mono text-base">
                createKitte()
              </span>
              Kitte
            </h3>
            <p className="text-muted-foreground mb-6">
              The core function for defining server actions with validation and
              middleware.
            </p>
            <Code
              code={kitteClassCode}
              language="typescript"
              showLineNumbers={true}
            />

            <div className="mt-8">
              <h4 className="text-lg font-medium mb-4">Methods</h4>
              <div className="space-y-4">
                {methods.map((method) => (
                  <Card
                    key={method.name}
                    className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 border-border/50 bg-card/60 p-4 shadow-none"
                  >
                    <code className="font-mono text-sm text-accent shrink-0">
                      {method.name}
                    </code>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {method.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* useKitteAction Hook */}
          <div>
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <span className="text-muted-foreground font-mono text-base">
                hook
              </span>
              useKitteAction
            </h3>
            <p className="text-muted-foreground mb-6">
              React hook for executing server actions on the client with loading
              states and callbacks.
            </p>
            <Code
              code={useKitteActionCode}
              language="typescript"
              showLineNumbers={true}
            />
          </div>

          {/* Types */}
          <div>
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <span className="text-muted-foreground font-mono text-base">
                types
              </span>
              Type Definitions
            </h3>
            <p className="text-muted-foreground mb-6">
              Core types used throughout next-kitte.
            </p>
            <Code
              code={typesCode}
              language="typescript"
              showLineNumbers={true}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
