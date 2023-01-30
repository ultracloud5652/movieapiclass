import React from 'react'
const imgPath='https://image.tmdb.org/t/p/w500'
const unavailable='https://thumbs.dreamstime.com/b/unavailable-text-concept-human-hand-over-wooden-background-89839252.jpg'



const Item = ({film}) => {
  return (
    <div style={{width:'200px', margin:'20px', backgroundColor:'black', padding:'10px'}}>
      <img width='200' src={film.poster_path ?`${imgPath}${film.poster_path}`:unavailable} alt="" style={{borderRadius:'20px'}} />
      <div style={{color:'white', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <span>{film.title}</span>
        <span style={{border:'2px solid green', height:'20px', width:'20px', borderRadius:'50%', padding:'10px', textAlign:'center'
      
      
      }}>{film.vote_average.toFixed()}</span>
        
      </div>

      <div style={{color:'white', textAlign:'center', backgroundColor:'grey', borderRadius:'20px', fontWeight:'700', marginTop:'5px'}}>
        <p>{film.release_date}</p>
      </div>
    </div>
  )
}

export default Item
