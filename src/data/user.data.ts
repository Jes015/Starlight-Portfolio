import {
    DesktopIcon,
    DiscordLogoIcon,
    GitHubLogoIcon,
    HomeIcon,
    InstagramLogoIcon,
    LinkedInLogoIcon,
    MagicWandIcon,
    ReaderIcon,
    TwitterLogoIcon
} from "@radix-ui/react-icons"
import type { IconProps } from "@radix-ui/react-icons/dist/types"
    
export interface UrlItem {
    url: string
    name: string
    icon: React.ForwardRefExoticComponent<
        IconProps & React.RefAttributes<SVGSVGElement>
    >
}

export type UrlItemRecord = Record<string, UrlItem>

export interface JsonData {
    name: string
    openToJob: boolean
    profesion: string
    pages: UrlItemRecord
    socials: UrlItemRecord
}

export const jsonData: JsonData = {
    name: "Jesus Oyola",
    profesion: "Full-stack developer",
    openToJob: true,
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
} as const // This is temporal, while we add the json data