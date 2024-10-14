"use client"

import React , {useRef , useState} from 'react'
import Card from './Card'


const Foreground = () => {
       
    const ref = useRef(null);

    const data = [
        {
            desc: "This is background color of the card the will be  displayed",
            filesize: ".9mb",
            closer: true,
            tag: {isopen: true , tagTitle: "Download Now" , color:"green"},
        },

        {
            desc: "This is background color of the card the will be  displayed",
            filesize: ".5mb",
            closer: true,
            tag: {isopen: true , tagTitle: "Download Now" , color:"green"},
        },

        {
            desc: "This is background color of the card the will be  displayed",
            filesize: ".7mb",
            closer: true,
            tag: {isopen: true , tagTitle: "upload" , color:"green"},
        },
    ]
  return (
    <div ref = {ref} className='fixed w-full h-full flex gap-10 flex-wrap p-5'>
        {data.map((item , index) =>(
            <Card data={item} reference = {ref}/>
        ))}
    </div>
  )
}
export default Foreground