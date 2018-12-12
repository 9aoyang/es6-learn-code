{
  // es5的两种方式
  let regex = new RegExp('xyz', 'i')
  let regex2 = new RegExp(/xyz/i)
  console.log(regex.test('xyz123'), regex2.test('xyz123'));

  // es6新增写法,后面的修饰符会覆盖正则表达式的修饰符
  let regex3 = new RegExp(/xyz/ig, 'i')
  console.log(regex3.flags);
}

// y修饰符返回null的两种情况: 1.首字符就不匹配 2.上次匹配的下一位置字符不匹配
{
  let s = '_bbb_bb_b'
  let a1 = /b+/g;
  let a2 = /b+/y

  console.log('one', a1.exec(s), a2.exec(s));
  console.log('two', a1.exec(s), a2.exec(s));
  // 判断是否使用y修饰符
  console.log(a1.sticky, a2.sticky);
}

{
  // u修饰符：正则处理unicode时的一个特征值
  // 被识别为两个字符
  console.log('u-1', /^\uD83D/.test('\uD83D\uDC2A'));
  // 被识别为一个字符
  console.log('u-2', /^\uD83D/u.test('\uD83D\uDC2A'));

  console.log(/\u{61}/.test('a'));
  console.log(/\u{61}/u.test('a'));

  console.log(`\u{20BB7}`);
  let s = '𠮷'
  // 正则匹配时.修饰符不能匹配大于2个字节长度的字符，这时候就要使用u修饰符
  console.log('u', /^.$/.test(s));
  console.log('u-2', /^.$/u.test(s));
}
