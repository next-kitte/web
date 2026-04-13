"use client"

import { useState } from "react"
import { cn } from "@/src/lib/utils"
import { Code } from "./code"

const examples = [
  {
    id: "validation",
    title: "Schema Validation",
    description: "Validate inputs with Zod schemas",
    code: `const validatedAction = createKitte()
  .input(z.object({
    email: z.string().email(),
    password: z.string().min(8),
  }))
  .output(z.object({
    success: z.boolean(),
  }))
  .action(async ({ input }) => {
    // input is type-safe and validated
    // { email: string, password: string }
    return { success: true }
  })`,
  },
  {
    id: "middleware",
    title: "Middleware Chaining",
    description: "Add context with chainable middleware",
    code: `const authAction = createKitte()
  .use(async () => {
    const user = await getUser()
    return { ctx: { user } }
  })
  .action(async ({ input, ctx }) => {
    // ctx.user from middleware
    return { ok: true, userId: ctx.user.id }
  })`,
  },
  {
    id: "hooks",
    title: "Hooks",
    description: "Chain of hooks",
    code: `const authAction = createKitte()
  .onStart(() => {
    console.log("Action started")
  })
  .onSuccess(({ data }) => {
    console.log("Action succeeded", data)
  })
  .onError(({ error }) => {
    console.error("Action failed", error)
  })
  .action(async ({ input, ctx }) => {
    // ctx.user from middleware
    return { ok: true, userId: ctx.user.id }
  })`,
  },
  {
    id: "server",
    title: "Server Action",
    description: "Complete server-side action example",
    code: `
    'use server'
    
import { createKitte } from "next-kitte"
import { z } from "zod"

const createUserSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
})

export const createUserAction = createKitte()
  .input(createUserSchema)
  .use(async ({ input, ctx }) => {
    return { currentUser: { id: "user-123", role: "admin" } }
  })
  .action(async ({ input, ctx }) => {
    const user = await saveUser(input)
    return { success: true, user }
  })`,
  },
  {
    id: "client",
    title: "Client Component",
    description: "Using the action in a React component",
    code: `"use client"

import { useKitteAction } from "next-kitte"
import { createUserAction } from "../actions"

export function CreateUser() {
  const { execute, status, data, error } = useKitteAction(createUserAction)

  const handleSubmit = async (formData: FormData) => {
    const [result, error] = await execute({
      name: formData.get("name") as string,
      email: formData.get("email") as string,
    })

    if (result) {
      console.log("User created:", result.user)
    }
  }

  return (
    <form action={handleSubmit}>
      <input name="name" placeholder="Name" required />
      <input name="email" type="email" placeholder="Email" required />
      <button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Creating..." : "Create User"}
      </button>
      {error && <p>Error: {String(error)}</p>}
    </form>
  )
}`,
  },
]

export function Examples() {
  const [activeExample, setActiveExample] = useState(examples[0].id)

  const currentExample =
    examples.find((e) => e.id === activeExample) || examples[0]

  return (
    <section
      id="examples"
      className="border-t border-border/50 bg-background py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
            Cookbook
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Examples
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl text-pretty leading-relaxed">
            Common patterns and use cases for next-kitte.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          {/* Sidebar */}
          <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {examples.map((example) => (
              <button
                key={example.id}
                type="button"
                onClick={() => setActiveExample(example.id)}
                className={cn(
                  "flex flex-col items-start p-4 rounded-lg border text-left transition-colors shrink-0 lg:shrink",
                  activeExample === example.id
                    ? "border-border bg-card"
                    : "border-transparent hover:bg-card/50",
                )}
              >
                <span className="font-medium text-sm">{example.title}</span>
                <span className="text-xs text-muted-foreground mt-1">
                  {example.description}
                </span>
              </button>
            ))}
          </div>

          {/* Code Block */}
          <div>
            <Code
              language="typescript"
              code={currentExample.code}
              filename={`${currentExample.id}.ts${currentExample.id === "client" ? "x" : ""}`}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
