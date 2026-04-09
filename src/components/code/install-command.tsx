"use client"

import { Check, Copy } from "lucide-react"
import { useState } from "react"
import { cn } from "@/src/lib/utils"
import { CodeBlock } from "./block"

type InstallCommandProps = {
  packageName: string
  className?: string
}

export function InstallCommand({
  packageName,
  className,
}: InstallCommandProps) {
  const [activeTab, setActiveTab] = useState<"npm" | "pnpm" | "yarn" | "bun">(
    "npm",
  )
  const [copied, setCopied] = useState(false)

  const commands = {
    npm: `npm install ${packageName}`,
    pnpm: `pnpm add ${packageName}`,
    yarn: `yarn add ${packageName}`,
    bun: `bun add ${packageName}`,
  }

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(commands[activeTab])
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div
      className={cn(
        "rounded-lg border border-code-border bg-code-bg overflow-hidden",
        className,
      )}
    >
      <div className="flex items-center border-b border-code-border">
        {(["npm", "pnpm", "yarn", "bun"] as const).map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={cn(
              "px-4 py-2 text-sm font-mono transition-colors",
              activeTab === tab
                ? "text-foreground bg-secondary/50"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="relative group">
        <pre className="overflow-x-auto p-4 text-sm">
          <code className="font-mono text-foreground/90">
            <CodeBlock
              code={commands[activeTab]}
              language="bash"
              showLineNumbers={false}
            />
          </code>
        </pre>
        <button
          type="button"
          onClick={copyToClipboard}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-md bg-secondary/50 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-secondary"
          aria-label="Copy command"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4 text-muted-foreground" />
          )}
        </button>
      </div>
    </div>
  )
}
