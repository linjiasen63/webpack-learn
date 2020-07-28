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

var avatar3 = new Image();
avatar3.classList.add(avatarModuleCSS.avatar);
avatar3.src = avatarIMG;
rootEle.appendChild(avatar3);