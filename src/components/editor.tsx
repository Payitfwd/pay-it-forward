"use client";
import { Editor as MoncaEditor, OnMount } from "@monaco-editor/react";
import { useRef } from "react";
const Editor = () => {
  const editorRef = useRef<Parameters<OnMount>[0] | null>(null);
  const handleEditorDidMoun: OnMount = (editor) => {
    editorRef.current = editor;
  };

  return (
    <>
      <MoncaEditor
        height="100%"
        width="100%"
        defaultLanguage="javascript"
        defaultValue="// some comment"
        theme="vs-dark"
        onMount={handleEditorDidMoun}
      />
    </>
  );
};

export default Editor;
