import { createEl, getData,addItemToCart,seeItem,createNavBar,createFooter,checkItem,reorganizeLocalStorage} from '../../utils/utils.js';

createNavBar();
createFooter();

async function Main(){
  
  let niz=[];
  niz=await getData();

  

  let items=createEl("div");
  items.className="items-container";
  let mainContainer=document.getElementById("main-container");
  mainContainer.className="main-container";
  items.innerHTML=' ';

 niz.forEach(index => {
   
 
    const item = index;
    

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

    const divForPrice=createEl('div');
    divForPrice.className="priceOfItem";
    const pPrice=createEl('p');
    pPrice.innerHTML=item.price + "$";
    divForPrice.appendChild(pPrice);

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
    divForOneItem.appendChild(divForPrice)
    divForOneItem.appendChild(divForOptions);
    items.appendChild(divForOneItem);
    mainContainer.appendChild(items)


 });
  
  

  }



Main();

