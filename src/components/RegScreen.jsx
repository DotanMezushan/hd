import React from 'react';
import '../styles/regform.css';
const RegScreen = () => {
    function nameIsValid(name){
        var letters = /^[A-Za-z]+$/;   // checks if all lettres ...
       if(name.length > 3 && name.match(letters))
      {
          return true;
      }
      else {
          return false;
      }
       
    }
    function phoneValid(phone){
        var phnum = /^\(?([0-9]{3})\)?[-]?([0-9]{7})$/;
        if(phone.match(phnum))
        {
            return true;
        }
        return false;
    }
    function mailVaild(mail){
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(mail.match(mailformat))
        {
            return true;
        }
        return false;
    }
    function passValid(pass,retype){
        if(pass === retype && pass.length > 7)
        return true;
        return false;
    }
    const mySubmitHandler = (event) => {
        event.preventDefault();
        let name = document.getElementById('name').value;
        let phone = document.getElementById('phone').value;
        let email = document.getElementById('email').value;
        let pass = document.getElementById('passval').value;
        let conf = document.getElementById('conval').value;
        if(nameIsValid(name)&&phoneValid(phone)&&mailVaild(email)&&passValid(pass,conf))
        {
            alert("Check your email for login link");
        }
        else{
            alert(nameIsValid(name)+" "+phoneValid(phone)+" "+mailVaild(email)+" "+passValid(pass,conf));
        }
       
      }
    return (
        <div>
             <h1 id="downlogo">IU</h1>
            <h1>Wellcome to IcomUnity</h1>
            
            <div className="regForm">
            <form onSubmit={mySubmitHandler}>
               
                <input type="text" id="name" placeholder="Name"></input>
                <br />
                <br />
               
                <input type="text" id="phone" placeholder="Phone Number"></input>
                <br />
                <br />
               
                <input type="text" id="email" placeholder="Email"></input>
                <br />
                <br />
               
                <input type="password" id="passval" placeholder="Password"></input>
                <br />
                <br />

                <input type="password" id="conval" placeholder="Retype Password"></input>
                <br />
                <br />
                <input type="submit" id="sub"></input>
               
                <input type="reset" id="res" />
            </form>
         
            </div>
            
           
        </div>
    );
}
export default RegScreen;