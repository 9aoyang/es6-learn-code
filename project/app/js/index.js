import 'babel-polyfill'
// import './class/let&const'
// import './class/destructuring-assignment'
// import './class/regular'
// import './class/string'
// import './class/array'
import './class/function'

class Test {
  constructor() {
    this.a = 'hello world'
  }

}
let test = new Test()

document.body.innerHTML = test.a


