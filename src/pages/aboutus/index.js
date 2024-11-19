
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
    //let ele = document.getElementById(elementSelector);
    let count = 0;
  
    const interval = setInterval(() => {
        if (count <= maxValue) {
            element.innerHTML = count+attribute;
            count++;
        } else {
            clearInterval(interval);
        }
    }, 50);
  }


function startCouner(){
    const all=document.getElementsByClassName("counter-heading")
    for(let i=0;i<all.length;i++){
        el=all[i];
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

counterContainer=document.getElementsByClassName("counters")[0];
window.addEventListener("scroll", ()=>{
    if(isInViewport(counterContainer) &&   !counterStarted){
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
      img: "/public/photos/people/michael.png",
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

  n=3
  perosnas=[]
  function moveToRight() {
    // Clear `perosnas` once at the start
    perosnas.length = 0;

    // Get the next 3 members
    for (let i = 0; i < 3; i++) {
        
        if (n === teamMembers.length) {
            n = 0;
        }

        
        perosnas.push(teamMembers[n]);
        n++;
    }

    // Log to verify the current set of members
    console.log(perosnas);
    setMembers(perosnas)
}

p=teamMembers.length-3
arrLeft=[]

if(n!=3 ){
    p=n-6
 }

function moveToLeft(){

    arrLeft=[] 

    if(p<0){
        p=6
    }
    
   

    
    for (let i = 0; i < 3; i++) {
        arrLeft.push(teamMembers[p]);
        console.log(p)
        p++;
    }

    
    p-=6

    

    setMembers(arrLeft)
    

}




function setMembers(persons){
    console.log(persons)
    //const sliderContainer = document.querySelectorAll(".slider-item");
    const sliderImage = document.querySelectorAll(".person-image");
    const sliderLinkedin = document.querySelectorAll(".linkedin-profile");
    const sliderName = document.querySelectorAll(".name");
    const sliderPosition = document.querySelectorAll(".position");

    
    for(i=0;i<persons.length;i++){

        sliderImage[i].src=persons[i].img
        sliderName[i].innerHTML=persons[i].name
        sliderPosition[i].innerHTML=persons[i].position

    }
    

    
    

    

}








//console.log(isInViewport(counterContainer))