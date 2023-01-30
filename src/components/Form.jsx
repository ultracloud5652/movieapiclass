import React, {useContext, useState} from 'react'
import { MovieContext } from '../MovieContext'

const Form = () => {
    const{setSearchKey}=useContext(MovieContext)
   
    const [micheal, setMicheal]=useState('')


    const handleSubmit = (e) => {
        e.preventDefault();
    //    setMicheal(setSearchKey)
    setSearchKey(micheal)
       setMicheal('')
    };
  return (
    <>
    <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
        <h1 style={{color:'red'}}>nFlix</h1>
        <form onSubmit={handleSubmit} >
         <div style={{display:'flex', alignItems:'center'}}>
         <div style={{backgroundColor:'grey', padding:'6px', borderRadius:'20px'}}>
          <input type="text" placeholder='Search...' style={{border:'none', outline:'none', backgroundColor:'grey'}} value={micheal} onChange={(e)=> setMicheal(e.target.value)}/>
          </div>
            <input type="submit" value='Search' />
         </div>
        </form>
       
    </div>
    </>
  )
}

export default Form