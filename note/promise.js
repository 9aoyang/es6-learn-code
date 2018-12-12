{
  let ajax = callback => {
    console.log('执行1');
    setTimeout(() => {
      callback && callback.call()
    }, 1000);
  }

  ajax(_ => console.log('timeout1'))
}

{
  let ajax = callback => {
    console.log('执行2');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, 1000);
    })
  }

  ajax().then(_ => console.log('timeout2'))
}

{
  let ajax = callback => {
    console.log('执行3');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, 1000);
    })
  }

  ajax()
    .then(_ => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, 2000);
    })
  })
    .then(_ => console.log('timeout3'))
}

{
  let ajax = num => {
    console.log('执行4');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (num > 5) {
          resolve(num)
        } else {
          throw new Error('出错了')
        }
      }, 1000);
    })
  }

  ajax(6)
    .then( _ => console.log('log', 6) )
    .catch( err => console.log('catch', err) )

  ajax(3)
  .then( _ => console.log('log', 3) )
  .catch( err => console.log('catch', err) )
}

{
  // 所有图片加载完再添加到页面
  function loadImg(src) {
    return new Promise((resolve, reject) => {
      let img = document.createElement('img')
      img.src = src
      img.onload = _ => {
        resolve(img)
      }
      img.onerror = _ => {
        reject(err)
      }
    })
  }

  function showImgs(imgs) {
    imgs.forEach( img => document.body.appendChild(img))
  }

  Promise.all([
    loadImg('https://pic4.zhimg.com/80/v2-c4a3b89def844b4627cc462768d81053_hd.jpg'),
    loadImg('https://pic2.zhimg.com/80/v2-bd90f0d5e213c64f69aecc79d4638da8_hd.jpg'),
    loadImg('https://pic1.zhimg.com/80/v2-c5883669a76f6d5db23f2aa4d8e11272_hd.jpg')
  ]).then(showImgs)
}

{
  // 有一个图片加载完就显示到页面
  function loadImg(src) {
    return new Promise((resolve, reject) => {
      let img = document.createElement('img')
      img.src = src
      img.onload = _ => {
        resolve(img)
      }
      img.onerror = _ => {
        reject(err)
      }
    })
  }

  function showImg(img) {
    let p = document.createElement('p')
    p.appendChild(img)
    document.body.append(p)
  }

  Promise.race([
    loadImg('https://pic4.zhimg.com/80/v2-c4a3b89def844b4627cc462768d81053_hd.jpg'),
    loadImg('https://pic2.zhimg.com/80/v2-bd90f0d5e213c64f69aecc79d4638da8_hd.jpg'),
    loadImg('https://pic1.zhimg.com/80/v2-c5883669a76f6d5db23f2aa4d8e11272_hd.jpg')
  ]).then(showImg)
}

