import React from 'react';
import axios, { AxiosResponse } from 'axios';

function OnlineTask() {
  axios.get("http://localhost:5000/getTweetImage").then((resp: AxiosResponse)=>{
    console.log(resp.data)
  })

  return (
    <>heej</>
  )
}

export default OnlineTask;