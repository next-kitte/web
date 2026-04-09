"use client"

import { Check, Copy } from "lucide-react"
import { useState } from "react"
import { cn } from "../../lib/utils"
import { CodeBlock } from "./block"

type Props = {
  filename?: string
  code: string
  language: string
  showLineNumbers?: boolean
  className?: string
}

export function Code({
  filename,
  code,
  language,
  showLineNumbers = false,
  className,
}: Props) {
  const [copied, setCopied] = useState(false)

  return (
    <div
      className={cn(
        "relative group rounded-lg border border-code-border bg-code-bg overflow-hidden",
        className,
      )}
    >
      {filename && (
        <div className="flex items-center justify-between border-b border-code-border px-4 py-2 text-sm text-muted-foreground">
          <span className="font-mono">{filename}</span>
          <span className="text-xs opacity-60">{language}</span>
        </div>
      )}
      <div className="relative">
        <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
          <code className="font-mono text-foreground/90">
            <CodeBlock
              code={code}
              language={language}
              showLineNumbers={showLineNumbers}
            />
          </code>
        </pre>
        <button
          type="button"
          onClick={() => {
            window.navigator.clipboard.writeText(code)
            setCopied(true)
            setTimeout(() => setCopied(false), 3000)
          }}
          className="absolute right-2 top-2 p-2 rounded-md bg-secondary/50 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-secondary"
          aria-label="Copy code"
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
