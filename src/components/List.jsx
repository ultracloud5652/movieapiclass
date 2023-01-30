import React,{useContext, useEffect} from 'react'
import { MovieContext } from '../MovieContext'
import Item from './Item'
// bf5595cb127233997340c64248b9a09a

const url = 'https://api.themoviedb.org/3/'
const key='movie?api_key=bf5595cb127233997340c64248b9a09a&query='
// https://api.themoviedb.org/3/discover/movie?api_key=bf5595cb127233997340c64248b9a09a&query=lost

const List = () => {
const {movie, setMovie, searchKey, setSelected}=useContext(MovieContext)

useEffect(() =>{
    const filmMovie= async ()=> {
        const type = searchKey ? 'search':'discover'
        const response = await fetch(`${url}${type}/${key}${searchKey}`)
        const data= await response.json()
        console.log(data.results)
        setMovie(data.results)
        setSelected(data.results[0])
    }
    filmMovie()
}, [searchKey, setMovie, setSelected])

// if(!movie || movie.length===0){
//    return  'loading---'
// }

  return (
    <div style={{display:'flex', justifyContent:'center', flexWrap:'wrap'}}>
      {movie.map((film, index)=>(
        <Item key={index++} film={film} />
      ))}
    </div>
  )
}

export default List
