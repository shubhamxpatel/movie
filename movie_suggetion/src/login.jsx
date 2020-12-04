/* eslint-disable no-unused-vars */
import React from 'react'
import './login.css'
import 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import Card from './Card'
import { useEffect } from 'react'
function Login() {
    const defaulturl = "data:image/jpeg;base64,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"

    function validate_email(email) {
        var mailformat = "^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$";
        if (email.match(mailformat)) {
            return true;
        }
        else {
            console.log("validation failed email")
            return false;
        }

    }
    function validate_pass(pass) {
        var passw = " /^[A-Za-z]\w{7,14}$/";
        if (pass.match(passw)) {
            return true;
        }
        else {
            console.log("validation failed pass")
            return false;
        }
    }
    var files = null;
    async function register() {
        let email = document.getElementById("exampleInputEmail2").value
        let pass = document.getElementById("exampleInputPassword2").value

        if (email && pass && files) {
            console.log(email, pass, files)
            const formData = new FormData();
            formData.append('image', files)
            formData.append('email', email)
            formData.append('pass', pass)
            console.log(formData)
            //await axios.post("/register",{"email":email,"pass":pass,"img":files})
            await axios.post("/register", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                onUploadProgress:ProgressEvent=>{
                    console.log("uploading: "+parseInt(Math.round((ProgressEvent.loaded*100)/ProgressEvent.total)))
                }
            })

                .then(res => {
                    console.log(res.data.res)
                    if (res.data["res"] === "Registration Successful!") {
                        let imgurl = res.data.imgurl
                        document.getElementById("imgu").src = imgurl
                        setTimeout(() => {
                            console.log("time up")
                            document.getElementById("imgu").src = defaulturl
                            document.getElementById("exampleInputEmail2").value = ""
                            document.getElementById("exampleInputPassword2").value = ""
                            document.getElementById("regform").scrollTop = 0
                        }, 30000);


                    }

                })
                .catch(err => console.log(err))
        }
        else {
            console.log("validation of email and password failed")
        }
    }
    async function login() {
        let email = document.getElementById("exampleInputEmail1").value
        let pass = document.getElementById("exampleInputPassword1").value
        console.log(email, pass)
        if (email && pass) {


            await axios.post("/login/in", { "email": email, "pass": pass })
                .then(res => {
                    console.log(res.data)
                    console.log(res.data.res)
                    if (res.data["res"] === "login successful") {
                        document.getElementById("exampleInputEmail1").value = ""
                        document.getElementById("exampleInputPassword1").value = ""
                        window.location = "/user/" + res.data.id

                    }
                })
                .catch(err => console.log(err))
        }
        else {
            console.log("validation of email and password failed")
        }

    }
    function upload(e) {
        files = e.target.files[0]
        console.log(files)

    }
    return (
        <>
            <div className="logform">
                <div className="regform" id="regform">
                    <div className="login">
                        <h5 className="rep">Login</h5>
                        <br />
                        <div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                <small id="passHelp" className="form-text text-muted">password between 7 to 16 characters which contain only characters, numeric digits and underscore and first character must be a letter.</small>
                            </div>

                            <button className="btn btn-primary" id="login" onClick={login}>Submit</button>
                        </div>
                    </div>
                    <div>

                    </div>
                    <div className="reg" id="reg">
                        <h5 className="rep">Register</h5>
                        <br />
                        <div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter email" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" />
                                <small id="passHelp" className="form-text text-muted">password between 7 to 16 characters which contain only characters, numeric digits and underscore and first character must be a letter.</small>
                            </div>
                            <div className="form-group">
                                <label for="Image">Upload Your Image</label>
                                <input type="file" name="image" id="image" className="form-control overflow-auto" onChange={upload} />
                            </div>
                            <button className="btn btn-primary" id="register" onClick={register}>Submit</button>



                        </div>
                        <div className="upimg" id="upimg">
                            <img src={defaulturl} alt="" style={{ position:"absolute", height: "100%" }} id="imgu" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login