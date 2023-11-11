let date = new Date();

let time = date.getFullYear()+'年'+(date.getMonth()+1)+'月'+date.getDate()+'日'+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();

// let t = `${date.getFullYear()}年${(Number(date.getMonth())+1)}月${date.getDate()}日${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

console.log(time);