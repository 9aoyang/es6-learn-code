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

// 对象解构赋值
{
  let a, b;
  ({a, b} = {a:1, b:2})
  console.log(a, b);
}

// 适用场景1：变量交换
{
  let a = 1;
  let b = 2;
  [a, b] = [b, a]
  console.log(a, b);
}

// 适用场景2：获取函数返回值
{
  function f() {
    return [1, 2]
  }
  let a,b;
  [a, b] = f()
  console.log(a, b);
}

// 适用场景3：
{
  function f() {
    return [1, 2, 3, 4, 5]
  }

  let a, b, c;
  [a, , , b] = f()
  console.log(a,b);
}

