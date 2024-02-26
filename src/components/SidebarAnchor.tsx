import type { BaseComponentProps } from "@/models/component.model"
import { useEffect, useState, type FC } from "react"

interface SidebarAnchorProps extends BaseComponentProps {
    pageUrl: string
}
export const SidebarAnchor: FC<SidebarAnchorProps> = ({ children, pageUrl, ...props }) => {
    const [isCurrentUrl, setIsCurrentUrl] = useState(false)

    useEffect(() => {
        setIsCurrentUrl(pageUrl === location.pathname)
    }, [])

    return (
        <a
            className={
                [
                    "border border-transparent border-neutral-400 flex text-sm gap-2 font-medium hover:bg-neutral-200 transition-all [trasition-duration:0.1s] items-center p-2 w-full capitalize rounded-md",
                    isCurrentUrl ? 'bg-neutral-300' : ''
                ].join(' ')
            }
            href={pageUrl}
            {...props}
        >
            {children}
        </a>
    )
}