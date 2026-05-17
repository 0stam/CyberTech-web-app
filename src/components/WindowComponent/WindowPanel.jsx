import { WindowTab } from "./WindowTab";
import { memo, useState, useEffect } from "react";
import PropTypes from 'prop-types';
import "./WindowPanel.css";

const WindowPanelComponent = ({ children, class_number, text}) => {
  // class number is a number that gives the windowPanel it's css values, first 3 numbers are for home page, and 4 and 5 are for members
  // 5 - default, 6 - gold
  const MemoizedWindowTab = memo(WindowTab);
  const [isClosed, setIsClosed] = useState(false);

  // Auto-reopen terminal after 2 seconds when closed
  useEffect(() => {
    console.log("isClosed state changed:", isClosed);
    if (isClosed) {
      console.log("Terminal closed, setting timeout for 2 seconds...");
      const timer = setTimeout(() => {
        console.log("2 seconds passed, reopening terminal...");
        setIsClosed(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isClosed]);

  return (
    <div
      className={`window-panel window-panel-${class_number} ${isClosed ? "window-panel-closed" : ""}`}
    >
      <MemoizedWindowTab text={text} setIsClosed={setIsClosed} class_number={class_number}/>
      <div>{children}</div>
    </div>
  );
};

WindowPanelComponent.propTypes = {
  children: PropTypes.node.isRequired,
  class_number: PropTypes.number,
  text: PropTypes.string
};

export const WindowPanel = memo(WindowPanelComponent);