import React, {useEffect } from "react";
export default function Protected(props) {
let Cmp = props.Cmp;
useEffect(()=>{
    if(!localStorage.getItem('user-info'))
    {
        window.location.href="/register"
    }
},[])
return (
    <div>
      <Cmp />
    </div>
  );
}
