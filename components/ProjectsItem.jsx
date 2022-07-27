import Image from "next/image";
import Link from "next/link";

const ProjectsItem = (props) => {
  const { name, tech, url, bg } = props;
  return (
    <div>
      <div className="relative py-3 flex flex-col gap-4 w-full">
        <div className="border border-slate-100/20 rounded-md overflow-hidden">
          <Link href={url}>
            <a className="cursor-pointer" target="_blank">
              <Image src={bg} alt="rakib" layout="responsive" />
            </a>
          </Link>
        </div>
        <div className="text-center">
          <h3 className="text-xl text-slate-900 tracking-wider dark:text-slate-100">
            {name}
          </h3>
          <p className="pb-4 pt-2 text-slate-400">{tech}</p>
          <Link href={url}>
            <a
              target="_blank"
              className="text-[14px] py-2 px-6 rounded-full gradient font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/20 duration-200"
            >
              Live Preview
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectsItem;
