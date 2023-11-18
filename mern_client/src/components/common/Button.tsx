import React, { memo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// children
// onclick
// type : "link" : "button"
// url

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "link" | "button";
  url?: string;
}

const StyledButton = styled.button`
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  padding: 0;
  cursor: pointer;
`;

function Button({ children, onClick, type = "button", url }: ButtonProps) {
  // type에 따라서 linkButton Button

  const RealBotton = <StyledButton onClick={onClick}>{children}</StyledButton>;

  const RealLink = (
    <StyledButton>
      <Link to={url!}>{children}</Link>
    </StyledButton>
  );
  return type === "link" && url ? RealLink : RealBotton;
}

export default memo(Button);
