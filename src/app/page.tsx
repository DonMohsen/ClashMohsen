"use client";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { CircleAlert, CircleCheck, RotateCcw } from "lucide-react";

export default function Home() {
  const [inputCondition, setInputCondition] = useState("");
  const [isTherePlayer, setIsTherePlayer] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [tag, setTag] = useState("");
  useEffect(() => {
    if (isTherePlayer === true) {
      setInputCondition("Player Found!");
    } else {
      setInputCondition("No Player Found");
    }
  }, [isLoading]);
  useEffect(() => {
   if (isTherePlayer) {
    setInputCondition("No Player Found")
    setIsTherePlayer(false)
   }
  }, [tag])
  
  useEffect(() => {
    setTag("");
    setInputCondition("");
  }, []);

  const queryClient = useQueryClient();
  const router = useRouter();
  //   const{data,isLoading,error}=useQuery<any>({
  //     queryKey:['isThereAPlayerOrNot'],
  //     queryFn: async () => {
  //         const response = await fetch(`http://localhost:5000/api/coc/player/%${tag}`);

  //         return response.json(); // Parse JSON data here
  //     }
  // });
  const handlePlayerFetch = async () => {
    try {
      setIsTherePlayer(false);
      setIsLoading(true);
      const playerInfo = await fetch(
        `http://localhost:5000/api/coc/player/${tag}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${process.env.COC_API_TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await playerInfo.json();
      if (!data.tag) {
        console.log("No res!!");
        setIsTherePlayer(false);
      } else {
        setIsTherePlayer(true);
        // router.push(`/Player/${tag}`)
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <div className="rounded-2xl border border-transparent px-5 py-4 transition-colors hover:border-gray-300 bg-gray-100 hover:bg-slate-200 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <div className="flex items-center justify-center w-full">
            <Input
              onChange={(e) => setTag(e.target.value)}
              className="fill-slate-200 border-slate-400"
              placeholder="#AAAAAA"
            />
            <Button
            disabled={isLoading||tag.length>=10||tag.length<=5}
              onClick={() => handlePlayerFetch()}
              className="w-[40%] text-wrap text-sm bg-transparent text-blue-600 shadow-none border-blue-500 border hover:bg-blue-200"
            >
              {isLoading ? (
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-blue-500 border-t-transparent"></div>
              ) : (
                inputCondition==="No Player Found"?<RotateCcw  />:inputCondition==="Player Found!"?<CircleCheck />:"Check!"
              )}
            </Button>
          </div>
          <div
            className="group"

            // target="_blank"
            // rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold ">
              Player{" "}
              <span className="inline-block transition-transform motion-reduce:transform-none group-hover:translate-x-1">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Type your account tag
            </p>
          </div>
        </div>

        <a
          href="/herotest"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Test{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </div>
  );
}
