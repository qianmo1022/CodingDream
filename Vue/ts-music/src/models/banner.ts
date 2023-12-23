// 给banner接口 建立一个接口
// 接口 :3000/banner -> store -> components -> banner.vue
// 接口 类Java等强类型的接口定义 vuex ts类型检测
// 接口定义数据类型模型接口
// 数据表结构定义
export interface Banner {
    pic: string;
    targetId: number;
    targetType: number;
    typeTitle: string;
    bannerId: number;
}
// 跟vuex 一道，把数据严谨再严谨
// let banner,Banner = { pic: '范家吵架图', targetId: 1, targetType: 1, typeTitle: '范冰冰', bannerId: 1, }


