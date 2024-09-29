


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

function getRandomIndex(niz){
  let arr=new Array;
  let br=0;

  while(br<3){
    let index= Math.floor(Math.random() * niz.length);

    if(!arr.includes(index)){
      arr.push(index);
      br++;
    }
      
  }
  return arr;
  }


  function createEl(type){
    let element=document.createElement(type);
    return element;
  }



  function seeItem(id){ 
    let key = 'id';
    let value = id;
    let url = new URL(window.location.origin + '/pages/singledevice/');
    url.searchParams.append(key, value);
    window.location.href=url;

  }

  function addItemToCart(item){
    const addedItem =JSON.stringify(item);
    localStorage.setItem("item"+localStorage.length, addedItem );
    
  
  }
  



async function Main(){
  
  let niz=[];
  niz=await getData();

  let selectedItems=getRandomIndex(niz);
  //console.log(selectedItems);

  let items=document.createElement("div");
  items.className="items-container";
  let main=document.getElementById("main");
  main.className="main-conatiner";
  items.innerHTML=' ';

 selectedItems.forEach( function(index) {
    const item = niz[index];
    //console.log(item);

    divForOneItem=createEl('div');
    divForOneItem.className="one-item";

    divForPhoto=createEl('div');
    divForPhoto.className="photo-container";
    img=createEl('img');
    img.className="picOfItem";
    img.src=item.image;
    divForPhoto.appendChild(img);


    divForName=createEl('div');
    divForName.className="nameOfItem";
    pName=createEl('p');
    pName.innerHTML=item.name;
    divForName.appendChild(pName);

    divForOptions=createEl('div');
    divForOptions.className="options";
    const SeeItem=createEl('button');
    SeeItem.className="see-item";
    SeeItem.addEventListener("click", function() {
      seeItem(item.id);
    });
    iEye=createEl('i');
    iEye.className="fas fa-eye";
    spanEye=createEl('span');
    spanEye.className='.see-item span';
    spanEye.innerHTML="See";
    spanEye.appendChild(iEye);
    SeeItem.appendChild(spanEye);
    
    AddItem=createEl('button');
    AddItem.className="add-card";
    AddItem.addEventListener("click", function(){
      addItemToCart(item);
    });
    iAdd=createEl('i');
    iAdd.className="fas fa-shopping-cart";
    spanAdd=createEl('span');
    spanAdd.innerHTML="Add";
    spanAdd.appendChild(iAdd);
    AddItem.appendChild(spanAdd);
    divForOptions.appendChild(SeeItem);
    divForOptions.appendChild(AddItem);
    divForOneItem.appendChild(divForPhoto);
    divForOneItem.appendChild(divForName);
    divForOneItem.appendChild(divForOptions);
    items.appendChild(divForOneItem);
    main.appendChild(items)


 }
  )

  const seeAll=document.createElement('button');
  seeAll.className='see-all';
  seeAll.innerHTML="See All";
  console.log(seeAll);
  main.appendChild(seeAll);
  console.log(window.location.href)
  seeAll.addEventListener("click", function() {
    window.location.href = "/pages/phonestore/";
});
  

}


Main();









