import { StackInfo } from "../data/stackIcons";

export interface ProjectInfo {
  title: string;
  stack: StackInfo[];
  imgDesktop: string;
  imgMobile?: string;
  repositoryUrl: string;
  appUrl: string;
  translationKey: string;
}
