// 数组解构赋值
{
  let a, b, test;
  [a, b] = [1, 2]
  console.log(a, b);
}

{
  let a, b, c, test;
  [a, b, c = 3] = [1, 2]
  console.log(a, b, c);
}

{
  let a, b, test;
  [a, b, ...test] = [1, 2, 3, 4, 5]
  console.log(a, b, test);
}

// 1：变量交换
{
  let a = 1;
  let b = 2;
  [a, b] = [b, a]
  console.log(a, b);
}

// 2：获取函数返回值
{
  function f() {
    return [1, 2]
  }
  let a,b;
  [a, b] = f()
  console.log(a, b);
}

// 3：选择性接受返回值
{
  function f() {
    return [1, 2, 3, 4, 5]
  }

  let a, b, c;
  [a, , , b] = f()
  console.log(a,b);
}

// 4：接受不定数量返回值
{
  function f() {
    return [1, 2, 3, 4, 5]
  }

  let a, b, c;
  [a, ...b] = f()
  console.log(a,b);
}

// 对象解构赋值
{
  let a, b;
  ({a, b} = {a:1, b:2})
  console.log(a, b);
}

{
  let o = {
    p: 42,
    q:true
  }
  let {p, q} = o
  console.log(p, q);
}

{
  let metaData = {
    title: 'abc',
    test:[{
      title: 'test',
      desc: 'description'
    }]
  }
  let {title: esTitle, test:[{title: cnTitle}]} = metaData
  console.log(esTitle, cnTitle);
}

