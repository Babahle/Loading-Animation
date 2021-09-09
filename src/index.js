import { gsap } from "gsap";

let tl = gsap.timeline({ duration: 1 });

function load() {
  tl.from("main", {opacity: 0})
  tl.to("main", {background: "rgb(230, 190, 50)"})
  tl.to('h1', {color: "black"})
}

function bar_load(){
  tl.to(".bars-container", {opacity: 1})
  tl.fromTo("#one", {opacity: 0, y: "-100%"}, {opacity: 1, y: 0})
  tl.fromTo("#two", {opacity: 0, y: "100%"}, {opacity: 1, y: 0})
  tl.fromTo("#three", {opacity: 0, y: "-100%"}, {opacity: 1, y: 0})
  tl.fromTo("#four", {opacity: 0, y: "100%"}, {opacity: 1, y: 0})
  tl.to(".bars-container", {opacity: 0})
}

window.addEventListener('load', () => {
  bar_load()
  load()
})