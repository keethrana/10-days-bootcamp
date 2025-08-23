const con= document.getElementById('container');
const arr=["https://imageio.forbes.com/specials-images/imageserve/67359a8c6331660e9efb8bac/0x0.jpg?format=jpg&crop=1920,1080,x0,y0,safe&height=600&width=1200&fit=bounds",
    "",
    "https://static.toiimg.com/thumb/msid-117249524,width-1070,height-580,imgsize-77990,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    "https://www.hollywoodreporter.com/wp-content/uploads/2025/02/The-Ba___ds-of-Bollywood_Netflix_857616_v001.0001.jpg?w=1296&h=730&crop=1",
    
    /* "./assest/27.jpg", */

]

let i = 1;
let next= () => {
    if(i == arr.length)
    {
        i = 0;
    }
    con.style.backgroundImage=`url('${arr[i]}')`;
    i++;
}


let prev = ()=> {
    
    if(i == 0)
    {
        i = arr.length - 1;
    } else {
        i--;
    }
    con.style.backgroundImage=`url('${arr[i]}')`;
}


/* let changeimg=()=>{
    con.style.backgroundImage ="url('./assest/26.jpg')";
} */