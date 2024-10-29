
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
    if(isInViewport(counterContainer)){
        startCouner();
    }
})














//console.log(isInViewport(counterContainer))