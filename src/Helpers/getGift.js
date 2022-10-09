export const getGift = async (category) => {
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=dQME8s1ouIIwHPsDlJQBkdCfSHXW17Ql&q=${category}&limit=10`
    const response = await fetch(URL) 
    const {data} = await response.json()
    
    const gifs = data.map(img =>({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }))
    console.log(gifs)
    return gifs
  }