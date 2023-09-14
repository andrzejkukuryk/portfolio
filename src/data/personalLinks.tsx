import { ReactComponent as LinkedInIcon } from "../assets/linkedin.svg";
import { ReactComponent as GitHubIcon } from "../assets/github.svg";
import { ReactComponent as CvIcon } from "../assets/cv.svg";

export interface PersonalLinksInfo {
  icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  label: string;
  url: string;
}

export const personalLinks: PersonalLinksInfo[] = [
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/andrzej-kukuryk/",
  },
  {
    icon: GitHubIcon,
    label: "GitHub",
    url: "https://github.com/andrzejkukuryk/",
  },
  {
    icon: CvIcon,
    label: "Resume (download)",
    url: "#",
  },
];
