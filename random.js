function colorfill()
{
    let r=Math.floor(Math.random()*255+1);
    let g=Math.floor(Math.random()*255+1);
    let b=Math.floor(Math.random()*255+1);
    document.body.style.backgroundColor=`rgb(${r},${g},${b})`;
    const h1=document.querySelector('#color_code');
    h1.innerText=`rgb(${r},${g},${b})`;
}
const bton=document.querySelector('#btn');
bton.addEventListener('click',colorfill);