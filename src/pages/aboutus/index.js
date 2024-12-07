import { createNavBar, createFooter, createEl} from '../../utils/utils.js';

const imgRight= document.getElementsByClassName("move-slider-img")[1].addEventListener("click", () => {moveToSlider('right')})
const imgLeft= document.getElementsByClassName("move-slider-img")[0].addEventListener("click", () => {moveToSlider('left')})
const imgRightM=document.getElementsByClassName("move-slider-img-m")[1].addEventListener("click", () => {moveToSliderMobile('right')})
const imgLefttM=document.getElementsByClassName("move-slider-img-m")[0].addEventListener("click", () => {moveToSliderMobile('left')})


createNavBar();
createFooter();



let numbers=new Array();

numbers=[
    {
        number:100,
        attribute:'K+'

    },
    {
        number:30,
        attribute:"+"

    },
    {
        number:50,
        attribute:"+"

    },
    {
        number:5,
        attribute:" "

    }

]

function counterUp(element, maxValue,attribute) {

    let count = 0;
  
    const interval = setInterval(() => {
        if (count <= maxValue) {
            element.innerHTML = count+attribute;
            count++;
        } 
    }, 50);

  }


function startCouner(){

    const all=document.getElementsByClassName("counter-heading");

    for(let i=0;i<all.length;i++){
        let el=all[i];
        counterUp(el,numbers[i].number,numbers[i].attribute)
    }
}


let counterStarted = false;

function isInViewport(element) {
  
    var rect = element.getBoundingClientRect();
    var html = document.documentElement;
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || html.clientHeight) &&
      rect.right <= (window.innerWidth || html.clientWidth)
    );
  }

const counterContainer=document.getElementsByClassName("counters")[0];

window.addEventListener("scroll", ()=>{
   
    if(isInViewport(counterContainer)  &&   !counterStarted){
        counterStarted=true
        startCouner();
    }
})


const teamMembers = [
    {
      img: "/public/photos/people/ana_lazic.png",
      name: "Ana Lazic",
      position: "Software Engineer",
      linkedin: "https://www.linkedin.com/in/johndoe"
    },
    {
      img: "/public/photos/people/jane.png",
      name: "Jane Smith",
      position: "Product Manager",
      linkedin: "https://www.linkedin.com/in/janesmith"
    },
    {
      img: "/public/photos/people/michael.jpg",
      name: "Michael Johnson",
      position: "UI/UX Designer",
      linkedin: "https://www.linkedin.com/in/michaeljohnson"
    },
    {
      img: "/public/photos/people/emily.jpg",
      name: "Emily Davis",
      position: "Backend Developer",
      linkedin: "https://www.linkedin.com/in/emilydavis"
    },
    {
      img: "/public/photos/people/brown.jpg",
      name: "David Brown",
      position: "Data Scientist",
      linkedin: "https://www.linkedin.com/in/davidbrown"
    },
    {
      img: "/public/photos/people/wilson.jpg",
      name: "Sarah Wilson",
      position: "Frontend Developer",
      linkedin: "https://www.linkedin.com/in/sarahwilson"
    },
    {
      img: "/public/photos/people/lee.jpg",
      name: "Chris Lee",
      position: "Marketing Specialist",
      linkedin: "https://www.linkedin.com/in/chrislee"
    },
    {
      img: "/public/photos/people/jessica.jpg",
      name: "Jessica Martinez",
      position: "Project Coordinator",
      linkedin: "https://www.linkedin.com/in/jessicamartinez"
    },
    {
      img: "/public/photos/people/daniela.jpg",
      name: "Daniela Anderson",
      position: "Quality Assurance",
      linkedin: "https://www.linkedin.com/in/danielanderson"
    }
  ];

  

let rightIndex=3
let leftIndex=teamMembers.length-1
let persons=[]


 function moveToSlider(direction){

  if(direction=='right'){
  
    for(let i=0;i<3;i++){
      if(rightIndex>teamMembers.length-1){
        rightIndex=0;
      }

      persons.push(teamMembers[rightIndex]);
      rightIndex++;

    }

    setMembers(persons);
    persons=[];
    leftIndex=rightIndex-4;

  }

  else {
    
    for(let i=0;i<3;i++){

      if(leftIndex<0){
        leftIndex=teamMembers.length-1;
      }

      persons.push(teamMembers[leftIndex]);
      leftIndex--;
    }
    
    rightIndex=leftIndex+4;
    let reversedArray=persons.reverse();
    setMembers(reversedArray);
    persons=[];
  }

}

 let startAtPhone=1;
 let endAtPhone=8;

function moveToSliderMobile(direction){

  if(direction=="right"){

    if(startAtPhone>teamMembers.length-1){

      startAtPhone=0;

    }

    setUpMobile(startAtPhone);
    startAtPhone++;
    endAtPhone=startAtPhone-2;
  }

  else{

    if(endAtPhone<0){
      endAtPhone=8
    }

    setUpMobile(endAtPhone)
    endAtPhone--
    startAtPhone=endAtPhone+2
    
  }
  
  

  
}

function setUpMobile(index){

  let sliderImage = document.querySelectorAll(".person-image-mobile");
  let sliderLinkedin = document.querySelectorAll(".linkedin-profile-mobile");
  let sliderName = document.querySelectorAll(".name-mobile");
  let sliderPosition = document.querySelectorAll(".position-mobile");

  sliderImage[0].src=teamMembers[index].img
  sliderName[0].innerHTML=teamMembers[index].name
  sliderPosition[0].innerHTML=teamMembers[index].position
  
}







function setMembers(persons){
    
    let sliderImage = document.querySelectorAll(".person-image");
    let sliderLinkedin = document.querySelectorAll(".linkedin-profile");
    let sliderName = document.querySelectorAll(".name");
    let sliderPosition = document.querySelectorAll(".position");

    console.log(sliderImage)
    
    
    
    for(let i=0;i<persons.length;i++){

        sliderImage[i].src=persons[i].img
        sliderName[i].innerHTML=persons[i].name
        sliderPosition[i].innerHTML=persons[i].position

    }
    

    
    

    

}

