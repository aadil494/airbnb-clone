"use client"
import Container from "../Container"
import {TbBeach} from "react-icons/tb";
import {GiWindmill} from "react-icons/gi";
import {MdOutlineVilla} from "react-icons/md";
import CategoryBox from "../CategoryBox";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import qs from "query-string";
export const categories = [
    {
        label : 'Beach',
        icon : TbBeach,
        description : 'Sunny beaches with white sand'
    },
    {
        label : 'Countryside',
        icon : GiWindmill,
        description : 'Calm and peaceful places'
    },
    {
        label : 'Modern',
        icon : MdOutlineVilla,
        description : 'Modern and luxurious places'
    },
    
]
const  Categories = () => {

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
                categories.map((category, index) => (
                    <CategoryBox
                        key={category.label}
                        label={category.label}
                        icon={category.icon}
                        selected={false}

                    />
                ))
            }
        </div>
    </Container>
  )
}

export default Categories