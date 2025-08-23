const con = document.getElementById('container')
const arr=[".asserts/images.jpeg",
    "https://www.tinyminymo.com/cdn/shop/files/Wall-E-3D-Keychain-3_360x.png?v=1741538602",
    "https://www.tinyminymo.com/cdn/shop/files/Plush-Shin-chan-3D-Keychain-7_360x.png?v=1742553966",
    "https://www.tinyminymo.com/cdn/shop/files/Kuromi-Calculator-Keychain-6_180x.jpg?v=1741538085",

]
const img = document.getElementsByClassName('img');
console.log(img);

let i=0;
let next=()=>{
    img[i].classList.remove('active');
    i++;

    if(i==arr.length)
    {
        i=0;
    }
    img[i].classList.add('active');
    

    con.style.backgroundImage=`url('${arr[i]}')`;
}


let prev=()=>{
    i--;//i=-1
    if(i==-1)
    {
        i=4;
    }
    con.style.backgroundImage=`url('${arr[i]}')`;
    
}
let change=(a)=>{
    con.style.backgroundImage=`url('${arr[a]}')`;
}


setInterval(()=>{
  next();
},2000)
    // let i=1;
    // let changeimg=()=>{
    //     if(i==5)
    //     {
    //         i=0;
    //     }
    //     con.style.backgroundImage='url(${arr[i]})';
    //     i++;
    // }