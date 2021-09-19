import './hello-world.button.scss';

class HelloWorldButton {
  buttonStyles = 'hello-world-button-text'

  render() {
    const button = document.createElement('button');
    button.innerText = 'Hello World';
    button.classList.add('hello-world-button')
    const body = document.querySelector('body');
    button.onclick = function () {
      const paragraph = document.createElement('p');
      paragraph.classList.add(this.buttonStyles)
      paragraph.innerText = 'Hello World';
      body.appendChild(paragraph);
    }
    body.appendChild(button);
  }
}

export default HelloWorldButton;
