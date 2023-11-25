import React, { memo } from "react";
import styled from "styled-components";

interface BlockProps {
  height: string;
  onClick?: () => void;
}

const SyledBlock = styled.div<BlockProps>`
  width: 100%;
  height: ${(props) => props.height};
  cursor: ${(props) => props.onClick && "pointer"};
`;

function Block({ height, onClick }: BlockProps) {
  return <SyledBlock height={height} onClick={onClick} />;
}

export default memo(Block);
