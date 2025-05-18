export function createEl(type){
  let element=document.createElement(type);
  return element;
}

export function pageSign(){
  let el = document.querySelectorAll('.nav-menu a');
  
  for (let i = 0; i < el.length; i++) {
    el[i].removeAttribute('target');

      if (el[i].href=== window.location.href) {
      el[i].classList.add('visited-page');
      }
}
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


export  function reorganizeLocalStorage(itemsToAdd){

  localStorage.clear()
 
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
  
  
  const phoneStoreImg = document.createElement('img');
  phoneStoreImg.className="phone-store-img"
  const phoneStoreLink = document.createElement('a');
  phoneStoreLink.href = '/pages/homepage';
  phoneStoreImg.src='/public/photos/logo-at-navbar.png';
  phoneStoreLink.appendChild(phoneStoreImg)
  phoneStoreDiv.appendChild(phoneStoreLink);

  const navMenu = document.createElement('nav');
  navMenu.classList.add('nav-menu');

  const homeLink = document.createElement('a');
  homeLink.href = '/pages/homepage/';
  homeLink.textContent = 'Home';

  const storeLink = document.createElement('a');
  storeLink.href = '/pages/phonestore/';
  storeLink.textContent = 'Store';

  const aboutUsLink = document.createElement('a');
  aboutUsLink.href = '/pages/aboutus/';
  aboutUsLink.textContent = 'About us';

  const cartLink = document.createElement('a');
  cartLink.href = '/pages/cartpage/';
  cartLink.id = 'card';
  cartLink.textContent = 'Cart';

  const logOutLink = document.createElement('a');
  logOutLink.href = '/pages/login/';
  logOutLink.textContent = 'Log out';

  
  navMenu.appendChild(homeLink);
  navMenu.appendChild(storeLink);
  navMenu.appendChild(aboutUsLink);
  navMenu.appendChild(cartLink);
  navMenu.appendChild(logOutLink);

 
  navContainer.appendChild(phoneStoreDiv);
  navContainer.appendChild(navMenu);

//Mobile navbar 
const mobileMenuContainer=document.createElement('div');
mobileMenuContainer.className="mobile-menu-container"


const hamburgerMenuContainer= document.createElement('div');
hamburgerMenuContainer.className="hamburger-menu-container";
const hamburgerImg= document.createElement('img');
hamburgerImg.src="/public/photos/hamburger-menu-img.png";
hamburgerMenuContainer.appendChild(hamburgerImg);

// hamburgerMenuContainer.addEventListener('click', () => {
//   if(mobileLinksMenuContainer.style.display=='none'){
//       mobileLinksMenuContainer.style.display='flex';
//       return;
//   }
  
//    mobileLinksMenuContainer.style.display='none';

// });

hamburgerMenuContainer.addEventListener('click', () => {
  mobileLinksMenuContainer.classList.toggle('active');
});


const mobileLinksMenuContainer= document.createElement('div');
mobileLinksMenuContainer.className='mobile-links-container';

const homeLinkMobile = document.createElement('a');
homeLinkMobile.href = '/pages/homepage/';
homeLinkMobile.textContent = 'Home';

const storeLinkMobile = document.createElement('a');
storeLinkMobile.href = '/pages/phonestore/';
storeLinkMobile.textContent = 'Store';

const aboutUsLinkMobile = document.createElement('a');
aboutUsLinkMobile.href = '/pages/aboutus/';
aboutUsLinkMobile.textContent = 'About us';

const cartLinkMobile = document.createElement('a');
cartLinkMobile.href = '/pages/cartpage/';
cartLinkMobile.id = 'card';
cartLinkMobile.textContent = 'Cart';

const logOutLinkMobile = document.createElement('a');
logOutLinkMobile.href = '/pages/login/';
logOutLinkMobile.textContent = 'Log out';

mobileLinksMenuContainer.appendChild(homeLinkMobile);
mobileLinksMenuContainer.appendChild(storeLinkMobile);
mobileLinksMenuContainer.appendChild(aboutUsLinkMobile);
mobileLinksMenuContainer.appendChild(cartLinkMobile);
mobileLinksMenuContainer.appendChild(logOutLinkMobile);

mobileMenuContainer.appendChild(hamburgerMenuContainer)
navContainer.appendChild(mobileLinksMenuContainer)
navContainer.appendChild(mobileMenuContainer);
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
  logoLink.href = '/pages/homepage';

  const logoImage = document.createElement('img');
  logoImage.src = '/public/photos/logo.png';
  logoImage.classList.add('contact-photo');

  logoLink.appendChild(logoImage);
  logoFooterContainer.appendChild(logoLink);

  const messageOnFooter = document.createElement('div');
  messageOnFooter.classList.add('message-on-footer');

  // const footerMessage = document.createElement('p');
  // footerMessage.textContent = 'We believe in building connections, not just selling devices.';
  // messageOnFooter.appendChild(footerMessage);

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