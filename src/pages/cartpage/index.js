function createEl(type){
  let element=document.createElement(type);
  return element;
}

//localStorage.clear()

const mainContainerCart=document.getElementsByClassName("page-content");
const tableItems=document.createElement('table');

function clearCartFunction(){
  localStorage.clear();
  window.location.reload();
  
}


function showMessage (message){
  const messageContainer=document.createElement("div");
  messageContainer.className="message-container";
  messageContainer.innerHTML=message;
  mainContainerCart[0].appendChild(messageContainer);

}


function backToStoreF(){
  window.location.href="/pages/phonestore";
}

function pullItemsFromLocalStorage(){
      const devices= new Array();

      for(i=0;i<localStorage.length;i++){
        const oneDevice= JSON.parse(localStorage.getItem("item"+i));
        devices.push(oneDevice);
      }
    
      return devices;

}

//localStorage.clear()
  function clearNull (){


    for(i=0;i<localStorage.length;i++){
        const device= JSON.parse(localStorage.getItem("item"+i));
        if(device==null){
          localStorage.removeItem("item"+i);
      }
  }

  
}

function redefineLocalStorage(reorganized){
      localStorage.clear();
      
      reorganized.forEach((reorganizedItems,index)=>{
            localStorage.setItem("item"+index, JSON.stringify(reorganizedItems));
      })
}


function deleteOneProduct(ordered,addedItems,index){
  
  let reorganized = new Array();
  
       for(let i=0;i<addedItems.length;i++){
               if(i!=index){
                 reorganized.push(addedItems[i]);
               }
               
       }
   
   

   redefineLocalStorage(reorganized);
  

   //here is the way that I used previousely to resolve problem with deleted items in local storage 
  /*const notDeleted=new Array()
  
   for(let i=0;i<localStorage.length;i++){
    const device= JSON.parse(localStorage.getItem("item"+i));
    if(device!=null){
      notDeleted.push(device)

      notDeleted.forEach((delteded)=>{
        if(delteded.id==ordered.id){
          indOfDeleted=i;
        }
      })
    }   
   }

   localStorage.setItem("item"+ indOfDeleted,null);
   clearNull();*/

  if(reorganized.length>0){
    tableItems.replaceChildren();
    showItemInCart(reorganized)
    optionsContainer.replaceChildren();
    cuponPriceContainer.replaceChildren();
    optionsInCart(reorganized)
  }
  else{
    tableItems.replaceChildren();
    optionsContainer.replaceChildren();
    cuponPriceContainer.replaceChildren();
    showMessage("Your cart is empty")
  }

}



//`localStorage.clear()





function subtotalAllCalculate(addedItems){
  let sumAll=0;
  for(i=0;i<addedItems.length;i++){
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
  const theadItems=document.createElement('thead');
  const trHead=document.createElement('tr');
  trHead.className="thead-row";
  const tdItem=document.createElement('td')
  tdItem.className="td-item";
  tdItem.innerHTML="ITEM";
  tdItem.colSpan=3;
  const tdPrice=document.createElement('td')
  tdPrice.className="td-item";
  tdPrice.innerHTML="PRICE";
  const tdQuantity=document.createElement('td')
  tdQuantity.className="td-item";
  tdQuantity.innerHTML="QUANTITY";
  const tdSubtotal=document.createElement('td');
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
  imgProduct.src= ordered.image;
  tdProductPhoto.appendChild(imgProduct);
  const tdProductName=createEl("td");
  tdProductName.className="item-name";
  const nameOfItem=createEl("p");
  nameOfItem.innerHTML=ordered.name;
  tdProductName.appendChild(nameOfItem);
  const tdProductPrice=createEl("td");
  tdProductPrice.className="item-price";
  tdProductPrice.innerHTML= ordered.price;
  const tdProductQuantity=createEl("td");
  tdProductQuantity.className="item-quantity";
  const inputQuantity=createEl("input");
  inputQuantity.style.width="50px";
  inputQuantity.type="number";
  inputQuantity.value="1";
  inputQuantity.addEventListener("click", function(){
   calculatePrice(inputQuantity.value,ordered.price,serialNumber.textContent,addedItems);
  });
  
  
  inputQuantity.min="1";
  inputQuantity.className="input-quantity";
  tdProductQuantity.appendChild(inputQuantity);
  const tdProductSubtotal=createEl("td");
  tdProductSubtotal.className="item-subtotal";
  tdProductSubtotal.innerHTML=ordered.price;
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

const optionsContainer=createEl("div");
const cuponPriceContainer=createEl("div");

//options BACK TO STORE AND CLEAR CART 
function optionsInCart(addedItems){
//alert("radi");

optionsContainer.className="options-container";
const backToStoreContainer= createEl("div");
backToStoreContainer.className="back-store-container";
iBackToStore=document.createElement("i");
iBackToStore.className="fa fa-solid fa-arrow-left";
BackToStoreButtton=createEl("button");
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
//const cuponPriceContainer=document.createElement("div");
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
pSubtotal=createEl("p");
pSubtotal.innerHTML="Subtotal";
spanSubotal=createEl("span");
spanSubotal.className="span-subtotal-all";
totalPrice=0;

addedItems.forEach((ordered)=>{
  totalPrice+=ordered.price});

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

let i=0;
 function getItems(){
  const addedItems=new Array;
  
  if(localStorage.length>0){
    while(i<localStorage.length){
      const ordered= JSON.parse(localStorage.getItem("item"+i));
       i++;
       if(ordered!=null){
        addedItems.push(ordered);
       }
      
  }

  console.log(addedItems);
  showItemInCart(addedItems);
  optionsInCart(addedItems);
  
  }
 
  else{
    
    showMessage("Your cart is empty!");
  }
} 






getItems()








  