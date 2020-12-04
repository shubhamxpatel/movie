/* eslint-disable no-unused-vars */
import React, { Component, useEffect, useState } from 'react';
import './App.css'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import GradeIcon from '@material-ui/icons/Grade';
import SendIcon from '@material-ui/icons/Send';
import data from './data';
import './notification.wav';
import logo1 from './logo1.png';
import axios from 'axios'
import cors from 'cors'

function Card() {
    //
    console.log(window.location)

    var person = "", url = "users/", count = 0
    var r=window.location.href.split("/")
    const id=r[r.length-1]

    async function get_data(){
        await axios.get(`/users/${id}`).then(res=>{
            if(res.data.res || res.data.logStatus===0){
                window.location=`/` 
            }
            else{

                console.log(res.data.img)
                document.getElementById("logopic").src=`${res.data.img}`
                console.log(document.getElementById("logopic").src)
                document.getElementById("username").innerText=res.data.user
                document.getElementById("complete").style.display=""
            }
        })
        .catch(err=>{
            window.location=`/`
        })

    }
    useEffect(()=>{
        document.getElementById("complete").style.display="none"
        get_data();
    },[document.getElementById("complete")])
    //get_data()

    const [arr, setarr] = useState("")
    var arr1 = "";
    async function fun() {
        console.log(person)
        await axios.post(
            "../users", { "comment": person })
            // .then(function (response) {
            //     //console.log("RESPONSE",response);
            //     if (response) {

            //         console.log(response.data);

            //     } else {
            //         console.log("Sorry, I'm having trouble understanding you, try asking me in an other way")
            //     }
            // })


            .then(res => {
                console.log(res.data[0])
                arr1 = res.data[0]
                //console.log(arr1)
                // alert("comment inserted with ",arr1)
            })




    }
    function set() {
        // console.log(document.getElementById("comment_box").innerHTML)
        let newc = document.createElement("DIV")
        newc.classList.add("message_right")
        let newp = document.createElement("P")
        newp.innerHTML = person
        newc.appendChild(newp)

        document.getElementById("comment_box").appendChild(newc)
        let e=document.getElementById("comment_box")
        e.scrollTop = e.scrollHeight - e.getBoundingClientRect().height;
        
    }


    function completed() {

        let name = document.getElementById("text_area").value
        document.getElementById("text_area").value = ""

        person = name
        let cs = name.match("^[ \t\n]*$")

        if (cs === null) {


            url = "users/" + escape(person)
            // console.log(url)
            //count+=1



            fun()
            set()

        }



    }
    function press(e) {
        if (e.keyCode === 13) {
            document.getElementById("text_area").value = document.getElementById("text_area").value.slice(0, -1)
            completed()
        }
    }
    async function gohome(){
        
            await axios.get(`/login/out/${id}`).then(res=>{
                if(res.data.res===1){
                    window.location="/"
                }
            })
            .catch(err=>{
                
            })
    
        

        //
    }


    function toggle(event) {

        const ele = event.target;
        console.log(ele);

        if (ele !== undefined) {
            ele.style.backgroundColor = (ele.style.backgroundColor === "") ? "blue" : "";
        }
    }
    return (
        <>

            <div className="complete" id="complete">
                <div className="nav">
                    <div className="logo1">
                    <h3 id="username" style={{position:"absolute",left:"50%",transform:"translateX(-50%)",borderBottom:"2px dashed solid blue"}}>user</h3>
                    
                    </div>
                    
                    <div className="button_group">
                    <img id="logopic" style={{height:"40px",width:"40px",borderRadius:"50%"}} src="" alt="logo" />
                        <button style={{ padding: "5px", width: "fit-content" }} onClick={toggle} id="comedy">Comedy</button>
                        <button style={{ padding: "5px", width: "fit-content" }} onClick={toggle} >Action</button>
                        <button style={{ padding: "5px", width: "fit-content" }} onClick={toggle} >Romance</button>
                        <button style={{ padding: "5px", width: "fit-content" }} onClick={toggle} >Horror</button>
                        <button style={{ padding: "5px", width: "fit-content" }} onClick={toggle} >Family</button>
                        <button style={{backgroundColor:"red",borderRadius:"10px",padding:"5px",width:"fit-content"}} onClick={gohome} >LogOut</button>
                    </div>
                </div>

                <div className="main1">
                    <div className="main">
                        <div className="container">
                            <div className="image_container">

                                <img style={{ width: "100%", height: "100%", borderRadius: "8%", boxShadow: "0 0 15px white" }} src="https://wallpapercave.com/wp/A9UHCmu.jpg" alt="undefined" />
                                <div className="percentage">
                                    <div className="text_box">{Math.floor(Math.random() * 100)}%<ThumbUpAltIcon /></div>
                                </div>
                                <div className="option">
                                    <ThumbUpAltIcon className="option_like" style={{ fontSize: "55" }} />
                                    <ThumbDownIcon className="option_dislike" style={{ fontSize: "55" }} />

                                </div>
                            </div>
                            <div className="story_container">
                                <strong className="story_title">Movie Name</strong>
                                <div className="story">
                                    {/* <div className="rating"><p style={{ paddingTop: "0" }}>Rating: </p><GradeIcon /><GradeIcon /><GradeIcon /><GradeIcon /><GradeIcon /></div> */}
                                    <div className="overview">
                                        <p>After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.</p>
                                        
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div><strong style={{ background: "black", color: "white", borderRadius: "10%" }}>WATCHLIST</strong></div>
                        <div className="watchlist">

                            {
                                data.map(d => (
                                    <div className="overview_img">
                                        
                                        <img className="img" src={d.imgsrc} alt="" />
                                        <div className="percentage">
                                            <div className="text_box">{Math.floor(Math.random() * 100)}%<ThumbUpAltIcon /></div>
                                        </div>
                                    </div>

                                ))
                            }

                        </div>
                    </div>
                    <div className="comment">
                        <div className="comment_box" id="comment_box">
                            <div className="message_left">
                                <p>who are you?</p>
                                {/* <div className="user_icon"></div> */}
                            </div>
                            <div className="message_right">
                                {/* <div className="user_icon"></div> */}
                                <p>I am Alexander Flammasdddddddddddddddddddddddddddddddddddddddddd asd as das d asdasd asdsa ing.</p>
                            </div>
                        </div>
                        <div className="write_comment">
                            <textarea className="text_area" name="comment" id="text_area" onKeyUp={press} cols="30" rows="10"></textarea>
                            <div className="send_comment"><button style={{ height: "100%", width: "100%" }} onClick={completed}><SendIcon /></button></div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}
export default Card