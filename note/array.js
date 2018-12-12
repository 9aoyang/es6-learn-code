// Array.of()
{
  let arr = Array.of(3,4,7,9,11)
  console.log('arr', arr)

  let empty = Array.of()
    console.log('empty', empty);
}

// Array.from()
{
  // 转化类数组
  let p = document.querySelectorAll('p')
  let pArr = Array.from(p)
  pArr.forEach(el => {
    console.log(el.textContent);
  });
  // 类似map用法
  console.log(Array.from([1,3,5], item => item * 2));

}

// Array.fill()
{
  // 填充整个数组
  console.log('fill-8', [1, 'a', undefined].fill(8));
  // 填充数据特定区间 [)
  console.log('fill, pos', ['a', 'b', 'c'].fill(8, 1, 3));
}
// keys,values,entries
{
  for (const index of ['es6', 'es7', 'es8'].keys()) {
    console.log('key', index);
  }
  for (const index of ['es6', 'es7', 'es8'].values()) {
    console.log('key', index);
  }
  for (const [index, value] of ['es6', 'es7', 'es8'].entries()){
    console.log('key-value', `${index}-${value}`);
  }
}

{
  console.log([1,2,3,4,5].copyWithin(0,3,4));
}

{
  console.log('value', [1,2,3,4,5,6].find(item => item > 3));
  console.log('index', [1,2,3,4,5,6].findIndex(item => item > 3));
}

{
  console.log('has 1', [1,2,NaN].includes(1));
  console.log('has NaN', [1,2,NaN].includes(NaN));
}
