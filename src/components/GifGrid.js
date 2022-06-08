import React from 'react'

export const GifGrid = ({category}) => {

    const getGifs = async() =>{
        
        const url = 'https://api.giphy.com/v1/gifs/search?q=Dragon Ball&limit=10&api_key=7lN5ubz0G3FO13uMmuww5jJKYtoW0B8b';
        const resp = await fetch(url);
        const {data} = await resp.json();

        const gifs = data.map(img =>{
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        console.log(gifs);
    }

    getGifs();

    return (
        <>
            <h3>{ category }</h3>
        </>
    )
}
