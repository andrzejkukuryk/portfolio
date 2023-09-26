import { ReactComponent as HtmlIcon } from "../assets/html.svg";
import { ReactComponent as CssIcon } from "../assets/css.svg";
import { ReactComponent as ReactIcon } from "../assets/react.svg";
import { ReactComponent as TsIcon } from "../assets/typescript.svg";
import { ReactComponent as JsIcon } from "../assets/javascript.svg";
import { ReactComponent as ReduxIcon } from "../assets/redux.svg";
import { ReactComponent as ReactRouterIcon } from "../assets/router.svg";
import { ReactComponent as BootstrapIcon } from "../assets/bootstrap.svg";
import { ReactComponent as MuiIcon } from "../assets/mui.svg";

export interface StackInfo {
  component: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  label: StackLabel;
}

export type StackLabel =
  | "React.js"
  | "Redux"
  | "React Router"
  | "JavaScript"
  | "TypeScript"
  | "HTML"
  | "CSS"
  | "Bootstrap"
  | "Material-UI";

export const stack: StackInfo[] = [
  {
    component: ReactIcon,
    label: "React.js",
  },
  {
    component: ReduxIcon,
    label: "Redux",
  },
  {
    component: ReactRouterIcon,
    label: "React Router",
  },
  {
    component: JsIcon,
    label: "JavaScript",
  },
  {
    component: TsIcon,
    label: "TypeScript",
  },
  {
    component: HtmlIcon,
    label: "HTML",
  },
  {
    component: CssIcon,
    label: "CSS",
  },
  {
    component: BootstrapIcon,
    label: "Bootstrap",
  },
  {
    component: MuiIcon,
    label: "Material-UI",
  },
];
