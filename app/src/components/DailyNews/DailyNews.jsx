import React, { useEffect, useState } from 'react'

export const DailyNews = () => {
    const [data,setdata] = useState();
    var url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=633c05017f4a437b9806467a1918e389`

var req = new Request(url);

fetch(req)
.then((res)=>(res.json()))
.then((data)=>console.log(data))
//    const fetchData = (url) =>{
//     fetch(url).then((res)=>res.json()).then((data)=>{
//         console.log(data);
//     }).catch((err)=>console.log(err))
//    }

//    useEffect(()=>{
//      fetchData();
//    },[])

  return (
    <div>DailyNews</div>
  )
}
