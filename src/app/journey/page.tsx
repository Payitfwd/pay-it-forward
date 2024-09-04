"use client";
import Editor from "@/components/editor";
import ResizePane from "@/components/resizable";
const Journey = () => {
  return (
    <>
      {/* <Editor /> */}
      <ResizePane orientation="horizontal">
        <ResizePane>Problem Section</ResizePane>
        <ResizePane orientation="vertical">
          <ResizePane>
            <Editor />
          </ResizePane>
          <ResizePane>Test Cases</ResizePane>
        </ResizePane>
      </ResizePane>
    </>
  );
};

export default Journey;
