// What will be the result?

const obj1 = {
  name: 'name 1',
  getName: function (objWithNameValue) {
    console.log(objWithNameValue.nameValue);
  }
}

const obj2 = {
  name: 'name 2',
  callFunc: function () {
    obj1.getName({
      name: 'name 3',
      nameValue: this.name
    })
  }
}

obj2.callFunc();
