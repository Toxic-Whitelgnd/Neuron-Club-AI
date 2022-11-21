import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { suspend } from 'suspend-react'
import MuxPlayer from '@mux/mux-player-react'
import { useEffect } from 'react'

export const Client = sanityClient(
    {
        projectId:'ryjgs5uy',
        dataset:'production',
        apiVersion:'2022-11-19',
        useCdn: true,
        token: process.env.SANITY_PROJECT_TOKEN
    }
)

export const Video = (videoid)=>{
    console.log(videoid)
    return <MuxPlayer playbackId={videoid} />
}


const builder = imageUrlBuilder(Client)

export const urlFor = (source)=> builder.image(source);