export interface Project {
  title: string;
  description: string[];
  date: string;
  techs: Tech[];
  urls: {
    github: string;
    preview: string;
  };
  picture_src: string;
}

export const techs = {
  React: "React",
  Astro: "Astro",
} as const;

export type Tech = (typeof techs)[keyof typeof techs];
