let hexArr = ['0', '1', '2', '3', '4', '5','6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
let btn1 =  document.querySelector('.btn1');
let colorShow =  document.querySelector('.color-show');
let input1 = document.querySelector('.input1');
input1.value="#";
const randomHex = ()=>{
    let hexNum = "#";
    for (let i=0; i<6;i++) {
        let randomNum = Math.round(Math.random()*15);
        hexNum += hexArr[randomNum];
    }
    return hexNum;
}

btn1.addEventListener('click',()=>{
    let randomColor = randomHex();
    colorShow.style.backgroundColor = randomColor;
    input1.value = randomColor;
    
})


let value = ["#"];
input1.addEventListener('keypress',(e)=>{
   if(e.target.value.length> 6){
    e.preventDefault();
   }
    
})
input1.addEventListener('keyup',(e)=>{
    colorShow.style.backgroundColor =  e.target.value;
    if(e.target.value.length> 6){
        e.preventDefault();
       }
    if( e.keyCode == 8){
        value.pop();
    }
    if(value.length == 0){
        value.push('#');
    }
    if(hexArr.includes(e.key.toUpperCase()) && value.length < 7){
        value.push( e.key);
   }else{
    e.target.value = value.join("");
   }
})





