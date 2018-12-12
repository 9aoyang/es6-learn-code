{
  console.log('a:', `\u0061`)
  console.log('s:', `\u20BB7`)
  console.log('s:', `\u{20BB7}`)
}


{
  // es5
  let s = '𠮷'
  console.log('length:', s.length);
  console.log('0:', s.charAt(0));
  console.log('1:', s.charAt(1));
  console.log('at0:', s.charCodeAt(0));
  console.log('at1:', s.charCodeAt(1));

  // es6
  let s1 = '𠮷a'
  console.log('length:', s1.length);
  console.log('code0:', s1.codePointAt(0));
  console.log('code0:', s1.codePointAt(0).toString(16));
  console.log('code1:', s1.codePointAt(1));
  console.log('code2:', s1.codePointAt(2));
}

{
  // es5
  console.log(String.fromCharCode('0x20bb7'));
  // es6
  console.log(String.fromCodePoint('0x20bb7'));
}

{
  let str = `\u{20bb7}abc`
  // es5
  for(let i = 0, length = str.length; i < length; i++) {
    console.log('es5:', str[i]);
  }
  // es6
  for (const ch of str) {
    console.log('es6:', ch);
  }
}

{
  let str = 'string';
  console.log('inclued', str.includes(str));
  console.log('start', str.startsWith('str'));
  console.log('end', str.endsWith('ing'));
}

{
  let str = 'abc'
  console.log(str.repeat(2));
}

{
  let name = 'list'
  let info = 'hello world'
  let m = `i am ${name}, ${info}`
  console.log(m);
}

{
  console.log('1'.padStart(2, '0'));
  console.log('1'.padEnd(2, '0'));
}

{
  let user = {
    name: 'list',
    info: 'hello world',
  }
  // 标签模板 作用: 1.过滤html字符串，防止XSS攻击 2.处理多语言转换
  console.log(abc`i am ${user.name}, ${user.info}`)
  function abc(s, v1, v2) {
    // do someting
    console.log(s, v1, v2);
    return s + v1 + v2
  }
}

{
  // raw对所有'\'进行转译
  console.log(String.raw`Hi\n${1+2}`);
  console.log(`Hi\n${1+2}`);
}
