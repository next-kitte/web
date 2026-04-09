"use client"

import SyntaxHighlighter from "react-syntax-highlighter"
import * as themes from "react-syntax-highlighter/dist/esm/styles/hljs"

type Props = {
  code: string
  language: string
  showLineNumbers?: boolean
}

export function CodeBlock({ code, language, showLineNumbers = false }: Props) {
  return (
    <SyntaxHighlighter
      language={language}
      style={themes.vs2015}
      showLineNumbers={showLineNumbers}
      customStyle={{
        background: "transparent",
        padding: 0,
        fontSize: "14px",
      }}
    >
      {code.trim()}
    </SyntaxHighlighter>
  )
}
