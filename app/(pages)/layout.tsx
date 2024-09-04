"use client";
import { useRouter } from "next/navigation";
import { pages } from "../Components/CentralBlock";
import Button from "../Components/Button";
import Github from "../Assets/Github";
import Linkedin from "../Assets/Linkedin";

const SubpagesLayout = ({ children }: any) => {
  const router = useRouter();
  return (
    <div>
      <nav className="fixed top-0 left-0 w-full flex justify-between bg-slate-600 p-6 z-50">
        <span className="cursor-pointer" onClick={() => router.push("/")}>
          Nour Azouz
        </span>
        <div className="flex space-x-6 ">
          {pages.map((page, index) => (
            <Button
              variant="text-blue"
              label={page.label}
              key={index}
              onClick={() => router.push(page.url)}
            />
          ))}
        </div>
      </nav>
      <main>{children}</main>
      <footer className="flex justify-between bg-slate-600 p-6  bottom-0">
        <span> © 2024 Nour </span>
        <div className="flex space-x-4">
          <a
            href="https://github.com/Minazuki7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="cursor-pointer" />
          </a>

          <a
            href="https://www.linkedin.com/in/nour-az/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="cursor-pointer" />
          </a>
        </div>
      </footer>
    </div>
  );
};
export default SubpagesLayout;
