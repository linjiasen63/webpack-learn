import './styles/index.css';
import './styles/layout.scss';
import avatarModuleCSS from './styles/avatar.module.css';

import avatarIMG from './images/avatar.jpg';

var rootEle = document.getElementById('root');
var avatar1 = new Image();
avatar1.classList.add('avatar');
avatar1.src = avatarIMG;
rootEle.appendChild(avatar1);

var avatar2 = new Image();
avatar2.classList.add(avatarModuleCSS.avatar);
avatar2.src = avatarIMG;
rootEle.appendChild(avatar2);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    console.log('----- window load');
    navigator.serviceWorker.register('./service-worker.js').then(() => {
      console.log('service work register success');
    }).catch(() => {
      console.error('service work register fail');
    });
  })
}

