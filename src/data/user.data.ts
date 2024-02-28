import { techs, type Project } from "@/models"
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

export interface Action {
    title: string
    subTitle: string
    date: Date
    type: 'blog' | 'project' | 'workspace' | 'other'
}

export type ActionArray = Action[]

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
    profession: string
    latestActions: ActionArray
    pages: UrlItemRecord
    socials: UrlItemRecord
}

export const jsonData: JsonData = {
    name: "Jesus Oyola",
    profession: "Full-stack developer",
    openToJob: true,
    latestActions: [
        { title: 'How to be happy', subTitle: 'Updated a new blog', date: new Date('12/12/2024'), type: 'other' },
        { title: 'How to be happy', subTitle: 'Updated a new blog', date: new Date('12/12/2024'), type: 'other' },
        { title: 'How to be happy', subTitle: 'Updated a new blog', date: new Date('12/12/2024'), type: 'other' },
        { title: 'How to be happy', subTitle: 'Updated a new blog', date: new Date('12/12/2024'), type: 'other' }
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
} as const // This is temporal, while we add the json data

export type ProjectRecord = Project[]

export const projectsData: ProjectRecord = [
    {
        date: '03-2024',
        description: 'App to record media from the browser',
        techs: [techs.Astro, techs.React],
        title: 'Web Capture',
        urls: {
            github: '/',
            preview: '/'
        }
    }
]