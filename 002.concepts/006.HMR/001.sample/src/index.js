import "./styles/index.css";
import "./styles/layout.scss";

import avatarIMG from "./images/avatar.jpg";

import avatarComp from "./avatarComp";
import getIntroComp from "./getIntroComp";

var rootEle = document.getElementById("root");
var avatar1 = new Image();
avatar1.classList.add("avatar");
avatar1.src = avatarIMG;
rootEle.appendChild(avatar1);

var buttonEle = document.createElement("button");
buttonEle.style.display = "block";
buttonEle.innerHTML = "添加头像2";
buttonEle.onclick = function () {
  avatarComp();
};
rootEle.appendChild(buttonEle);

var introComp = getIntroComp(
  "intro1",
  "如果你需要在散步的时候听音乐，不要散步，而且不要听音乐！——纳西姆.塔勒布《随机生存的智慧》"
);
rootEle.appendChild(introComp);

if (module && module.hot) {
  module.hot.accept("./getIntroComp", function () {
    console.log("module.hot.accept ==========");
    var newIntroComp = getIntroComp(
      "intro1",
      "如果你需要在散步的时候听音乐，不要散步，而且不要听音乐！——纳西姆.塔勒布《随机生存的智慧》"
    );
    rootEle.insertBefore(newIntroComp, introComp);
    rootEle.removeChild(introComp);
    introComp = newIntroComp;
  });
}
