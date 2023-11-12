//es6 class 企业级开发，大型项目，学Java
class SingleDog {
    //属于对象的
    show() {
        console.log('我是一个单例对象');
    }
    // 属于类的
    // 不要直接new
    // static intance
    static getInstance() {
        // console.log('静态方法');
        if (!SingleDog.instance) {
            // 不存在，就new一个         
            SingleDog.instance = new SingleDog();
        }
        return SingleDog.instance;
    }
}
// 类的方法
const s1 = SingleDog.getInstance() 
const s2 = SingleDog.getInstance()
console.log(s1 === s2); // true，同一个对象，同一个内存空间，值也一样，就是单例模式
// new过程 不同内存 同一个房间
// s1 s2 里面的值 是地址
// 同一个地址 先生成地址 ，然后再new一下去判断 如果已经有了 就不用再new了
// 实例化过程中if else判断
// 单例模式 一般都是静态方法