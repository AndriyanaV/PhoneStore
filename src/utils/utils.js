export function createEl(type){
  let element=document.createElement(type);
  return element;
}

export async function getData() {
  try {
    const response = await fetch('http://localhost:5050/devices');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

/*export function addItemToCart(item){
  let ordered={
     quantity:1,
     item:item
   }
   const addedItem =JSON.stringify(ordered);
   localStorage.setItem("ordered"+localStorage.length, addedItem );
   
 
 }*/

export  function reorganizeLocalStorage(itemsToAdd){
 
  itemsToAdd.forEach((el,index)=>{
    localStorage.setItem("ordered"+index, JSON.stringify(el));
})

}

export function checkItem(ordered,itemsToAdd) {
  let ids= itemsToAdd.map(el => {
    return el.item.id;
})


 if(ids.includes(ordered.item.id)){
  
   let el=itemsToAdd.find((element) => element.item.id == ordered.item.id);
   el.quantity+=1;

 }

 else{

  itemsToAdd.push(ordered);

 }

 reorganizeLocalStorage(itemsToAdd);

}





export function addItemToCart(item){
  
  let itemsToAdd=[];
  
  let ordered={
     quantity:1,
     item:item
   }
   
   if(localStorage.length>0){
     for(let i=0;i<localStorage.length;i++){

      const ordered= JSON.parse(localStorage.getItem("ordered"+i));
      itemsToAdd.push(ordered)
   }
    
   }
  
   
   checkItem(ordered,itemsToAdd);
   
 
 }

 export function seeItem(id){ 
  let key = 'id';
  let value = id;
  let url = new URL(window.location.origin + '/pages/singledevice/');
  url.searchParams.append(key, value);
  window.location.href=url;

}

export function createNavBar(){
  const navContainer = document.getElementsByClassName('nav-container')[0];

  const phoneStoreDiv = document.createElement('div');
  phoneStoreDiv.classList.add('phone-store');
  
  const phoneStoreSpan = document.createElement('span');
  const phoneStoreLink = document.createElement('a');
  phoneStoreLink.href = '/pages/phonestore';
  phoneStoreLink.textContent = 'Phone store';
  phoneStoreSpan.appendChild(phoneStoreLink);
  phoneStoreDiv.appendChild(phoneStoreSpan);

  const navMenu = document.createElement('nav');
  navMenu.classList.add('nav-menu');

  const homeLink = document.createElement('a');
  homeLink.href = '/pages/homepage';
  homeLink.textContent = 'Home';

  const aboutUsLink = document.createElement('a');
  aboutUsLink.href = '/pages/aboutus';
  aboutUsLink.textContent = 'About us';

  const cartLink = document.createElement('a');
  cartLink.href = '/pages/cartpage';
  cartLink.id = 'card';
  cartLink.textContent = 'Cart';

  const logOutLink = document.createElement('a');
  logOutLink.href = '/pages/login';
  logOutLink.textContent = 'Log out';

  
  navMenu.appendChild(homeLink);
  navMenu.appendChild(aboutUsLink);
  navMenu.appendChild(cartLink);
  navMenu.appendChild(logOutLink);

 
  navContainer.appendChild(phoneStoreDiv);
  navContainer.appendChild(navMenu);


}


export function createFooter(){

  const footerContainer = document.getElementsByClassName('footer')[0];

  const footerContentDiv = document.createElement('div');
  footerContentDiv.classList.add('footer-content');

  const logoMessageContainer = document.createElement('div');
  logoMessageContainer.classList.add('logo-message-container');

  const logoFooterContainer = document.createElement('div');
  logoFooterContainer.classList.add('logo-footer-container');

  const logoLink = document.createElement('a');
  logoLink.href = '/pages/phonestore';

  const logoImage = document.createElement('img');
  logoImage.src = '/public/photos/logo.png';
  logoImage.classList.add('contact-photo');

  logoLink.appendChild(logoImage);
  logoFooterContainer.appendChild(logoLink);

  const messageOnFooter = document.createElement('div');
  messageOnFooter.classList.add('message-on-footer');

  const footerMessage = document.createElement('p');
  footerMessage.textContent = 'We believe in building connections, not just selling devices.';
  messageOnFooter.appendChild(footerMessage);

  logoMessageContainer.appendChild(logoFooterContainer);
  logoMessageContainer.appendChild(messageOnFooter);

  const contactFooterContainer = document.createElement('div');
  contactFooterContainer.classList.add('contact-footer-container');

  const contactHeading = document.createElement('h2');
  contactHeading.textContent = 'Contact us';
  
  const addressPara = document.createElement('p');
  addressPara.textContent = 'Our Address, Belgrade';
  
  const phonePara = document.createElement('p');
  phonePara.textContent = '+381 6312345678';
  
  const emailPara = document.createElement('p');
  emailPara.textContent = 'phonesore@gmail.com';

  contactFooterContainer.appendChild(contactHeading);
  contactFooterContainer.appendChild(addressPara);
  contactFooterContainer.appendChild(phonePara);
  contactFooterContainer.appendChild(emailPara);

  const followUsContainer = document.createElement('div');
  followUsContainer.classList.add('follow-us-container');
  
  const facebookLink = document.createElement('a');
  const facebookImage = document.createElement('img');
  facebookImage.src = '/public/photos/facebook.png';
  facebookImage.classList.add('contact-photo');
  facebookLink.appendChild(facebookImage);

  const instagramLink = document.createElement('a');
  const instagramImage = document.createElement('img');
  instagramImage.src = '/public/photos/instagram.png';
  instagramImage.classList.add('contact-photo');
  instagramLink.appendChild(instagramImage);
  
  const youtubeLink = document.createElement('a');
  const youtubeImage = document.createElement('img');
  youtubeImage.src = '/public/photos/youtube.png';
  youtubeImage.classList.add('contact-photo');
  youtubeImage.id = 'youtube-photo';
  youtubeLink.appendChild(youtubeImage);

  followUsContainer.appendChild(facebookLink);
  followUsContainer.appendChild(instagramLink);
  followUsContainer.appendChild(youtubeLink);

  footerContentDiv.appendChild(logoMessageContainer);
  footerContentDiv.appendChild(contactFooterContainer);
  footerContentDiv.appendChild(followUsContainer);

  const copyrightDiv = document.createElement('div');
  copyrightDiv.classList.add('copyright');

  const hrElement = document.createElement('hr');
  hrElement.style.width = '93%';
  hrElement.style.textAlign = 'center';

  const copyrightPara = document.createElement('p');
  copyrightPara.innerHTML = '&copy; Copyright';

  copyrightDiv.appendChild(hrElement);
  copyrightDiv.appendChild(copyrightPara);


  footerContentDiv
  footerContainer.appendChild(footerContentDiv);
  footerContainer.appendChild(copyrightDiv);

}