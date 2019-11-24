// What is the result?
// obj1.obj2.obj3.getName()
// obj1.obj2.obj3.getNameArrow()
const name = 'name 0'

const obj1 = {
  name: 'name 1',
  obj2: {
    name: 'name 2',
    obj3: {
      name: 'name 3',
      getName: function () {
        // what is this here if execute in browser?
        // console.log(this)
        console.log(this.name)
      },
      getNameArrow: () => {
        // what is this here if execute in browser?
        // console.log(this)
        console.log(this.name)
      }
    }
  }
}

exports.name = 'name 4'

obj1.obj2.obj3.getName()
obj1.obj2.obj3.getNameArrow()
