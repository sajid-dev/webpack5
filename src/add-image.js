import demoImage from './FWLIVE_CHI_Web-05.png';

function addImage() {
  const img = document.createElement('img');
  img.width = 800;
  img.src = demoImage;
  img.alt = 'Demo Image';
  const body = document.querySelector('body');
  body.appendChild(img);
}

export default addImage;
