/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const sizeObj = {
  large: { height: "16px", borderRadius: "8px", padding: "4px" },
  medium: { height: "12px", borderRadius: "4px", padding: "0px" },
  small: { height: "8px", borderRadius: "4px", padding: "0px" },
};

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper size={size}>
      <InnerWrapper>
        <Bar value={value} size={size} />
      </InnerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 370px;
  background-color: ${COLORS.transparentGray15};
  border-radius: ${({ size }) => sizeObj[size].borderRadius};
  padding: ${({ size }) => sizeObj[size].padding};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const InnerWrapper = styled.div`
  overflow: hidden;
  border-radius: 4px;
`;

const Bar = styled.div`
  height: ${({ size }) => sizeObj[size].height};
  width: ${({ value }) => value + "%"};
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
`;

export default ProgressBar;
