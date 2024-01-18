import React from 'react'
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";



function Loader() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");   
  
   
  return (
    <div style={{marginTop:'150px'}}>
      

      <ClipLoader
        color='#000'
        loading={loading}
        cssOverride=''
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default Loader;