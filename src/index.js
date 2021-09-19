import helloWorld from './hello-world';
import addImage from './add-image';
import HelloWorldButton from './components/hello-world-button/hello-world-button';

helloWorld();
addImage();
const buttonHelloWorld = new HelloWorldButton();
buttonHelloWorld.render();
