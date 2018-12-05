// 参数默认值
{
  function test(x, y = 'world') {
    console.log(x, y);
  }
  test('hello')
  test('hello', 'girl')
}

{

  let x = 'test'
  function test(x, y = x) {
    console.log(x, y);
  }
  test('hello')
  function test(c, y = x) {
    console.log(c, y);
  }
  test('hello')
}
// rest参数
{
  function test(...args) {
    for (let arg of args) {
      console.log('arg', arg);
    }
  }
  test('1','2','a')
}
// 扩展运算符
{
  console.log(0, ...[1,2,'a']);
}
// 箭头函数, this绑定在定义时的父级作用域
{
  // es5
  function arrow1(v) {
    console.log('arrow1', v * 2);
  }
  arrow1(3);
  // es6
  let arrow2 = v => v * 2
  console.log('arrow2', arrow2(3));
}

// 尾调用优化
{
  function tail(x) {
    console.log('tail', x);
  }
  function fx(x) {
    return tail(x)
  }

  fx(123)
}
