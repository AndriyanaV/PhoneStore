
import { createEl, getData,seeItem,createNavBar,createFooter,addItemToCart,checkItem,reorganizeLocalStorage} from '../../utils/utils.js';

createNavBar();
createFooter();

//localStorage.clear()

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

  


async function Main(){
  
  let niz=[];
  niz=await getData();

  let selectedItems=getRandomIndex(niz);
  

  let items=document.createElement("div");
  items.className="items-container";
  let main=document.getElementById("main");
  main.className="main-conatiner";
  items.innerHTML=' ';

 selectedItems.forEach( function(index) {

    const item = niz[index];
  

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
    main.appendChild(items)


 }
  )

  const seeAll=createEl('button');
  seeAll.className='see-all';
  seeAll.innerHTML="See All";
  main.appendChild(seeAll);
  seeAll.addEventListener("click", function() {
  window.location.href = "/pages/phonestore/";
});
  

}


Main();









