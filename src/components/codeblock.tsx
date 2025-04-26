import React, { useState } from "react";

interface CodeBlockProps {
  code: string;
  language?: string;
}

export default function CodeBlock({
  code,
  language = "javascript",
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <div className="relative bg-gray-900 text-white rounded-md overflow-hidden w-fit">
      <button
        onClick={handleCopy}
        className="cursor-pointer absolute top-2 right-2 text-sm bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded transition"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
      <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}
