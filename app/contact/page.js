'use client'
import React, { useState } from "react";
import style from "../contact/contact.module.css";
import { FaUser, FaPhone, FaEnvelope, FaCommentDots } from "react-icons/fa";
import { useRouter } from "next/navigation";
export const metadata = {
  title: "contact"
}
function Contact() {
  const [text , setText] = useState("")
  //for name
  const [name, setName] = useState("");
  const onChangeName = ($event) => {
    setName($event.target.value);
  };
  /////////////////////////////////
  //for number
  const [number, setNumber] = useState("");
  const onChangeNumber = ($event) => {
    setNumber($event.target.value);
  };
  //////////////////////////////////
  //for mail
  const [email, setEmail] = useState("");
  const onChangeEmail = ($event) => {
    setEmail($event.target.value);
  };
  //////////////////////////////////
  //for message
  const [message, setMessage] = useState("");
  const onChangeMessage = ($event) => {
    setMessage($event.target.value);
  };
  //////////////////////////////
  // for button 
  const onClick = () => {
    if (name && number.length >9 && email && message){
      setText("Your message has been sent successfully")
      setTimeout(()=>{
            router.push("/")
      },2000)
    }else{
      setText(<p style={{color:"red"}}>meassage failed</p>)
    }
    // console.log(number, name, message, email);
  }
  const router = useRouter();
  return (
    <div style={{marginTop:"150px"}}>
      <div className={style.container}>
        <div className={style.conatact}>
          <div className={style.inputside}>
            <h1>Contact Us</h1>
            <div className={style.input_area}>
              <FaUser />
              <input
                className={style.input}
                type="text"
                placeholder="Name"
                onChange={onChangeName}
                required

              />
            </div>

            <div className={style.input_area}>
              <FaPhone />
              <input
                className={style.input}
                type="number"
                placeholder="Number"
                onChange={onChangeNumber}
                required
              />
            </div>

            <div className={style.input_area}>
              <FaEnvelope />
              <input
                className={style.input}
                type="email"
                placeholder="Email"
                onChange={onChangeEmail}
                required
              />
            </div>

            <div className={style.input_area}>
              <FaCommentDots />
              <input
                className={style.input_msg}
                type="text"
                placeholder="Message"
                onChange={onChangeMessage}
                required
              />
            </div>
            <button onClick={onClick} className={style.button}>
              Send meassage
            </button>
            <h6 style={{color:"green",paddingTop:"10px"}}>{text}</h6>
          </div>
        </div>
        {/* <div className={style.image_part}>
          
        </div> */}
      </div>
    </div>
  );
}

export default Contact;
