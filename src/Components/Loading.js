import React from 'react'
import loading from "./loadingcursor.gif"
const Loading = () => {
  return (
    <div>
         <div className="d-flex justify-content-center">
        <img style={{width:"125px"}} src={loading} className="img-fluid" alt="loading"></img>
      </div>
    </div>
  )
}

export default Loading
