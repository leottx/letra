import { MdOutlineBackspace } from "react-icons/md";
import cn from "classnames";

type KeyProps = {
  keyValue: string;
};

export const Key = ({ keyValue }: KeyProps) => {
  const isLetterA = keyValue === "a";
  const isDelete = keyValue === "back";
  const isLetterZ = keyValue === "z";
  const isEnter = keyValue === "enter";

  return (
    <button
      className={cn(
        "col-span-3 text-neutral-100 font-bold text-sm bg-neutral-700 h-16 flex justify-center items-center px-[10px] rounded-[4px] uppercase sm:text-lg md:text-2xl",
        {
          ["col-start-2"]: isLetterA,
          ["col-start-[29] col-end-[-1] !px-0"]: isDelete,
          ["col-start-3"]: isLetterZ,
          ["col-start-[24] col-end-[-1]"]: isEnter,
        }
      )}
    >
      {isDelete ? (
        <MdOutlineBackspace className="text-base sm:text-xl md:text-2xl" />
      ) : (
        keyValue
      )}
    </button>
  );
};
