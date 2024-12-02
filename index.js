let input=document.getElementById('inputBox');
let buttons=document.querySelectorAll('button');
 let string=" ";
 let arr=Array.from(buttons);
 arr.forEach(button=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML=='='){
          if(string.length<=1){
            return;
          }
            else{
            string=eval(string);
            input.value=string;
            }
            
        }
        else if(e.target.innerHTML=='AC'){
            string=" ";
            input.value=string;
        }
        else if(e.target.innerHTML=='DEL'){
            string=string.substring(0, string.length-1);
            input.value=string;
        }
        else{
        string+=e.target.innerHTML;
        input.value=string;
       
        }
    })
 })


//  js for toggle button

let toggle=document.getElementById('toggle');
const body=document.querySelector('.wrapper');
const containerr=document.querySelector('.container');
const btnn=document.querySelectorAll('button');
toggle.addEventListener('click' , (e)=>{
  containerr.classList.toggle('.darkk');
});

toggle.addEventListener('click' , (e)=>{
     toggle.classList.toggle('active');
     body.classList.toggle('dark');
     
    });


