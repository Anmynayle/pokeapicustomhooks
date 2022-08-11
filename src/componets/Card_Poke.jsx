import React from 'react'
import useApi from '../hooks/useApi'

const Card_Poke = ({poke}) => {
    
    const data = useApi(poke.url)
    
   
    return(
        <div className="content">
            <div className="card">
                <img src={data?.sprites.front_default} alt="" />
                <h2>{data?.name}</h2>
            </div>
        </div>

  )
}

export default Card_Poke