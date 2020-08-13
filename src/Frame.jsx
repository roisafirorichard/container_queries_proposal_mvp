import React, { useState, useEffect, useRef } from "react";
import Frame, { FrameContextConsumer } from "react-frame-component";
import styled, { StyleSheetManager } from "styled-components";

const DFrame = styled(Frame)`
  width: 100%;
  border: none;
`;

const FrameComponent = ({ children, is }) => {
  const [height, setHeight] = useState(null);
  const Comp = is || React.Fragment;
  const iframeRef = useRef(null);
  const handleResize = iframe => {
    if (
      iframe.current &&
      iframe.current.node &&
      iframe.current.node.contentDocument &&
      iframe.current.node.contentDocument.body.scrollHeight !== 0
    ) {
      setHeight(iframe.current.node.contentDocument.body.scrollHeight);
    }
  };
  useEffect(() => handleResize(iframeRef), [children]);

  const frameMountHandler = () => {
    handleResize(iframeRef);
    console.log("mounted");
  };
  return (
    <DFrame
      contentDidMount={frameMountHandler}
      contentDidUpdate={frameMountHandler}
      style={{ height }}
      ref={iframeRef}
      onLoad={() => handleResize(iframeRef)}
      scrolling="no"
    >
      <FrameContextConsumer>
        {frameContext => (
          <StyleSheetManager target={frameContext.document.head}>
            <Comp>{children}</Comp>
          </StyleSheetManager>
        )}
      </FrameContextConsumer>
    </DFrame>
  );
};

export default FrameComponent;
