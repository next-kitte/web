import { Code } from "./code"

const kitteClassCode = `const action = new Kitte()
  .schema(zodSchema)   // Optional: Zod schema for input validation
  .use(middleware)     // Optional: Add context middleware
  .action(handler)     // Required: Define the action handler`

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
type ActionResult<T> = [T, null] | [null, PossibleError]

// Parameter passed to middleware and handlers
type Params<Schema, TCtx> = { 
  input: z.infer<Schema>, 
  ctx: TCtx 
}

// Possible error types
type PossibleError = Error | ZodError`

const methods = [
  {
    name: "new Kitte(schema?)",
    description:
      "Creates a new Kitte instance. Optionally accepts a Zod schema for input validation.",
  },
  {
    name: ".schema(schema)",
    description:
      "Sets or updates the Zod schema for input validation. Returns the Kitte instance for chaining.",
  },
  {
    name: ".use(middlewareFn)",
    description:
      "Adds middleware that receives { input, ctx } and returns { ctx: TNewCtx }. Can be chained multiple times.",
  },
  {
    name: ".action(handlerFn)",
    description:
      "Defines the action handler. Receives { input, ctx } with all middleware context merged.",
  },
]

export function APIReference() {
  return (
    <section id="api" className="py-20 border-t border-border/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            API Reference
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            Complete API documentation for next-kitte.
          </p>
        </div>

        <div className="space-y-16">
          {/* Kitte Class */}
          <div>
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <span className="text-muted-foreground font-mono text-base">
                class
              </span>
              Kitte
            </h3>
            <p className="text-muted-foreground mb-6">
              The core class for defining server actions with validation and
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
                  <div
                    key={method.name}
                    className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 p-4 rounded-lg bg-card border border-border/50"
                  >
                    <code className="font-mono text-sm text-accent shrink-0">
                      {method.name}
                    </code>
                    <p className="text-sm text-muted-foreground">
                      {method.description}
                    </p>
                  </div>
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
