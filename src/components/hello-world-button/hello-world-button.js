import './hello-world.button.scss';

class HelloWorldButton {
  render() {
    const button = document.createElement('button');
    button.innerText = 'Hello World';
    button.classList.add('hello-world-button')
    const body = document.querySelector('body');
    button.onclick = function () {
      const paragraph = document.createElement('p');
      paragraph.classList.add('hello-world-button-text')
      paragraph.innerText = 'Hello World';
      body.appendChild(paragraph);
    }
    body.appendChild(button);
  }
}

export default HelloWorldButton;
