let display=document.querySelector('.third');
let first=document.querySelector('.first');
let fourth=document.querySelector('.fourth');
let p1=document.querySelector('.p1');
let p2=document.querySelector('.p2');
let p3=document.querySelector('.p3');
let p4=document.querySelector('.p4');
let p5=document.querySelector('.p5');
let p6=document.querySelector('.p6');
let p7=document.querySelector('.p7');
let p8=document.querySelector('.p8');
let p9=document.querySelector('.p9');
let time= document.querySelector('.time');
let rate=document.querySelector('.rate');

//displaying time
time.addEventListener('click',()=>{
  display.innerHTML=' ';
    let date=new Date();
  let time= date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
 display.innerHTML=time;
 })

 //displaying heart rate
rate.addEventListener('click',()=>{
  display.innerHTML=' '
  let dis=document.createElement('div');
  let random= Math.random()*100 ;
  if(random>=60 && random<=100 ){
    let integer=parseInt(random);
  dis.innerHTML=` <i class="fa-solid fa-heart-pulse"></i>
      <p>${integer}</p>`
 display.appendChild(dis);
  }
  else{
    let integer=parseInt(random);
    let dis1=document.createElement('div');
    dis1.innerHTML=`<i class="fa-solid fa-hospital"></i>
    <p>${integer}</p>`
   display.appendChild(dis1);
   
  }
 
})

//Selecting particular colour
p1.addEventListener('click',()=>{
first.style.backgroundColor='#565681';
fourth.style.backgroundColor='#565681';
 
})

p2.addEventListener('click',()=>{
  first.style.backgroundColor='chocolate';
fourth.style.backgroundColor='chocolate';
})

p3.addEventListener('click',()=>{
  first.style.backgroundColor='#88B04B';
  fourth.style.backgroundColor='#88B04B';
})
p4.addEventListener('click',()=>{
  first.style.backgroundColor='orangered';
  fourth.style.backgroundColor='orangered';
})
p5.addEventListener('click',()=>{
  first.style.backgroundColor='#DD4124';
  fourth.style.backgroundColor='#DD4124';
})
p6.addEventListener('click',()=>{
  first.style.backgroundColor='#F7CAC9';
  fourth.style.backgroundColor='#F7CAC9';
})
p7.addEventListener('click',()=>{
  first.style.backgroundColor='#92A8D1 ';
  fourth.style.backgroundColor='#92A8D1 ';
})
p8.addEventListener('click',()=>{
  first.style.backgroundColor='#FF6F61';
  fourth.style.backgroundColor='#FF6F61';
})
p9.addEventListener('click',()=>{
  first.style.backgroundColor='#34568B';
  fourth.style.backgroundColor='#34568B';
})


