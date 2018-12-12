{
  // 声明
  let a1 = Symbol()
  let a2 = Symbol()
  console.log(a1 === a2);
  let a3 = Symbol.for('a3')
  let a4 = Symbol.for('a3')
  console.log(a3 === a4);
}

{
  let a1 = Symbol.for('abc')
  let a2 = Symbol.for('def')
  let obj = {
    [a1]: '123',
    [a2]: '456',
    'abc': 345,
    'c':456
  }
  console.log(obj);
  // 常规循环取不到Symbol类型值
  for (const [key, value] of Object.entries(obj)) {
    console.log([key, value]);
  }
  // 通过Object.getOwnPropertySymbols方法去获取
  console.log(Object.getOwnPropertySymbols(obj));

  // 获取所有(含Symbol类型)的key值
  console.log(Reflect.ownKeys(obj))
}
