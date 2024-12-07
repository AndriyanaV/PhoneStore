import { createEl, createNavBar,createFooter,reorganizeLocalStorage} from '../../utils/utils.js';

createNavBar();
createFooter();


const mainContainerCart=document.getElementsByClassName("page-content");
const tableItems=createEl('table');
const optionsContainer=createEl("div");
const cuponPriceContainer=createEl("div");

function clearCartFunction(){
  localStorage.clear();
  window.location.reload();
  
}


function showMessage (message){
  const messageContainer=createEl("div");
  messageContainer.className="message-container";
  messageContainer.innerHTML=message;
  mainContainerCart[0].appendChild(messageContainer);

}


function backToStoreF(){
  window.location.href="/pages/phonestore";
}


function deleteOneProduct(ordered,addedItems,index){
  
  let reorganized = new Array();
  
       for(let i=0;i<addedItems.length;i++){
               if(i!=index){
                 reorganized.push(addedItems[i]);
               }
               
       }
   
    
   
    reorganizeLocalStorage(reorganized)
  

  

  if(reorganized.length>0){
    tableItems.replaceChildren();
    showItemInCart(reorganized)
    optionsContainer.replaceChildren();
    cuponPriceContainer.replaceChildren();
    optionsInCart(reorganized)
  }

  else{
    tableItems.replaceChildren();
    tableItems.style.display="none"
    optionsContainer.replaceChildren();
    optionsContainer.style.display="none";
    cuponPriceContainer.replaceChildren();
    cuponPriceContainer.style.display="none"
    showMessage("Your cart is empty!")
  }

}



function subtotalAllCalculate(addedItems){
  let sumAll=0;
  for(let i=0;i<addedItems.length;i++){
    let piceForOne=parseInt(document.getElementsByClassName("item-subtotal")[i].textContent);
    sumAll+=piceForOne;

  }
    document.getElementsByClassName("span-subtotal-all")[0].innerHTML=sumAll;
}




function calculatePrice(quantity,price,value,addedItems){
  
  const subtotal=quantity*price;
  document.getElementsByClassName("item-subtotal")[value-1].innerHTML=subtotal;
  subtotalAllCalculate(addedItems);
  
}



 function showItemInCart(addedItems){
  
  tableItems.className="table-item";
  const theadItems=createEl('thead');
  const trHead=createEl('tr');
  trHead.className="thead-row";
  const tdItem=createEl('td')
  tdItem.className="td-item";
  tdItem.innerHTML="ITEM";
  tdItem.colSpan=3;
  const tdPrice=createEl('td')
  tdPrice.className="td-item";
  tdPrice.innerHTML="PRICE";
  const tdQuantity=createEl('td')
  tdQuantity.className="td-item";
  tdQuantity.innerHTML="QUANTITY";
  const tdSubtotal=createEl('td');
  tdSubtotal.className="td-item";
  tdSubtotal.innerHTML="SUBTOTAL";
  tdSubtotal.colSpan=2;
  trHead.appendChild(tdItem);
  trHead.appendChild(tdPrice);
  trHead.appendChild(tdQuantity);
  trHead.appendChild(tdSubtotal);
  theadItems.appendChild(trHead);
  tableItems.appendChild(theadItems);

  addedItems.forEach((ordered,index) => {

  const tbodyItems=createEl("tbody")
  const trProduct=createEl("tr");
  trProduct.className="product-row";
  const serialNumber=createEl("td");
  serialNumber.innerHTML=index+1;
  const tdProductPhoto=createEl("td");
  tdProductPhoto.className="item-photo";
  const imgProduct=createEl("img");
  imgProduct.className="img-product";
  imgProduct.src= ordered.item.image;    
  tdProductPhoto.appendChild(imgProduct);
  const tdProductName=createEl("td");
  tdProductName.className="item-name";
  const nameOfItem=createEl("p");
  nameOfItem.innerHTML=ordered.item.name;  
  const spanName=createEl('span')
  spanName.innerHTML="Name"
  spanName.className="span-responsive"
  tdProductName.appendChild(nameOfItem);
  tdProductName.appendChild(spanName)
  const tdProductPrice=createEl("td");
  tdProductPrice.className="item-price";
  tdProductPrice.innerHTML= ordered.item.price; 
  const spanPrice=createEl('span')
  spanPrice.innerHTML="Price"
  spanPrice.className="span-responsive"
  tdProductPrice.appendChild(spanPrice)
  const tdProductQuantity=createEl("td");
  tdProductQuantity.className="item-quantity";
  const inputQuantity=createEl("input");
  inputQuantity.style.width="50px";
  inputQuantity.type="number";
  inputQuantity.value=ordered.quantity;   
  inputQuantity.addEventListener("click", function(){
   calculatePrice(inputQuantity.value,ordered.item.price,serialNumber.textContent,addedItems);
   let changeQuantity=JSON.parse(localStorage.getItem('ordered'+index))
   changeQuantity.quantity=parseInt(inputQuantity.value)
   localStorage.setItem('ordered'+index, JSON.stringify(changeQuantity))
  });

  inputQuantity.min="1";
  inputQuantity.className="input-quantity";
  const spanQunatity=createEl('span')
  spanQunatity.innerHTML="Qunatity"
  spanQunatity.className="span-responsive"
  tdProductQuantity.appendChild(inputQuantity);
  tdProductQuantity.appendChild(spanQunatity);
  const tdProductSubtotal=createEl("td");
  tdProductSubtotal.className="item-subtotal";
  tdProductSubtotal.innerHTML= ordered.item.price * parseInt  (ordered.quantity);  
  const spanSubtotal=createEl('span')
  spanSubtotal.innerHTML="Subtotal"
  spanSubtotal.className="span-responsive"
  tdProductSubtotal.appendChild(spanSubtotal)
  tdProductQuantity.appendChild(inputQuantity);
  tdProductQuantity.appendChild(spanQunatity);
  const tdProductRemove=createEl("td");
  tdProductRemove.className="remove-item";
  const iRemoveProduct=createEl("i");
  iRemoveProduct.className="fa fa-light fa-trash";
  iRemoveProduct.addEventListener("click", function(){
    deleteOneProduct(ordered,addedItems,index);
       
  })

  
  tdProductRemove.appendChild(iRemoveProduct);
  trProduct.appendChild(serialNumber);
  trProduct.appendChild(tdProductPhoto);
  trProduct.appendChild(tdProductName);
  trProduct.appendChild(tdProductPrice);
  trProduct.appendChild(tdProductQuantity);
  trProduct.appendChild(tdProductSubtotal);
  trProduct.appendChild(tdProductRemove);
  tbodyItems.appendChild(trProduct);
  tableItems.appendChild(tbodyItems);
  mainContainerCart[0].appendChild(tableItems);

});
}



//OPTIONS BACK TO STORE AND CLEAR CART 

function optionsInCart(addedItems){

optionsContainer.className="options-container";
const backToStoreContainer= createEl("div");
backToStoreContainer.className="back-store-container";
const iBackToStore=createEl("i");
iBackToStore.className="fa fa-solid fa-arrow-left";
const BackToStoreButtton=createEl("button");
BackToStoreButtton.className="back-to-store-button";
BackToStoreButtton.innerHTML="Back to store";
BackToStoreButtton.addEventListener("click", function(){
  backToStoreF();
});
backToStoreContainer.appendChild(iBackToStore);
backToStoreContainer.appendChild(BackToStoreButtton);
const clearCartContainer=createEl("div");
clearCartContainer.className="clear-cart-container";
const clearCartButton=createEl("button");
clearCartButton.className="clear-button";
clearCartButton.innerHTML="Clear The Cart";
clearCartButton.addEventListener("click", function(){
  clearCartFunction();
});
clearCartContainer.appendChild(clearCartButton)
optionsContainer.appendChild(backToStoreContainer);
optionsContainer.appendChild(clearCartContainer);


//CUPPON AND SUBTOTAL

cuponPriceContainer.className="cupon-price-container";
const cuponContainer=createEl("div");
cuponContainer.className="cupon-container";
const cuponHeading=createEl("h3");
cuponHeading.innerHTML="Cuppon For Discount";
const inputForCupon=createEl("input");
inputForCupon.type="text";
inputForCupon.placeholder="Enter your cupon here.";
const buttonForCuppon=createEl("button");
buttonForCuppon.className="cupon-button";
buttonForCuppon.innerHTML="Add Cupon";
cuponContainer.appendChild(cuponHeading);
cuponContainer.appendChild(inputForCupon);
cuponContainer.appendChild(buttonForCuppon);
cuponPriceContainer.appendChild(cuponContainer);
const totalPriceContainer=createEl("div");
totalPriceContainer.className="total-price-container";
const subtotalContainer=createEl("div");
subtotalContainer.className="subtotal-conainer";
const pSubtotal=createEl("p");
pSubtotal.innerHTML="Subtotal";
const spanSubotal=createEl("span");
spanSubotal.className="span-subtotal-all";
let totalPrice=0;

addedItems.forEach((ordered)=>{
  totalPrice+=ordered.item.price*ordered.quantity});

spanSubotal.innerHTML=totalPrice;
subtotalContainer.appendChild(pSubtotal);
subtotalContainer.appendChild(spanSubotal);
totalPriceContainer.appendChild(subtotalContainer);
const payContainer=createEl("div");
payContainer.className="pay-container";
const payButton=createEl("button");
payButton.className="pay-button";
payButton.innerHTML="<p>Continue payment</p>";
payContainer.appendChild(payButton);
totalPriceContainer.appendChild(payContainer);
cuponPriceContainer.appendChild(totalPriceContainer)


mainContainerCart[0].appendChild(optionsContainer);
mainContainerCart[0].appendChild(cuponPriceContainer);

}

function getItems(){

  const addedItems=[];
    
    if(localStorage.length>0){
  
     for(let i=0;i<localStorage.length;i++){
  
        const ordered= JSON.parse(localStorage.getItem("ordered"+i));
        addedItems.push(ordered)
     }
     
       showItemInCart(addedItems);
       optionsInCart(addedItems);
       
     
    }
   
    else{

      showMessage("Your cart is empty!");
    }
  
  
    }




getItems()

