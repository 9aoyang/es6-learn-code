// export let A = 123

// export function test () {
//   console.log('test');
// }

// export class Hello {
//   test() {
//     console.log('class');
//   }
// }

const A = 123
let test = function () {
  console.log('test');
}

class Hello {
  test() {

  }
}

export default {
  A,
  test,
  Hello
}
