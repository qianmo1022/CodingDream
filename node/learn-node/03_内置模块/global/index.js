// console.log(globalThis === global);

// globalThis.userInfo = {
//     name: 'Tom',
//     age: 18
// }

// console.log(Object.getOwnPropertyNames(global));

// __filename   __dirname
// console.log(__filename);
// console.log(__dirname);

// process
// console.log(process.argv);// 命令行参数
// console.log(process.cwd());// 当前工作目录
// console.log(process.env);// 环境变量
// console.log(process.pid);// 进程id
// console.log(process.platform);// 平台信息,读取操作系统平台信息
// console.log(process.arch);//读取操作系统CPU架构

// process.stdout.write('hello world');// 标准输出
// process.stdout.write(' ');
// process.stdout.write('\n');
// process.stdout.write('ok');

process.stdout.write('Are you sure you want to?');// 标准输出
process.stdin.on('data', (data) => {// 标准输入
    console.log(`用户输入了:${data}`);
})