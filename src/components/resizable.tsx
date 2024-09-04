// Still very buggy but solves our p0 case
"use client";
import { PropsWithChildren, useEffect, useState } from "react";
import { getChildrenByType } from "@/lib/utils";

import React from "react";

const position = "relative";
type Orientation = "horizontal" | "vertical";
type SeparatorProps = {
  orientation?: Orientation;
  onDrag?: (pos: number, orientation: Orientation) => void;
  pos?: number;
};
export const Separator = (props: SeparatorProps) => {
  const { onDrag = () => {}, orientation = "horizontal" } = props;
  return (
    <div
      className={` m-1 active:bg-slate-900 ${
        orientation === "horizontal"
          ? "hover:cursor-col-resize w-1 h-full"
          : "hover:cursor-row-resize w-full h-1"
      } hover:bg-slate-900 `}
      draggable
      onDrag={(ev) => {
        if (!ev.screenX && !ev.screenY) return;
        const updatedPos =
          orientation === "horizontal"
            ? (ev.pageX / window.innerWidth) * 100
            : (ev.pageY / window.innerHeight) * 100;
        onDrag(updatedPos, orientation);
      }}
      style={{
        zIndex: 99999,
      }}
    ></div>
  );
};

const ResizePane = (
  props: PropsWithChildren<{
    orientation?: Orientation;
  }>
): JSX.Element => {
  const { children, orientation = "horizontal" } = props;

  const panes = getChildrenByType(children, ["ResizePane"]);
  const [panePos, setPanePos] = useState<number[]>(
    Array.from({ length: panes.length }).map(() => 100 / panes.length)
  );

  if (React.Children.toArray(children).length <= 1) return <>{children}</>;
  console.log(panes, "panes");
  return (
    <div
      className="flex w-full h-full"
      style={{ flexDirection: orientation === "horizontal" ? "row" : "column" }}
    >
      {panes.map((Child, index) => (
        <>
          <div
            draggable
            style={
              orientation === "horizontal"
                ? {
                    width: panePos[index] ? panePos[index] + "%" : "100%",
                    position,
                    height: "100%",
                    transformOrigin: "0 0",
                  }
                : {
                    height: panePos[index] ? panePos[index] + "%" : "100%",
                    position,
                    width: "100%",
                    transformOrigin: "0 0",
                  }
            }
          >
            {panes[index]}
          </div>
          {panes.length - 1 !== index ? (
            <Separator
              orientation={orientation}
              pos={panePos[index]}
              onDrag={(posChnge) => {
                const tempPanesPos = [...panePos];
                // for (
                //   let currIndx = index;
                //   currIndx < tempPanesPos.length;
                //   currIndx++
                // )
                console.log(tempPanesPos[index], posChnge, "change");
                const prevWidth = tempPanesPos[index];
                tempPanesPos[index] = posChnge;
                const difference = tempPanesPos[index] - prevWidth;
                console.log(
                  tempPanesPos[index],
                  tempPanesPos[index + 1],
                  difference,
                  posChnge,
                  "hereeee"
                );
                tempPanesPos[index + 1] = tempPanesPos[index + 1] - difference;

                setPanePos(tempPanesPos);
              }}
            />
          ) : null}
        </>
      ))}
      {/* {separatorPos.map((currentPos, index) => (
        <>
          {index === separatorPos.length - 1 ? (
            <div
              style={
                orientation === "horizontal"
                  ? { left: currentPos + "px", position }
                  : { top: currentPos + "px", position }
              }
            >
              {panes[index]}
            </div>
          ) : null}
          <Separator
            orientation={orientation}
            onDrag={(posChnge) => {
              const tempSeparators = [...separatorPos];
              tempSeparators[index] = posChnge;
              setSeparatorPos(tempSeparators);
            }}
          />
          <div
            style={
              orientation === "horizontal"
                ? { left: currentPos + "px", position }
                : { top: currentPos + "px", position }
            }
          >
            {panes[index + 1]}
          </div>
        </>
      ))} */}
    </div>
  );
};

ResizePane.displayName = "ResizePane";

export default ResizePane;
