"use client"

import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineDownload } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import * as motion from "framer-motion/client"



const Card = ({ data, reference}) => {
    return (
        <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.2}} className=' relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
            <FaRegFileAlt />

            <p className=' leading-tight mt-5 text-ms font-semibold'>{data.desc}</p>

            <div className='footer absolute bottom-0  w-full  left-0'>
                <div className='flex items-center justify-between px-8 py-3 mb-3'>
                    <h5>{data.filesize}</h5>
                    <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                        {data.closer ? <IoMdCloseCircle /> : <MdOutlineDownload size=".8em" color='#fff' />}
                    </span>
                </div>

                {data.tag.isopen && (
                    <div className={`tag w-full py-4 flex items-center justify-center font-semibold cursor-pointer bg-green-500`}>
                        <h3 className='text-md font-semibold'>{data.tag.tagTitle}</h3>
                    </div>)}
            </div>
        </motion.div>
    )
}

export default Card