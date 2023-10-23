// 监听用户敲击enter键
var input = document.getElementById('list-input')
var ul=document.getElementById('list')

// input.onkeyup = function (e) {
//     if (e.keyCode === 13) {
//         // 读取到input中的值
//         console.log(input.value);
        
//         // 生成li结构
//         // 将input中的值添加到li中
//         var todoList = `
//             <li>
//                 <input type="checkbox">
//                 <span>${input.value}</span>
//             </li> 
//             `

//         //将li添加到ul中
//         ul.insertAdjacentHTML('afterbegin',todoList)
//         input.value=''

//     }
// }


var todoItem = []
input.onkeyup = function (e){
    if (e.keyCode===13&&input.value!=='') {
            todoItem.push(input.value)
            makelist()
    }
}

function makelist() {
    //循环数组todoItem,生成多份li结构，添加到ul中
    //for
    //todoItem.lenth
    //todoItem[i]
    ul.innerHTML=''
    for (let i = 0; i < todoItem.length; i++) {
        ul.insertAdjacentHTML('afterbegin',`
            <li>
                <input type="checkbox">
                <span>${todoItem[i]}</span>
            </li> 
        `)
    } 
    input.value=''
}


//监听添加的标签，并关联其前方的checkbox类型的input

//修改添加的标签被勾选后的样式为删除线

//同时再次取消被勾选标签时可以恢复原状态