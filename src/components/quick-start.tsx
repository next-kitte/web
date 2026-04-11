import { NPM_PACKAGE } from "../utils/config"
import { Code } from "./code"
import { InstallCommand } from "./code/install-command"

const step1Code = `// 1. Create your first action
// actions.ts
import { createKitte } from "next-kitte"
import { z } from "zod"

const helloAction = createKitte()
  .schema(z.object({ name: z.string() }))
  .action(async ({ input }) => {
    return { message: \`Hello, \${input.name}!\` }
  })

export { helloAction }`

const step2Code = `// 2. Use it in a component
// components/hello-form.tsx
"use client"

import { useKitteAction } from "next-kitte"
import { helloAction } from "../actions"

export function HelloForm() {
  const { execute, data, status } = useKitteAction(helloAction)

  return (
    <form action={async (formData) => {
      await execute({ name: formData.get("name") as string })
    }}>
      <input name="name" placeholder="Your name" />
      <button type="submit">
        {status === "loading" ? "..." : "Say Hello"}
      </button>
      {data && <p>{data.message}</p>}
    </form>
  )
}`

export function QuickStart() {
  return (
    <section
      id="quick-start"
      className="border-t border-border/50 bg-background py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
            Get started
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Quick Start
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl text-pretty leading-relaxed">
            Get up and running with next-kitte in under a minute.
          </p>
        </div>

        <div className="space-y-12">
          {/* Step 0: Install */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-background text-sm font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold">Install the package</h3>
            </div>
            <InstallCommand
              packageName={`${NPM_PACKAGE} zod`}
              className="max-w-xl"
            />
          </div>

          {/* Step 1: Create Action */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-background text-sm font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold">
                Create your first action
              </h3>
            </div>

            <Code
              filename="actions.ts"
              code={step1Code}
              language="typescript"
              showLineNumbers={true}
            />
          </div>

          {/* Step 2: Use in Component */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-background text-sm font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold">Use it in a component</h3>
            </div>
            <Code
              code={step2Code}
              filename="components/hello-form.tsx"
              language="typescript"
              showLineNumbers={true}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
