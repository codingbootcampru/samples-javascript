// What is the result?
// obj1.obj2.obj3.getName()
// obj1.obj2.obj3.getNameArrow()

function NewObj1() {
  this.name = 'name 1'
  this.obj2 = {
    name: 'name 2',
    obj3: {
      name: 'name 3',
      getName: function () {
        console.log(this.name)
      },
      getNameArrow: () => {
        console.log(this.name)
      }
    }
  }
}

obj1 = new NewObj1()

obj1.obj2.obj3.getName()
obj1.obj2.obj3.getNameArrow()
