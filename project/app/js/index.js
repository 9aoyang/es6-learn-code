// import './class/let&const'
// import './class/destructuring-assignment'
// import './class/regular'
import 'babel-polyfill'
import './class/string'

class Test {
  constructor() {
    this.a = 'hello world'
  }

}
let test = new Test()

document.body.innerHTML = test.a


