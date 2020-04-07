// ES6
// class Person {
//     static sc = '123'
//     static st = function () {
//         console.log('my st')
//         console.log(this)
//     }
//     name = ''
//     constructor(name) {
//         this.name = name;
//         console.log('i am 构造函数')
//     }
//     a = 'my a'
//     mth = function () {
//         console.log('my mth')
//         console.log('mth:', this)
//     }
// }

// console.log(Person)
// Person.st();
// var b = new Person('Tom')
// console.log(b)
// b.mth()


function Person(name) {
    this.name = name;
    // console.log('i am person', this)

}

// let r = Person();   // 普通函数
// console.log('r', r)


let p = new Person('Tom') // 构造函数 == 类
console.log('p', p)


function create() {
    console.log(arguments)
    let obj = {};
    // let cls = arguments[0];
    // let args = arguments.slice(1);
    let [cls, ...args] = arguments;
    console.log(cls, args);

    obj.__proto__ = cls.prototype; // 父亲的原型链

    cls.apply(obj, args);

    return obj;
}


let vir = create(Person, 'Tom', 'boy')
console.log(vir)
