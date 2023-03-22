// setInterval(()=>{
//     move()
//   },100000)
//   let direction;
//   let arr = Array.from(document.getElementsByClassName("elements"));
//   let slider = document.querySelector(".slider")
//   let ele = document.querySelector("body>div");
//   function move2() {
//     if (direction == -1) {
//       direction = 1;
//       slider.appendChild(slider.firstElementChild);
//     }

//     ele.style.justifyContent = "flex-end";
//     slider.style.transform = "translate(25%)"
//   }
//   function move() {
//     ele.style.justifyContent = "flex-start"
//     direction = -1;
//     slider.style.transform = "translate(-25%)"
//   }
//   slider.addEventListener("transitionend", () => {
//     if (direction == -1) {
//       slider.appendChild(slider.firstElementChild);
//     }
//     else {
//       slider.prepend(slider.lastElementChild)
//     }
//     slider.style.transition = "none"
//     slider.style.transform = "translate(0%)"
//     setTimeout(() => {
//       slider.style.transition = ".5s"
//     }, 1)
//   })


//   console.log(arr);

