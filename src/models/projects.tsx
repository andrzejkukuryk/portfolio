import { StackInfo } from "../data/stackIcons";

export interface ProjectInfo {
  title: string;
  stack: StackInfo[];
  imgUrl: string;
  repositoryUrl: string;
  appUrl: string;
  description: string;
}
