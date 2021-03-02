import {NotificationManager} from 'react-notifications';
import React from 'react';




export const submit = (values,props) => {

    const {email,content}=values;

    sendEmail({email,content});
    
    props.Hide();

}

export const validation = (values) => {
  
    const errors={}
    if(!values.email){
        errors.email="Pole wymagane!"
    }

    if(!validateEmail(values.email)){
        errors.email="Prosze o podanie email!"
    }

    if(!values.content){
        errors.content="Pole wymagane!"
    }

    return errors;
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const sendEmail=({email="",content=""}={})=>{
    console.log("Data:",JSON.stringify({email,content}))
    fetch(`http://${process.env.REACT_APP_API_URL}/sendMail`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({email,content})
    }).then(()=>{
        console.log("Wysłano!")
        NotificationManager.success("Pomyślnie wysłano","Wysłano");
    }).catch((err)=>{
        console.error("Error:",err);
        NotificationManager.error("Wysyłanie nie powiodło się","Błąd");
    })
}