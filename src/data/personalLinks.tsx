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
  download: boolean;
}

export const personalLinks: PersonalLinksInfo[] = [
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/andrzej-kukuryk/",
    download: false,
  },
  {
    icon: GitHubIcon,
    label: "GitHub",
    url: "https://github.com/andrzejkukuryk/",
    download: false,
  },
  {
    icon: CvIcon,
    label: "data_about_resume",
    url: "https://drive.google.com/file/d/1yGWoEZaKmAmpANtR6T2E8HGdL3ifv8lQ/view?usp=sharing",
    download: true,
  },
];
