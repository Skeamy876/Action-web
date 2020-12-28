 var time = new Date();
 var h= time.getHours();
 var greet;

 if(h< 12){ 
     greet="Good Morning";
}
else if(h>=12 && h<=17){
    greet="Good Afternoon";
}
else if(h>=17 && h<=24){
    greet="Good Evening";
}

document.getElementById("greeting").innerHTML=greet  + ", My East Portland Family!"