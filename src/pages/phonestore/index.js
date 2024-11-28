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

function seeItem(id){
  let key = 'id';
  let value = id;

  let url = new URL(location.origin + '/pages/singledevice/');
  url.searchParams.append(key, value);
 // console.log({route: location})
  window.location=url;

}

function addItemToCart(item){
  const addedItem =JSON.stringify(item);
  localStorage.setItem("item"+localStorage.length, addedItem );
  

}


async function Main(){
  
  let niz=[];
  niz=await getData();

  

  let items=document.createElement("div");
  items.className="items-container";
  let mainContainer=document.getElementById("main-container");
  //mainContainer.style.minHeight = "100vh";
  mainContainer.className="main-container";
  items.innerHTML=' ';

 niz.forEach(index => {
   
 
    const item = index;
    //console.log(item);

    const divForOneItem=createEl('div');
    divForOneItem.className="one-item";

    const divForPhoto=createEl('div');
    divForPhoto.className="photo-container";
    const img=createEl('img');
    img.className="picOfItem";
    img.src=item.image;
    divForPhoto.appendChild(img);


    const divForName=createEl('div');
    divForName.className="nameOfItem";
    const pName=createEl('p');
    pName.innerHTML=item.name;
    divForName.appendChild(pName);

    const divForOptions=createEl('div');
    divForOptions.className="options";
    const SeeItem=createEl('button');
    SeeItem.className="see-item";
    SeeItem.addEventListener("click", function() {
      seeItem(item.id);
    });
    const iEye=createEl('i');
    iEye.className="fas fa-eye";
    const spanEye=createEl('span');
    spanEye.className='.see-item span';
    spanEye.innerHTML="See";
    spanEye.appendChild(iEye);
    SeeItem.appendChild(spanEye);
    
    const AddItem=createEl('button');
    AddItem.className="add-card";
    AddItem.addEventListener("click", function(){
      addItemToCart(item);
    });
    const iAdd=createEl('i');
    iAdd.className="fas fa-shopping-cart";
    const spanAdd=createEl('span');
    spanAdd.innerHTML="Add";
    spanAdd.appendChild(iAdd);
    AddItem.appendChild(spanAdd);
    divForOptions.appendChild(SeeItem);
    divForOptions.appendChild(AddItem);
    divForOneItem.appendChild(divForPhoto);
    divForOneItem.appendChild(divForName);
    divForOneItem.appendChild(divForOptions);
    items.appendChild(divForOneItem);
    mainContainer.appendChild(items)


 });
  
  

  }



Main();

