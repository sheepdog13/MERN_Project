import React, { memo } from "react";
import styled from "styled-components";

interface BlockProps {
  height: string;
  onclick?: () => void;
}

const SyledBlock = styled.div<BlockProps>`
  width: 100%;
  height: ${(props) => props.height};
  cursor: ${(props) => props.onclick && "pointer"};
`;

function Block({ height, onclick }: BlockProps) {
  return <SyledBlock height={height} onclick={onclick} />;
}

export default memo(Block);
