import React, { memo } from "react";
import styled from "styled-components";

interface InputProps {
  children?: React.ReactNode;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: () => void;
}

const StyledInput = styled.input`
  display: inline-block;
  border: none;
  width: 100%;
  min-height: 2em;
  font-size: 14px;
`;

function input({ children, name, value, onChange, onSubmit }: InputProps) {
  const onEnterSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!onSubmit) return;
    if (e.key === "Enter") {
      onSubmit();
    }
  };
  return (
    <StyledInput
      name={name}
      value={value}
      onChange={onChange}
      onKeyDown={onEnterSubmit}
    >
      {children}
    </StyledInput>
  );
}

export default memo(input);