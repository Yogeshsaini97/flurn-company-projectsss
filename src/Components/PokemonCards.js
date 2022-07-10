import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from './Loading';
import { Link, useNavigate } from "react-router-dom";
import Showpokedetail from './Showpokedetail';


const PokemonCards = () => {
  const Navigate=useNavigate();
    const[array,setarray]=useState([]);
    const[objectarray,setobjectarray]=useState([]);
    const[resultin,setinneresultin]=useState("helloresultin")
    
    const[page,setpage]=useState(0);

  const radhe="helllo yogesh";

    useEffect(()=>
    {
       
       fetching();

    },[])

   

    const fetching= async ()=>
    {
        let data=await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=7`);
        const result=await data.json();
       
        setarray(result.results);
        setobjectarray(result);
       
        
    }
    
   
    const fetchmore=async ()=>
    {
        setpage(page+10);
        let data=await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=7`);
        const result=await data.json();
       
        setarray(array.concat(result.results));
        setobjectarray(result);
      


    }

   

  

  return (<>


  <div className='container'>
 <h5><Link className="nav-link text-center my-5 mx-5" to="/Searchpokemon"><u>search your pokemon here...</u></Link></h5>
  <h1 className='text-center my-5'>pokemon</h1>
  <InfiniteScroll
  dataLength={array.length} //This is important field to render the next data
  next={fetchmore}
  hasMore={array.length!=objectarray.count}
  loader={<Loading/>} 
  >
  <div className='container' >
  
    <div className='row my-5'>
    
    {
        array.map((e)=>
        {
          
          return(<>
        <div className="col-md-4 my-5">
        <div className="card" style={{width:"18rem"}}>
  <div className="card-body">
    <h5 className="card-title text-center">{e.name}</h5>
    <button className="btn btn-primary">know more about this pokemon</button>
  </div>
  </div>
    </div>
   
    </>)
       
    
        }
      )
  
   
    
    }
    
    </div>
    </div>
    </InfiniteScroll>
   
    
  
    </div>
    </>
  )
}

export default PokemonCards;

