"user client"

import { SafeUser } from "@/app/types";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface HeatButtonProps {
  listingId: string;
  currentUser?: SafeUser | null;

}
function HeatButton( {listingId, currentUser}: HeatButtonProps) {
  const hasFavorited = false;
  const toggleFavorite = () => {};
  return (
    <div
    onClick={toggleFavorite}
    className="
    relative
    hover:opacity-80
    transition
    cursor-pointer
    "
    >
      <AiOutlineHeart size={24} className="
        fill-white
        absolute
        -top-[2px]
        -right-[2px]
      " />
      <AiFillHeart size={24} className={`
          absolute
          -top-[2px]
          -right-[2px]
        ${hasFavorited ? "fill-rose-500" : "fill-neutral-500/70"}
        `}/>
    </div>
  )
}

export default HeatButton