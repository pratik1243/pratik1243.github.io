



function toogle(){ 
    
let menu=document.getElementById("menu");
let mytags=document.getElementById("mytags");

if(menu.style.height == "0rem" ){
menu.style.height="23rem";
mytags.style.opacity="1";
mytags.style.display="block";
}

else{  
    menu.style.height="0rem";
    mytags.style.display="none";
    mytags.style.opacity="0.2";   
    }

}


function show(){
let signin=document.getElementsByClassName("sign-in")[0];
let navbar=document.getElementById("navbar");
let menu=document.getElementById("menu");
let content=document.getElementById("content");
let overflo=document.getElementById("overflo");
signin.style.display="block";
signin.classList.add("slideup");
navbar.style.opacity="0.2";
menu.style.opacity="0.2";
content.style.opacity="0.2"
overflo.style.overflowY="hidden";
}


function hide(){
let signin1=document.getElementsByClassName("sign-in")[0]; 
let navbar=document.getElementById("navbar");
let menu=document.getElementById("menu");
let content=document.getElementById("content");
let overflo=document.getElementById("overflo");
signin1.style.display="none";
document.getElementById("error1").innerHTML="";
document.getElementById("error2").innerHTML="";
document.getElementById("error3").innerHTML="";
navbar.style.opacity="1";
menu.style.opacity="1";
content.style.opacity="1";
overflo.style.overflowY="visible";
signin1.classList.remove("slideup");


}


function validation(){

let input1=document.getElementById("input1").value;
let input2=document.getElementById("input2").value;
let input3=document.getElementById("input3").value;

let error2=document.getElementById("error2");
let error1=document.getElementById("error1");
let error3=document.getElementById("error3");

if(input1 == ""){
error1.innerHTML="Something is missing here!"+"</br>"+" Don't forget to enter your username." +"</br>";
error1.style.color="red";
error1.style.fontFamily="sans-serif";
error1.style.fontSize=".9rem";
}

else{

    if(!isNaN(input1)){
        error1.innerHTML="username should contain alphabets!" +"</br>";
        error1.style.color="red";
        error1.style.fontFamily="sans-serif";
        error1.style.fontSize=".9rem";
        }
    else{
    error1.innerHTML="";   
        }


}

if( input2 == ""){
    error2.innerHTML="Something is missing here!"+"</br>"+" Don't forget to enter your password." +"</br>";
    error2.style.color="red";
    error2.style.fontFamily="sans-serif";
    error2.style.fontSize=".9rem";
 }
 else{

    if( input2.length > 10){
        error2.innerHTML="password should contain"+"</br>"+"less than 10 characters" +"</br>";
        error2.style.color="red";
        error2.style.fontFamily="sans-serif";
        error2.style.fontSize=".9rem";
     }
else{
    error2.innerHTML="";   
}




}
    

 if( input3 == "" ){
    error3.innerHTML="Something is missing here!"+"</br>"+" Don't forget to enter your email." +"</br>";
    error3.style.color="red";
    error3.style.fontFamily="sans-serif";
    error3.style.fontSize=".9rem";
} 
 
else{

    if(!input3.includes("@")){
    error3.innerHTML="email should contain '@'";
    error3.style.color="red";
    error3.style.fontFamily="sans-serif";
    error3.style.fontSize=".9rem";
    }
else{
error3.innerHTML="";
}

}

}





