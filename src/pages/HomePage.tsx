import { Keyboard } from "@/components/Keyboard";

export const HomePage = () => {
  return (
    <div className="w-full h-screen bg-neutral-800">
      <div className="flex flex-col h-full justify-between p-4 max-w-[720px] mx-auto">
        <h1 className="text-4xl text-neutral-100 font-black text-center">
          Termo Clone
        </h1>
        <Keyboard />
      </div>
    </div>
  );
};
