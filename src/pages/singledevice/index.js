async function getData() {
  try {
    const response = await fetch('http://localhost:5050/devices');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}


function createEl(type){
  let element=document.createElement(type);
  return element;
}



async function showItem(){
  const url = window.location.href;
  let urlParams = new URLSearchParams(window.location.search);
  let id = urlParams.get('id');

  // www.my-site.com?id=2&name=test
  // {
    // id: 2,
    // name: test
  // }

  let niz=[];
  niz=await getData();

  // Treba uzeti bas taj elemeant sa prosledjenim id-jem, a ne da se id koristi kao idex
  const selectedDevice = niz.find(device => device.id == id);

  let containerSingleDevice=document.getElementById("deviceContainer");

  const deviceImageContainer=createEl('div');
  deviceImageContainer.className="device-image-container";
  const img=createEl('img');
  img.className="device-photo";
  img.src=selectedDevice.image;
  deviceImageContainer.appendChild(img);
  containerSingleDevice.appendChild(deviceImageContainer);


  const deviceSpecification=createEl('div');
  deviceSpecification.className="device-specifications";
  const divForName=createEl("div");
  divForName.className="device-name-container";
  const headerName=createEl("h1");
  headerName.className="name-of-device";
  headerName.innerHTML=selectedDevice.name;
  divForName.appendChild(headerName);

  
 deviceSpecification.appendChild(divForName);
 


  

  let arr=[
    {
      heading:"BATERY",
      class: "fas fa-battery-full",
      value:selectedDevice.batery
    },
    {
      heading:"DISPLAY",
      class: "fas fa-mobile-alt",
      value:selectedDevice.display
    },
    {
      heading:"DIMENSIONS",
      class: "fas fa-mobile-alt",
      value:selectedDevice.dimensions
    },
    {
      heading:"MEMORY",
      class: "fas fa-memory",
      value:selectedDevice.memory
    },
    {
      heading:"PROCESSOR",
      class: "fas fa-microchip",
      value:selectedDevice.processor
    },
    {
      heading:"CAMERA",
      class: "fas fa-camera",
      value:selectedDevice.camera
    },
    {
      heading:"OS",
      class: "fab fa-windows",
      value:selectedDevice.os
    },
    {
      heading:"PRICE",
      class: "fas fa-dollar-sign",
      value:selectedDevice.price
    },
];





arr.forEach (function(index) {
  const section=createEl('section');
  section.className="section-for-device";
  const h=createEl("h1");
  h.innerHTML=index.heading;
  const divForSpecifications=createEl('div');
  divForSpecifications.className="div-specification-device";
  const ic=createEl('i');
  ic.className=index.class;
  const span2=createEl('span');
  span2.innerHTML+=index.value;
  divForSpecifications.appendChild(ic);
  divForSpecifications.appendChild(span2);
  section.appendChild(h);
  section.appendChild(divForSpecifications);
  deviceSpecification.appendChild(section);
  


});

containerSingleDevice.appendChild(deviceSpecification);


};

showItem();



