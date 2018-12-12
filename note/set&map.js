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

{
  // Map & Array
  let map = new Map()
  let array = []
  // 增
  map.set('t', 1)
  array.push({t: 1})
  console.info('map-array', map, array);

  // 查
  let map_exist = map.has('t')
  let array_exist = array.find(item => item.t)
  console.info('map-array_exist', map_exist, array_exist);

  // 改
  map.set('t', 2)
  array.forEach(item => item.t ? item.t = 2 : '')
  console.info('map-array_modify', map, array);

  // 删
  map.delete('t')
  let index = array.findIndex(item => item.t)
  array.splice(index, 1)
  console.info('map-array_empty', map, array);
}

{
  // Set & Array
  let set = new Set()
  let array = []

  // 增
  set.add({t: 1})
  array.push({t: 1})
  console.info('set-array', set, array)

  // 查
  let set_exist = set.has({t: 1})
  let array_exist = array.find(item => item.t)
  console.info('set-array_exist', set_exist, array_exist);

  // 改
  set.forEach(item => item.t ? item.t = 2 : '')
  array.forEach(item => item.t ? item.t = 2 : '')
  console.info('set-array_modify', set, array);

  // 删
  set.forEach(item => item.t ? set.delete(item) : '')
  let index = array.findIndex(item => item.t)
  array.splice(index, 1)
  console.info('set-array_empty', set, array);
}

{
  // Map & Set & Object
  let item = {t: 1}
  let map = new Map()
  let set = new Set()
  let obj = {}

  // 增
  map.set('t', 1)
  set.add(item)
  obj['t'] = 1

  console.info('map-set-obj_exist', map, set, obj);

  // 查
  console.info({
    map_exist: map.has('t'),
    set_exist: set.has(item),
    obj_exist: 't' in obj
  });

  // 改
  map.set('t', 2)
  item.t = 2
  obj['t'] = 2

  console.info('map-set-obj_modify', map, set, obj);

  // 删
  map.delete('t')
  set.delete(item)
  delete obj['t']

  console.info('map-set-obj_delete', map, set, obj);

}


// 总结: 优先使用Map进行存储，有数据唯一性要求时使用Set，放弃传统的Array和Object
