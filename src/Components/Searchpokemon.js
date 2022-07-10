import React, { useEffect, useState } from 'react'

const Searchpokemon = () => {
    const[imgstr,setimgstr]=useState("")
    const[namepoke,setnamepoke]=useState("")
    const[texting,settexting]=useState("");
    const[booll,setbool]=useState(false);
    const[weight,setweight]=useState("");
    const[height,setheight]=useState("");
    
    useEffect(()=>
    {
        searchfetchpoke();
    },[texting])

   

    const searchfetchpoke=async()=>
    {
      try {

        let data=await fetch(`https://pokeapi.co/api/v2/pokemon/${texting}`);
        let result=await data.json();
        setbool(true);
       
        // console.log(Object.entries(result)[14][1].front_default)
        // console.log(result)
        setimgstr(result.sprites.front_default);
        // console.log(result.name);
        setnamepoke(result.name);
        setweight(result.weight);
        setheight(result.height);
      } catch (error) {
        
     setbool(false);
        
      }
     
    }

    const fetchdetail=()=>
    {
      console.log("hy");
    }




  return (

    <div className="border border-dark container my-5  " >
   
    <div className="border border-dark form-outline  my-5">
  <input type="search" value={texting} onChange={(e)=>{settexting(e.target.value)}} id="form1" className="form-control text-center " placeholder="Search your pokemon..." aria-label="Search" />
</div>
 {(booll)?<>
 <div className="d-flex justify-content-center border border-dark form-outline container my-5 text-center">
    <div className="card" style={{width: "18rem"}}>
  <img className="card-img-top" src={imgstr} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title text-center">{namepoke}</h5>
    <p className="card-text">weight:{weight}kgs</p>
    <p className="card-text">height:{height}m</p>
    <a href="#" onClick={fetchdetail} className="btn btn-primary">check details</a>
  </div>
</div>
    </div></>:<>
    <div>Not found {texting}!</div>
    <div>Example : Try with bulbasaur or ditto</div>
    </>
    }
    </div>

  )
}

export default Searchpokemon
