{
  let obj = {
    time: '2017-12-10',
    name: 'net',
    _r: 123
  }

  let monitor = new Proxy(obj, {
    // 拦截对象属性的读取
    get(target, key) {
      return target[key].replace('2017', '2018')
    },
    // 拦截对象设置属性
    set(target, key, value) {
      return key === 'name' ? target[key] = value : target[key]
    },
    // 拦截key in object操作
    has(target, key) {
      return key === 'name' ? target[key] : false
    },
    // 拦截delete
    deleteProperty(target, key) {
      if (key.startsWith('_')) {
        delete target[key];
        return true;
      } else {
        return target[key]
      }
    },
    // 拦截Object.keys, Object.getOwnPropertySymbols, Object.getOwnPropertyNames
    ownKeys(target) {
      return Object.keys(target).filter(item => item !== 'time')
    }

  })

  // console.log('get', monitor.time);
  // monitor.time = '2018'
  // console.log('set', monitor.time);
  // monitor.name = 'newName'
  // console.log('set', monitor.name);
  // console.log('has', 'name' in monitor, 'time' in monitor);

  // delete monitor.time
  // console.log('delete', monitor);
  // delete monitor._r
  // console.log('delete', monitor);

  console.log('ownKeys', Object.keys(monitor));

}

{
  let obj = {
    time: '2017-12-10',
    name: 'net',
    _r: 123
  }

  console.log('Reflect.get', Reflect.get(obj, 'time'));
  Reflect.set(obj, 'name', '9aoyang')
  console.log(obj);
  console.log('has', Reflect.has(obj, 'name'))
}

{
  function validator(target, validator) {
    return new Proxy(target, {
      _validator: validator,
      set(target, key, value) {
        if(target.hasOwnProperty(key)) {
          let va = this._validator[key]
          if (!!va(value)) {
            return Reflect.set(target, key, value)
          } else {
            throw Error(`不能设置${key}到${value}`)
          }
        } else {
          throw Error(`${key} 不存在`)
        }
      }
    })
  }

  const personValidator = {
    name (val) {
      return typeof val === 'string'
    },
    age (val) {
      return typeof val === 'number' && val > 18
    }
  }

  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age
      return validator(this, personValidator)
    }
  }

  const person = new Person('9aoyang', 23)

  console.info(person)
  person.name = 'heke'
  console.log(person);
}

