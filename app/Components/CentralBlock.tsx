"use client";
import { useRouter } from "next/navigation";
import Button from "./Button";

export const pages = [
  { label: "Projects", url: "/Projects" },
  { label: "About", url: "/About" },
  { label: "Blog", url: "/Blog" },
  { label: "Contact", url: "/Contact" },
];
const CentralBlock = () => {
  const router = useRouter();

  return (
    <div className="fixed inset-1/2 transform -translate-x-1/2 -translate-y-1/2 h-3/6 w-8/12  text-white rounded-md shadow-xl p-2 font-mono">
      <div className=" h-1/4 flex justify-around items-center  text-xl">
        {pages.map((page, index) => (
          <Button
            variant="text-blue"
            label={page.label}
            key={index}
            onClick={() => router.push(page.url)}
          />
        ))}
      </div>
      <div className=" h-2/4 flex flex-col justify-center items-center  text-8xl p-4 transparent-text">
        <p className="">HI, I'M NOUR</p>
      </div>
      <div className=" h-1/4  text-center  text-xl">
        <p className=" ">
          I'm a passionate Full Stack Developer with over 3 years of experience
          in TypeScript frameworks such as React, Node.js, and GraphQL. I enjoy
          creating innovative solutions and tackling new challenges. Explore my
          projects and learn more about my journey.
        </p>
        Thank you
      </div>
    </div>
  );
};

export default CentralBlock;
