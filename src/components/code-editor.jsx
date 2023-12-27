import { Controlled as CodeMirror } from "react-codemirror2";
import { useAppContext } from "../utilities/context";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
// Import modes for popular languages
import "codemirror/mode/clike/clike";
import "codemirror/mode/css/css";
import "codemirror/mode/dart/dart";
import "codemirror/mode/go/go";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/php/php";
import "codemirror/mode/powershell/powershell";
import "codemirror/mode/python/python";
import "codemirror/mode/ruby/ruby";
import "codemirror/mode/swift/swift";
import { useEffect, useState } from "react";

// Define a mapping of dropdown language names to CodeMirror mode names
const languageModeMap = {
  c: "clike",
  java: "clike",
  kotlin: "clike",
  css: "css",
  dart: "dart",
  go: "go",
  javascript: "javascript",
  typescript: "javascript",
  php: "php",
  powershell: "powershell",
  python: "python",
  ruby: "ruby",
  swift: "swift",
};

const CodeEditor = () => {
  const { pl, codeSnippet, setCodeSnippet } = useAppContext();
  const [isPlaceholderVisible, setPlaceholderVisible] = useState(true);

  useEffect(() => {
    setPlaceholderVisible(!codeSnippet); // Show placeholder if codeSnippet is empty
  }, [codeSnippet]);
  // Map the dropdown language name to CodeMirror mode name
  const modeName = languageModeMap[pl] || "javascript"; // Fallback to JavaScript if the mapping is not found

  const options = {
    lineNumbers: true,
    mode: modeName,
    theme: "material",
  };

  return (
    <div className="code-editor">
      {isPlaceholderVisible && (
        // eslint-disable-next-line react/jsx-no-comment-textnodes
        <div className="placeholder-overlay">
          // Type or paste your {pl} code here 😊...
        </div>
      )}
      <CodeMirror
        value={codeSnippet || ""}
        options={options}
        onBeforeChange={(editor, data, value) => {
          setCodeSnippet(value);
        }}
      />
    </div>
  );
};

export default CodeEditor;
