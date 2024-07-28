const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

      // console.log(buttons); `

//       buttons.forEach((i) => {
//           body.style.backgroundColor = i.target.id;
//       });

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function e() {
    const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
}
function f(button) {
      body.style.backgroundColor = button.target.id;
}

buttons.forEach(function (button){
      console.log(button);
      button.addEventListener('click',(i)=>{
            body.style.backgroundColor = i.target.id;
            
      });
});