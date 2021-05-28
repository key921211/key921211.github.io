let typingBool = false; 
let typingIdx = 0; 
let text = document.querySelector(".text").textContent; 
let tyInt = 0;
text = text.split(""); // 한글자씩 자른다. 

if (typingBool == false){ // 타이핑이 진행되지 않았다면 
   
    typingBool = true; 
    
    tyInt = setInterval(typing, 250); // 반복동작 
 } 
    
 function typing() {

   if( typingIdx < text.length){ // 타이핑될 텍스트 길이만큼 반복 

    document.querySelector(".typing-text").append(text[typingIdx]); // 한글자씩 이어준다. 
    typingIdx++; 

   } else{
    typingIdx = 0;
    document.querySelector(".typing-text").innerText = "";
    //clearInterval(tyInt); //끝나면 반복종료 
   } 
 }  