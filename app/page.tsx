import Image from "next/image";

export default function Home() {
  return <div className="flex items-center justify-center h-screen gap-4 flex-col">
    <h1 className="md:text-4xl text-xl">BuildABot - IEEE RAS UCEK</h1>
    <div className="flex items-center justify-center flex-col gap-4">
      <a target="_blank" href="https://docs.google.com/document/d/1gS_Ap9QM57To1uVzHiZ_-0OCbvwSfiq2-dBC9vYK9Fs/view" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Docs Link</a>
      <a target="_blank" href="https://wokwi.com/projects/421516276154954753" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Simulation Link</a>
    </div>
  </div>
}