{
  let readonly = function (target, name, descriptor) {
    descriptor.writable = false
    return descriptor
  }

  class Test {
    @readonly
    time() {
      return '2018-08-15'
    }
  }

  let test = new Test()
  // Uncaught TypeError: Cannot assign to read only property 'time' ...
  // test.time = function () {
  //   console.log('hello world');
  // }
  console.log(test.time());
}

{
  let typename = function (target, name, descriptor) {
    target.myname = 'hello'
    return descriptor
  }

  @typename
  class Test {

  }
  console.log('类修饰符', Test.myname);

  // 第三方修饰器js库：core-decorators; yarn add core-decorators

}

{
  let log = type => (target, name, descriptor) => {
    let src_method = descriptor.value
    descriptor.value = (...arg) => {
      src_method.apply(target, arg)
      console.info(`log ${type}`)
    }
  }

  class AD {
    @log('show')
    show() {
      console.info('ad is show')
    }
    @log('click')
    click() {
      console.info('ad is click')
    }
  }

  let ad = new AD()
  ad.show()
  ad.click()
}
