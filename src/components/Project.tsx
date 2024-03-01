import type { BaseComponentProps, FC, Project as ProjectModel } from "@/models"
import { GitHubLogoIcon, Link2Icon } from "@radix-ui/react-icons"
import clsx from "clsx"

interface ProjectProps extends BaseComponentProps {
    data: ProjectModel
}

export const Project: FC<ProjectProps> = ({ data, className, ...props }) => {
    return (
        <div
            className={
                clsx(
                    "flex flex-col gap-1 border rounded-md p-2",
                    className
                )
            }
            {...props}
        >
            <header>
                <div className="flex justify-between items-center">
                    <h4 className="font-bold text-lg text-balance">{data.title}</h4>
                    <span className="text-[0.65rem] text-zinc-600 px-1 rounded-md font-light">{data.date}</span>
                </div>
                <span className="text-xs text-pretty">{data.description}</span>
            </header>
            <div className="flex gap-1">
                {
                    data.techs.map((tech) => (
                        <span className="text-[0.6rem] px-1 bg-neutral-100 rounded-md font-light">{tech}</span>
                    ))
                }
            </div>
            <footer className="flex justify-between items-center">
                <div className="flex gap-1">
                    <a
                        className="hover:bg-neutral-200 p-2 rounded-lg"
                        href={data.urls.github}
                        target="_blank"
                        aria-label={`${data.title}'s github`}
                        title={`${data.title}'s github`}
                    >
                        <GitHubLogoIcon aria-hidden width={17.5} height={17.5} />
                    </a>
                    <a
                        className="hover:bg-neutral-200 p-2 rounded-lg"
                        href={data.urls.preview}
                        target="_blank"
                        aria-label={`${data.title}'s preview`}
                        title={`${data.title}'s preview`}
                    >
                        <Link2Icon aria-hidden width={17.5} height={17.5} />
                    </a>
                </div>
                <div>
                    <span className="text-xs font-medium text-blue-600 hover:underline cursor-pointer">
                        Check out images
                    </span>
                </div>
            </footer>
        </div>
    )
}