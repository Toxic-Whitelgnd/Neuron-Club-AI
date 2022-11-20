import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const Client = sanityClient(
    {
        projectId:'ryjgs5uy',
        dataset:'production',
        apiVersion:'2022-11-19',
        useCdn: true,
        token: process.env.SANITY_PROJECT_TOKEN
    }
)

const builder = imageUrlBuilder(Client)

export const urlFor = (source)=> builder.image(source);