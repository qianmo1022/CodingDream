function foo() {
    var myName ='旭旭'
    let test1 = 1 
    let test2 = 2
    var innerBar = {
        getName:function(){
            console.log(test1)
            return myName
        },
        setName:function(newName){
            myName = newName
        }
    }
    return innerBar
}//形成了闭包，闭包中的内容为innerBar，innerBar中的内容为getName和setName，getName中的内容为test1和myName，setName中的内容为myName

var bar = foo()
bar.setName('浪哥')
console.log(bar.getName());