{
  console.log('B：', 0B111110111);
  console.log(0o767);
}

{
  console.log('15', Number.isFinite(15))
  console.log('NaN', Number.isFinite(NaN))
  console.log('1/0', Number.isFinite(1/0))
  console.log('0/1', Number.isFinite(0/1))
  console.log('NaN', Number.isNaN(NaN));
  console.log('0', Number.isNaN(0));
}

{
  console.log('25', Number.isInteger(25));
  console.log('str25', Number.isInteger('25'));
  console.log('25.0', Number.isInteger(25.0));
  console.log('25.1', Number.isInteger(25.1));

}

{
  console.log(Number.MAX_SAFE_INTEGER);
  console.log(Number.MIN_SAFE_INTEGER);
  console.log('10', Number.isSafeInteger(10))
  console.log('a', Number.isSafeInteger('a'))
}

{
  // 取正数部分
  console.log(4.1, Math.trunc(4.1));
}

{
  // sign返回值
  // -1：负数
  // 0：0
  // 1：正数
  // NaN:NaN
  console.log('-5', Math.sign(-5));
  console.log('0', Math.sign(0));
  console.log('5', Math.sign(5));
  console.log('str5', Math.sign('5'));
  console.log('foo', Math.sign('foo'));
}

{
  // 立方根
  console.log('8', Math.cbrt(8));
}
