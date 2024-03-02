import type { BaseComponentProps, FC, Project as ProjectModel } from "@/models"
import { GitHubLogoIcon, Link2Icon } from "@radix-ui/react-icons"
import clsx from "clsx"

interface ProjectProps extends BaseComponentProps {
  data: ProjectModel;
}

export const Project: FC<ProjectProps> = ({ data, className, ...props }) => {
  return (
    <article
      className={clsx(
        "2xl:grid 2xl:grid-cols-2 flex flex-col gap-4 rounded-sm py-2 w-full",
        className,
      )}
      {...props}
    >
      <section className="h-full w-full">
        <img
          src={data.picture_src}
          className="h-full w-full rounded-md bg-slate-300 object-cover object-center"
        />
      </section>
      <section className="flex flex-col justify-between h-full">
        <header className="flex flex-col">
          <h4 className="font-bold text-4xl text-balance max-w-[80%]">
            {data.title}
          </h4>
          <span className="text-md text-zinc-600 px-1 rounded-md text-pretty font-light">
            {data.date}
          </span>
          {data.description.map((paragraph) => (
            <span className="text-lg text-pretty text-zinc-950 mb-2">{paragraph}</span>
          ))}
          <div className="flex gap-1 mt-2">
            {data.techs.map((tech) => (
              <span className="text-md px-3 py-1 bg-neutral-200 text-neutral-700 rounded-md font-light">
                {tech}
              </span>
            ))}
          </div>
        </header>
        <footer className="flex">
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
        </footer>
      </section>
    </article>
  );
};

