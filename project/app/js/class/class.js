{
  class Parent {
    constructor(name = 'parent') {
      this.name = name
    }
  }

  let v_parent = new Parent('v')
  console.log(v_parent);
}

{
  // 继承
  class Parent {
    constructor(name = 'parent') {
      this.name = name
    }
  }

  class Child extends Parent {

  }

  console.log('继承', new Child());

}

{
  // 继承
  class Parent {
    constructor(name = 'parent') {
      this.name = name
    }
  }

  class Child extends Parent {
    constructor(name) {
      super(name)
      this.type = 'child'
    }
  }

  console.log('继承', new Child('child'));
}

{
  // getter, setter
  class Parent {
    constructor(name = '9aoyang') {
      this.name = name
    }

    get longName() {
      return 'prefix_' + this.name
    }

    set longName(value) {
      this.name = value
    }
  }

  let v = new Parent()
  console.log('getter', v.longName);
  v.longName = 'hello_world'
  console.log('setter', v.longName);
}


{
  // 静态方法
  class Parent {
    constructor(name = '9aoyang') {
      this.name = name
    }
    static tell() {
      console.log('tell');
    }
  }
  Parent.tell()
}

{
  // 静态属性
  class Parent {
    constructor(name = '9aoyang') {
      this.name = name
    }
  }

  Parent.type = 'static.property'
  console.log('静态属性', Parent.type);
}
