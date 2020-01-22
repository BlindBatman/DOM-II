// Your code goes here
let link = document.getElementsByTagName('a');
console.log(link);
Array.from(link).forEach(element => {
    element.addEventListener("mouseenter",(event) => {
        event.target.style.color = "blue";
      });
      element.addEventListener("mouseleave",(event) => {
        event.target.style.color = "black";
      });
      element.addEventListener("click", event =>{
          event.preventDefault();
      })
});

let bus = document.querySelector("img");
console.log(bus);
bus.addEventListener("dblclick",(event)=>{
    
    event.target.src = "img/rickrolled.jpg";
});

bus.addEventListener("click",(event)=>{
    
    event.target.src = "img/fun-bus.jpg";
});

let pTag = document.querySelector("p");
console.log()
pTag.addEventListener("wheel",(event)=>{    
    event.target.textContent = 'well i was shopping for a new car which ones me. A cool convertible or an suv. too bad i didnt know my credit was was and now i driving of the lot in a used sub compact. F-R-E-E that spell free. creditreport.com baby. Saw their ads on my TV, thought about going but was too lazy.Now instead of looking fly and rolling fat. My legs are sticking to the vinyl and my posses getting laughed at! F-R-E-E that spell free. creditreport.com baby!';
});

let imgs = document.getElementsByClassName("img-content");
console.log(imgs);

Array.from(imgs).forEach(element => {
    console.log(element.childNodes)
    element.childNodes[1].addEventListener("dragend",(event) => {
      
        event.target.style.transform = "scale(2)";
        
      });
})

let foot = document.getElementsByTagName("footer");

foot[0].addEventListener('copy', event => {
    event.target.style.color = 'green';
    console.log("ahh");
});

let btn = document.getElementsByClassName("btn");

Array.from(btn).forEach(element => {
    element.addEventListener("pointerover",(event) => {
        event.target.textContent = "you chose me";
       console.log("fudge")
    });
    element.addEventListener("pointerleave",(event) => {
        event.target.textContent = "Sign Me Up!";
       console.log("fudge")
    });
})

let body = document.getElementsByTagName("body")[0];
console.log(body)
body.addEventListener('contextmenu', (event) => {
   event.target.style.backgroundColor= "purple";
   
  });

  let header = document.getElementsByTagName("header")[0];
    header.addEventListener('contextmenu', (event) => {
   event.target.style.backgroundColor= "blue";
   event.stopPropagation();
  });

