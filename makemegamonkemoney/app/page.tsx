import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Image
          className="blur-md"
          src="/monke.png"
          alt="monke logo"
          width={100}
          height={24}
          priority
        />
        <Image
          className="blur-sm"
          src="/monke.png"
          alt="monke logo"
          width={100}
          height={24}
          priority
        />
        <Image
          className=""
          src="/monke.png"
          alt="monke logo"
          width={100}
          height={24}
          priority
        />

        <h1 className="fixed left-0 top-0 w-full justify-center lg:static lg:w-auto lg:rounded-xl font-bold text-3xl">
          Make Mega Monke Money
        </h1>
        <Image
          className="bg-gradient-to-r from-[#ff0080] to-[#7928ca] rounded-3xl"
          src="/monke.png"
          alt="monke logo"
          width={100}
          height={24}
          priority
        />

        <Image
          className="blur-sm bg-gradient-to-r from-[#ff0080] to-[#7928ca] rounded-3xl"
          src="/monke.png"
          alt="monke logo"
          width={100}
          height={24}
          priority
        />
        <Image
          className="blur-md bg-gradient-to-r from-[#ff0080] to-[#7928ca] rounded-3xl"
          src="/monke.png"
          alt="monke logo"
          width={100}
          height={24}
          priority
        />
      </div>

      <Link
        href="/home"
        className="group rounded-lg border border-transparent px-10 py-8 transition-colors duration-500 hover:border-purple-300 hover:bg-purple-100"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className="mb-3 text-2xl font-semibold">
          Create your first Bet{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">
          Challenge your friends or opponents to put their money where their
          mouth is.
        </p>
      </Link>
    </main>
  );
}
