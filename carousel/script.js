const imgs = document.querySelectorAll(".img-container img");
const rightBtn = document.querySelector(".right");
const leftBtn = document.querySelector(".left");
const wrap = document.querySelector(".img-container");

let idx = 0;

function show(){
  if(idx >= imgs.length) idx = 0;
  if(idx < 0) idx = imgs.length - 1;
  wrap.style.transform = `translateX(-${idx * 100}%)`;
}

rightBtn.addEventListener("click",() => {
  idx++;
  show();
})

leftBtn.addEventListener("click",() => {
  idx--;
  show();
})

setInterval(() => {
  idx++;
  show();
}, 3000);

show()


