import React, { useEffect } from 'react'


const Showpokedetail = (props) => {

  // useEffect(()=>
  // {
  //    console.log(radhe);
  // },[])



  return (
    <div className="container text-center">
    <img style={{width:"40%"}} src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png" alt="..." className="rounded-circle "/>
    <img style={{width:"40%"}} src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png" alt="..." className="rounded-circle "/>
    <div className="card" >
  
  <div className="card-body">
  <h5>POKEMON DETAILS</h5>
    <h5 style={{border:"none"}} className="card-title text-center">Card title</h5>
   <h5>Height:89cm</h5>
   <h5>Weiht:89kg</h5>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
      </div>
  )
}

export default Showpokedetail
