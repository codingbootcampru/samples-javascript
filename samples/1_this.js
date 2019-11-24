// What should I uncomment to make it work?

function MyButtonAlaReactConstructor(name) {
  this.name = name;

  this.handleClick = function () {
    console.log(this.name);
  }

  // this.handleClick = ()  => {
  //   console.log(this.name);
  // }

  this.render = function () {
    return {
        type: 'button',
        buttonClick: this.handleClick
        // buttonClick: this.handleClick.bind(this)
        // buttonClick: () => this.handleClick()
    }
  }

  // this.handleClick = this.handleClick.bind(this);
}

const myButton = new MyButtonAlaReactConstructor('I am button, I am good!');
const buttonRender = myButton.render();

buttonRender.buttonClick();
