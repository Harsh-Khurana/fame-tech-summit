const slider = document.querySelector("#speaker-slider");
const speakerCards = document.querySelectorAll(".speaker-card");

const images = ["speaker-1.jpg","speaker-2.jpg","speaker-3.jpg","speaker-4.jpg","speaker-5.jpg","speaker-6.jpg","speaker-7.jpg","speaker-8.jpg"];

let i=0;

// Logic that handles hovers over the speakers instead of applying a single eventHandler for every other card
for(let i=0;i<speakerCards.length;i++){
	speakerCards[i].addEventListener("mouseover",(event)=>{
		if(event.target!==event.currentTarget){
			event.target.nextElementSibling.classList.add("speaker-info-other");
		}
	})
	speakerCards[i].addEventListener("mouseout",(event)=>{
		if(event.target!==event.currentTarget){
			event.target.nextElementSibling.classList.remove("speaker-info-other");
		}
	})
}