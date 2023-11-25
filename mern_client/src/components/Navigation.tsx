import React from "react";
import ShadowBox from "./common/ShadowBox";
import Button from "./common/Button";
import Span from "./common/Span";
import Divider from "./common/Divider";
import Block from "./common/Block";
import { GoPlus } from "react-icons/go";

interface NavigationProps {
  type?: "home" | "upload";
}

function Navigation({ type = "home" }: NavigationProps) {
  return (
    <ShadowBox>
      <Button type="link" url="/">
        <Span size="title">MERN</Span>
      </Button>
      <Divider />
      <Block height="28px" />
      <Button type="link" url="upload">
        <GoPlus size={20} />
      </Button>
    </ShadowBox>
  );
}

export default Navigation;
