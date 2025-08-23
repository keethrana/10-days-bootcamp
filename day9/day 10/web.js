const con = document.getElementById('container')
const arr=["https://www.tinyminymo.com/cdn/shop/files/Wall-E-3D-Keychain-3_360x.png?v=1741538602",
    "https://www.tinyminymo.com/cdn/shop/files/Plush-Shin-chan-3D-Keychain-7_360x.png?v=1742553966",
    "https://www.tinyminymo.com/cdn/shop/files/Kuromi-Calculator-Keychain-6_180x.jpg?v=1741538085",

]
    let i=1;
    let changeimg=()=>{
        if(i==5)
        {
            i=0;
        }
        con.style.backgroundImage=url('${arr[i]}');
        i++;
    }