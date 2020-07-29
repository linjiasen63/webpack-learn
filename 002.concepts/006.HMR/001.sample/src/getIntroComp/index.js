export default function(id, txt) {
  var divEle = document.createElement('div');
  divEle.id = id;
  divEle.innerHTML = txt;
  divEle.style.fontSize = '16px';
  divEle.style.margin= '20px 0';
  divEle.style.color = '#fff';
  divEle.style.fontFamily = 'HYRunYuan';
  return divEle;
}