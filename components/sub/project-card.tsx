import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  key: string;
  src: string;
  title: string;
  description: string;
  link: string;
  technologiesStack: string[]
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
  technologiesStack
}: ProjectCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]"
    >
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
        <p className="mt-2" style={{ color: "wheat" }}>Technologies Stack:</p>
        <div className="flex flex-wrap gap-[6px]">
          {technologiesStack.map(txt => <p className="mt-2 rounded-full p-[2px_10px] bg-gray-800 text-white text-[12px]">{txt} </p>)}
        </div>

      </div>
    </Link>
  );
};
