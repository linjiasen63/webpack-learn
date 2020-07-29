import avatarModuleCSS from "../styles/avatar.module.css";
import avatarIMG from "../images/avatar.jpg";

export default function () {
  var rootEle = document.getElementById("root");
  var avatar = new Image();
  avatar.classList.add(avatarModuleCSS.avatar);
  avatar.src = avatarIMG;
  rootEle.appendChild(avatar);
}
