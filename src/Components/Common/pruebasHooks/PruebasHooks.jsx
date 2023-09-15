import { useState, useEffect } from "react"


const PruebasHooks = ( {contador, setContador} ) => {

    let arr = [
    "https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7319307/pexels-photo-7319307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7129052/pexels-photo-7129052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/18111088/pexels-photo-18111088/free-photo-of-playa-vacaciones-gente-arena.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/18171438/pexels-photo-18171438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

   ]

    
    const [img, setImg ] = useState("")

    useEffect( ()=>{

       setImg(arr[contador])

    }, [contador] )
    
    console.log("Me ejecute tantas veces como se renderiza el componente")

  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"20px", background:"#212121", height:"600px"}}>
        <h4 style={{fontSize:"20px", color:"white"}}>{contador}</h4>
        <img style={{width:"500px", height:"300px", justifyContent:"center", objectFit:"cover", borderRadius:"10%", border: "solid aqua 4px"}} src={img} alt="" />
        <button style={{
          cursor:"pointer",
          background:"#00ffbb",
          color:"black",
          width:"80px",
          height:"30px",
          border:"none",
          fontWeight: "bold"
        }} onClick={ ()=> setContador( contador - 1 ) }
        >Izquierda</button>
        
        <button style={{
          cursor:"pointer",
          background:"#00ffbb",
          color:"black",
          width:"80px",
          height:"30px",
          border:"none",
          fontWeight: "bold"
          }} onClick={ ()=> setContador( contador + 1 ) }>Derecha</button>

    </div>
   
  )
}

export default PruebasHooks
