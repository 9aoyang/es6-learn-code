// Set
{
  // 声明后赋值
  let list = new Set()
  list.add(5)
  list.add(7)
  console.log('size', list.size);
}

{
  // 声明的同时赋值
  let arr = [1,2,3,4,5]
  let list = new Set(arr)
  console.log('size', list.size);
}

{
  // 去重
  let list = new Set()
  list.add(1)
  list.add(2)
  list.add(1)
  console.log('list', list);

  let arr = [1,2,3,1,'2']
  let list2 = new Set(arr)
  console.log('list2', list2);
}

{
  // delete,clear,has方法
  let arr = ['add', 'delete', 'clear', 'has']
  let list = new Set(arr)

  console.log('has', list.has('add'));
  console.log('delete', list.delete('add'), list);
  list.clear()
  console.log('list', list);
}

{
  // 遍历
  let arr = ['add', 'delete', 'clear', 'has']
  let list = new Set(arr)

  for (const key of list.keys()) {
    console.log('key', key);
  }
  for (const value of list.values()) {
    console.log('value', value);
  }
  for (const [key, value] of list.entries()) {
    console.log('key:', key, 'value:', value);
  }

  list.forEach(item => console.log(item))
}
// WeakSet：1.元素只能是对象 2.对象是弱引用，不会跟垃圾回收机制挂钩
// 3. 没有size，clear方法 4.不能遍历
{
  let ws = new WeakSet();
  let foo = {};
  let bar = {};

  ws.add(foo);
  ws.add(bar);

  console.log(ws.has(foo));    // true
  console.log(ws.has(bar));    // true

  ws.delete(foo); // removes foo from the set
  console.log(ws.has(foo));    // false, foo has been removed
}
// Map
{
  let map = new Map()
  let arr = ['123']

  map.set(arr, 456)
  console.log('map', map, map.get(arr));
}

{
  let map = new Map([['a', 123], ['b', 456]])
  console.log('map', map);
  console.log('size', map.size);
  console.log('delete', map.delete('a'), map);
  console.log('clear', map.clear(), map);
}
// WeakMap
{
  let wm = new WeakMap()

  let o = {}
  wm.set(o, 123)
  console.log(wm.get(o));

}
