import Image from "next/image";
import title from "./icon/title.svg";
import exported_tools from "./toolbox/module";
import { Typography } from "@mui/material";
import { ToolMeta } from "@/inlcude/tool_metadata";
import Link from "next/link";

function ToolCard({ meta }: { meta: ToolMeta }) {
  return (
    <div
      className="m-4 transform transition-transform ease-in-out duration-300
            hover:scale-105 hover:shadow-md rounded-2xl bg-white dark:bg-gray-800
            overflow-hidden cursor-pointer select-none"
    >
      <div className=" h-44 relative bg-amber-50">
        <div className="w-auto h-auto">
          <img src="cidr-icon.svg" alt="cidr" />
        </div>
      </div>
      <Link href={meta.route}>
        <p className="p-2 text-center">{meta.name}</p>
      </Link>
    </div>
  );
}

function ToolCardBg1() {
  return (
    <div className="my-10 mx-auto ">
      <div className="h-[12rem] w-[31rem] bg-indigo-500 rounded-2xl overflow-hidden ">
        <div className="h-[24.3rem]  w-[24.3rem] bg-[#FF6969] rounded-full blur-sm relative right-[9rem] top-[1.5rem] "></div>
        <div className="h-[24.3rem]  w-[24.3rem] bg-[#FFCF97] rounded-full blur-sm relative left-[11rem] bottom-[29rem]"></div>
      </div>
      <div
        className="h-[12rem] w-[31rem] backdrop-filter backdrop-blur-2xl bg-[#E9ECFD]/10 rounded-2xl relative bottom-[11.25rem] right-[1rem] 
                shadow-[0.25rem_0.25rem_0.5rem_rgba(0,0,0,0.25)] border-4 border-[#CABDBD]/20
                ease-in-out duration-300 hover:scale-105" /*bg 透明度 10-20; border 粗细 4-6px; border 透明度20-30*/
      ></div>
    </div>
  );
}

function ToolCardBg2() {
  return (
    <div className="my-10 mx-auto h-[12.75rem] w-[32rem] ">
      <img src="background1.svg" alt="background" className="right-0 top-0" />
      <div
        className="w-[31rem] h-[12rem] rounded-xl relative bottom-[11.25rem] right-[1rem] backdrop-filter backdrop-blur-2xl bg-[#E9ECFD]/10 
                shadow-[0.25rem_0.25rem_0.5rem_rgba(0,0,0,0.25)] border-[0.375rem] border-[#CABDBD]/20 
                ease-in-out duration-300 hover:scale-105 " /*bg 透明度 10-20; border 粗细 4-6px; border 透明度20-30*/
      ></div>
    </div>
  );
}

function ToolCardBg3() {
  return (
    <div className="my-10 mx-auto h-[12rem] w-[31rem] rounded-xl">
      <img
        src="background1.svg"
        alt="background"
        className="right-0 top-0 ease-in-out duration-300 hover:scale-105"
      />
      <div
        className="w-[31rem] h-[12rem] rounded-xl relative bottom-[12rem] backdrop-filter backdrop-blur-2xl bg-[#E9ECFD]/10 
                ease-in-out duration-300 hover:shadow-[0.25rem_0.25rem_0.5rem_rgba(0,0,0,0.25)] border-[0.375rem] border-[#CABDBD]/30" /*bg 透明度 10-20; border 粗细 4-6px; border 透明度20-30*/
      ></div>
    </div>
  );
}

function ToolCardBg4() {
  return (
    <div className="my-10 mx-auto ">
      <div className="h-[12rem] w-[31rem] bg-gradient-to-b from-[#6366F1]/[0.8] to-[#7073FF]/[0.1] rounded-2xl overflow-hidden "></div>
      <div
        className="h-[12rem] w-[31rem] backdrop-filter backdrop-blur-md bg-[#EBEBEB]/60 rounded-2xl relative bottom-[11.25rem] right-[1rem] 
                shadow-[0.25rem_0.25rem_0.5rem_rgba(0,0,0,0.25)] border-4 border-[#E0D7E9]/20
                ease-in-out duration-300 hover:scale-105" /*bg 透明度 10-20; border 粗细 4-6px; border 透明度20-30*/
      ></div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/*<Typography variant="h2" className="p-8" >Toolkit Dashboard</Typography>*/}
      {/* innner shadow frame */}
      <div className="rounded-2xl h-screen my-7 bg-[#F4F2F4] shadow-[inset_0rem_0.25rem_0.5rem_rgba(0,0,0,0.25)]">
        {/* title&icon */}
        <div className="flex justify-center py-16">
          <img src="title.svg" alt="tittle" />
        </div>
        {/* search input */}
        <div className="mx-0 flex justify-center">
          <input
            type="text"
            className="mx-0 px-4 h-14 rounded-2xl border-4 border-black w-8/12 hover:shadow-lg ease-in-out"
          />
        </div>
        <div className="mx-auto pt-12 w-auto grid xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center">
          <ToolCardBg1 />
          <ToolCardBg2 />
          <ToolCardBg3 />
          <ToolCardBg4 />
        </div>
        {/* Toolkit */}
        {/* <div className="mx-auto pt-12 w-11/12 grid xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center">
                    {exported_tools.map((list, idx) => {
                        return <ToolCard meta={list} key={"card_1" + idx} />;
                    })}
                    <ToolCard meta={exported_tools[0]} />
                    <ToolCard meta={exported_tools[0]} />
                    <ToolCard meta={exported_tools[0]} />
                    <ToolCard meta={exported_tools[0]} />
                    <ToolCard meta={exported_tools[0]} />
                    <ToolCard meta={exported_tools[0]} />
                    <ToolCard meta={exported_tools[0]} />
                    <ToolCard meta={exported_tools[0]} />
                    <ToolCard meta={exported_tools[0]} />
                </div> */}
      </div>
    </>
  );
}
