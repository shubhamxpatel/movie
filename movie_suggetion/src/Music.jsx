/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import song from './song.mp3';
function Music() {
    
    const [cond, setcond] = useState("loading");
    const [time, settime] = useState(-1);
    var audio = new Audio("https://doc-10-5s-docs.googleusercontent.com/docs/securesc/cu64k6sosp9bd453ioh8a9s53l542guv/tjpd06uj12501i6j0n3r8q3igpmuehnc/1604550825000/10197134917993881454/04358576789624393212/0B9luEHoRLu-1cTFXa3QyNl9UeFU?e=download&authuser=0&nonce=ghv1tbpd9r318&user=04358576789624393212&hash=lv4v8n7cnpv1as99vcnv724db1hm3cc8");
    // useEffect(()=>{
    //     setTimeout(() => {
    //         settime(Math.floor(audio.currentTime));
    //         console.log(audio.currentTime);
    //     }, 5000);
    // },[])
    audio.oncanplay = function () {
        setcond("loaded");
        
        
    }
    audio.onloadStart=function(){
        setcond("loading");
    }
    
    
    audio.onended = function () {
        alert('ended');
    }
    audio.ontimeupdate=(()=>{
        //settime(Math.floor(audio.currentTime));
        //document.getElementsByTagName("p").style.ba=//;
        document.getElementById("pr").innerText=`${Math.floor(audio.currentTime)}s : ${Math.floor(audio.duration)}s`;
        

    })

    

    return (
        <>
        <button onClick={(event)=>{audio.play(); console.log(event)}}>Play</button>
        <button onClick={()=>{audio.pause();}}>Pause</button>            
    <p id="pr" style={{backgroundColor:"black",height:"50px",width:"100px",color:"white"}}>hello</p>
    <p>{cond}</p>
        </>
    )
}
export default Music;
