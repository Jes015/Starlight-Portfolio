import { techs, type Project } from "@/models";
import {
  DesktopIcon,
  DiscordLogoIcon,
  GitHubLogoIcon,
  HomeIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  MagicWandIcon,
  ReaderIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import type { IconProps } from "@radix-ui/react-icons/dist/types";

export interface Action {
  title: string;
  subTitle: string;
  date: Date;
  type: "blog" | "project" | "workspace" | "other";
}

export type ActionArray = Action[];

export interface UrlItem {
  url: string;
  name: string;
  icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
}

export type UrlItemRecord = Record<string, UrlItem>;

export interface JsonData {
  name: string;
  openToJob: boolean;
  profession: string;
  latestActions: ActionArray;
  pages: UrlItemRecord;
  socials: UrlItemRecord;
}

export const jsonData: JsonData = {
  name: "Jesus Oyola",
  profession: "Full-stack developer",
  openToJob: true,
  latestActions: [
    {
      title: "How to be happy",
      subTitle: "Updated a new blog",
      date: new Date("12/12/2024"),
      type: "other",
    },
    {
      title: "How to be happy",
      subTitle: "Updated a new blog",
      date: new Date("12/12/2024"),
      type: "other",
    },
    {
      title: "How to be happy",
      subTitle: "Updated a new blog",
      date: new Date("12/12/2024"),
      type: "other",
    },
    {
      title: "How to be happy",
      subTitle: "Updated a new blog",
      date: new Date("12/12/2024"),
      type: "other",
    },
  ],
  pages: {
    home: {
      url: "/",
      name: "Home",
      icon: HomeIcon,
    },
    projects: {
      url: "/projects",
      name: "Projects",
      icon: MagicWandIcon,
    },
    blog: {
      url: "/blog",
      name: "Blog",
      icon: ReaderIcon,
    },
    workspace: {
      url: "/workspace",
      name: "Workspace",
      icon: DesktopIcon,
    },
  },
  socials: {
    github: {
      name: "Github",
      url: "https://github.com/Jes015",
      icon: GitHubLogoIcon,
    },
    linkedIn: {
      name: "LinkedIn",
      url: "https://github.com/Jes015",
      icon: LinkedInLogoIcon,
    },
    instagram: {
      name: "Instagram",
      url: "https://github.com/Jes015",
      icon: InstagramLogoIcon,
    },
    x: {
      name: "Twitter",
      url: "https://github.com/Jes015",
      icon: TwitterLogoIcon,
    },
    discord: {
      name: "Discord",
      url: "https://github.com/Jes015",
      icon: DiscordLogoIcon,
    },
  },
} as const; // This is temporal, while we add the json data

export type ProjectRecord = Project[];

export const projectsData: ProjectRecord = [
  {
    title: "Pictura - picture sharing social media",
    date: "0-2024",
    description: [
      "Social media platform centred around image sharing and discovery. Key features include authentication, authorization, posting, sharing, and image searching, as well as the creation of user-profiles and image collections.",
      "The Frontend uses Next.js, React.js, Typescript, Tailwind and Zustand, providing a responsive UI.",
      "On the backend, we use Supabase, a backend service application that offers database storage and handles user authentication/authorization.",
      "For image storage and optimization, we use Cloudinary, an image and video service",
    ],
    techs: [techs.React],
    urls: {
      github: "test",
      preview: "test",
    },
    picture_src:
      "https://private-user-images.githubusercontent.com/113150193/308265006-3009a793-746f-4efc-b954-77c21348e9c8.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDkzMzUwMzMsIm5iZiI6MTcwOTMzNDczMywicGF0aCI6Ii8xMTMxNTAxOTMvMzA4MjY1MDA2LTMwMDlhNzkzLTc0NmYtNGVmYy1iOTU0LTc3YzIxMzQ4ZTljOC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMzAxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDMwMVQyMzEyMTNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01OTU0MGI1MjJhZWJiMmZjNGUwMDQ5MWJkOTY2YTI1NzNlZDRlMWZlZTg5NDc1ODExMDBmMDYzZGIxMjAxMjE5JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.5faSKAzNju4E_88_MMHR_EDGOG70TvUE8Sj3ozJXDHM",
  },
  {
    date: "03-2024",
    description: [
      "Social media platform centred around image sharing and discovery. Key features include authentication, authorization, posting, sharing, and image searching, as well as the creation of user-profiles and image collections.",
      "The Frontend uses Next.js, React.js, Typescript, Tailwind and Zustand, providing a responsive UI.",
      "On the backend, we use Supabase, a backend service application that offers database storage and handles user authentication/authorization.",
      "For image storage and optimization, we use Cloudinary, an image and video service",
    ],
    techs: [techs.Astro, techs.React],
    title: "Web Capture",
    urls: {
      github: "https://github.com/Jes015/Web-Capture",
      preview: "https://www.web-capture.online/",
    },
    picture_src:
      "https://private-user-images.githubusercontent.com/113150193/308265006-3009a793-746f-4efc-b954-77c21348e9c8.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDkzMzUwMzMsIm5iZiI6MTcwOTMzNDczMywicGF0aCI6Ii8xMTMxNTAxOTMvMzA4MjY1MDA2LTMwMDlhNzkzLTc0NmYtNGVmYy1iOTU0LTc3YzIxMzQ4ZTljOC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMzAxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDMwMVQyMzEyMTNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01OTU0MGI1MjJhZWJiMmZjNGUwMDQ5MWJkOTY2YTI1NzNlZDRlMWZlZTg5NDc1ODExMDBmMDYzZGIxMjAxMjE5JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.5faSKAzNju4E_88_MMHR_EDGOG70TvUE8Sj3ozJXDHM",
  },
  {
    date: "08-2023",
    description: [
      "Social media platform centred around image sharing and discovery. Key features include authentication, authorization, posting, sharing, and image searching, as well as the creation of user-profiles and image collections.",
      "The Frontend uses Next.js, React.js, Typescript, Tailwind and Zustand, providing a responsive UI.",
      "On the backend, we use Supabase, a backend service application that offers database storage and handles user authentication/authorization.",
      "For image storage and optimization, we use Cloudinary, an image and video service",
    ],
    techs: [techs.Astro, techs.React],
    title: "Culinary Alchemy",
    urls: {
      github: "https://github.com/CulinaryAlchemy/CulinaryAlchemy",
      preview: "https://culinary-alchemy-web-app.vercel.app/",
    },
    picture_src:
      "https://private-user-images.githubusercontent.com/113150193/308265006-3009a793-746f-4efc-b954-77c21348e9c8.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDkzMzUwMzMsIm5iZiI6MTcwOTMzNDczMywicGF0aCI6Ii8xMTMxNTAxOTMvMzA4MjY1MDA2LTMwMDlhNzkzLTc0NmYtNGVmYy1iOTU0LTc3YzIxMzQ4ZTljOC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMzAxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDMwMVQyMzEyMTNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01OTU0MGI1MjJhZWJiMmZjNGUwMDQ5MWJkOTY2YTI1NzNlZDRlMWZlZTg5NDc1ODExMDBmMDYzZGIxMjAxMjE5JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.5faSKAzNju4E_88_MMHR_EDGOG70TvUE8Sj3ozJXDHM",
  },
];

