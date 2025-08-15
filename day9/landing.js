const con= document.getElementById('container');
const arr=["./assest/Naruto\ Quotes\ Wallpaper.jpg",
    "./assest/35.jpg.webp",
    "./assest/26.jpg",
    "./assest/bat.jpg",
    
    /* "./assest/27.jpg", */

]

let i=1;
let next=()=>{
    if(i==arr.length)
    {
        i=0;
    }
    con.style.backgroundImage=`url('${arr[i]}')`;
    i++;
}

let i=1;
let prev=()=>{
    
    if(i==5)
    {
        i=0;
    }
    con.style.backgroundImage=`url('${arr[i]}')`;
    i++;
}


/* let changeimg=()=>{
    con.style.backgroundImage ="url('./assest/26.jpg')";
} */