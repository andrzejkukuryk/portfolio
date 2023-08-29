import React from "react";
import { ReactComponent as HtmlIcon } from "../../assets/html.svg";
import { ReactComponent as CssIcon } from "../../assets/css.svg";
import { ReactComponent as ReactIcon } from "../../assets/react.svg";
import { ReactComponent as TsIcon } from "../../assets/typescript.svg";
import { ReactComponent as JsIcon } from "../../assets/javascript.svg";
import { ReactComponent as ReduxIcon } from "../../assets/redux.svg";
import { ReactComponent as BootstrapIcon } from "../../assets/bootstrap.svg";
import { ReactComponent as MuiIcon } from "../../assets/mui.svg";
export function StackItem() {
  return (
    <div style={{ backgroundColor: "#093f96" }}>
      <HtmlIcon />
      <CssIcon />
      <TsIcon />
      <ReactIcon />
      <JsIcon />
      <ReduxIcon />
      <BootstrapIcon />
      <MuiIcon />
    </div>
  );
}
