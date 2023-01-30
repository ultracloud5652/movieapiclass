import React, {createContext, useState} from 'react'



export const MovieContext = createContext()
const GetMovie = ({children}) => {
    const [movie, setMovie]=useState([])
    const [searchKey, setSearchKey]=useState('')
    const [selected, setSelected]=useState('')

  return (
    <MovieContext.Provider value={{movie, setMovie, searchKey,
     setSearchKey, selected, setSelected}}>
      {children}
    </MovieContext.Provider>
  )
}

export default GetMovie;
