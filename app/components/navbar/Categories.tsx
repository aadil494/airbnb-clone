"use client"
import Container from "../Container"
import {TbBeach, TbMountain, TbPool} from "react-icons/tb";
import {GiBarn, GiBoatFishing, GiCactus, GiCastle, GiCaveEntrance, GiForestCamp, GiIsland, GiWindmill} from "react-icons/gi";
import {MdOutlineVilla} from "react-icons/md";
import {FaSkiing, FaSteam} from "react-icons/fa";
import {IoDiamond} from "react-icons/io5";
import {BsSnow} from "react-icons/bs";
import CategoryBox from "../CategoryBox";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import qs from "query-string";
export const categories = [
    {
        label : 'Beach',
        icon : TbBeach,
        description : 'Sunny beaches with white sand'
    },
    {
        label : 'Windmill',
        icon : GiWindmill,
        description : 'This property has a windmill'
    },
    {
        label : 'Modern',
        icon : MdOutlineVilla,
        description : 'Modern and luxurious places'
    },
    {
        label : 'CountrySide',
        icon : TbMountain,
        description : 'Places in the countryside'
    },
    {
        label : 'Pools',
        icon : TbPool,
        description : 'Places with pools'
    },
    {
        label : 'Islands',
        icon : GiIsland,
        description : 'Places in islands'
    },
    {
        label : 'Lakes',
        icon : GiBoatFishing,
        description : 'Places near lakes'
    },
    {
        label : 'Sking',
        icon : FaSkiing,
        description : 'Places near ski resorts'
    },
    {
        label : 'Castles',
        icon : GiCastle,
        description : 'Places in castles'
    },
    {
        label : 'Camping',
        icon : GiForestCamp,
        description : 'Places for camping'
    },
    {
        label : 'Artic',
        icon : BsSnow,
        description : 'Places in the artic'
    },
    {
        label : 'Cave',
        icon : GiCaveEntrance,
        description : 'Places in caves'
    },
    {
        label : 'Desert',
        icon : GiCactus,
        description : 'Places in the desert'
    },
    {
        label : 'Barns',
        icon : GiBarn,
        description : 'Places in barns'
    },
    {
        label : 'Lux',
        icon : IoDiamond,
        description : 'Luxurious places'
    },
]
const  Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();

    const isMainPage = pathname === '/';

    if (!isMainPage) return null;
  return (
    <Container>
        <div
        className="
        pt-4
        flex
        flex-row
        items-center 
        justify-between
        overflow-x-auto
        "
        > 
            {
                categories.map((item, index) => (
                    <CategoryBox
                        key={item.label}
                        label={item.label}
                        icon={item.icon}
                        selected={category === item.label}

                    />
                ))
            }
        </div>
    </Container>
  )
}

export default Categories