export const getGifs = async ( category ) => {
    const apiKey = 'Ko4kAY9qG4ngN0qOK4xO3XH2Mw0wt1F3';

    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=${10}`

    const resp = await fetch( url );

    const { data = []} = await resp.json();

    const gifs = data.map(imageData => ({
        id: imageData.id,
        title: imageData.title,
        url: imageData.images.downsized_medium.url
    }));
    
    return gifs;
}