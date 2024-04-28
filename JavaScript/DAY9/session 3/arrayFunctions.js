var items=new Array();
items.push("leadership");
items.push("communication");
items.push("sale");
var increementedItems=new Array();
items.forEach((x)=>{
    console.log(x);
    increementedItems.push(x+1);
});
console.log("****increemented Array****")
increementedItems.forEach((y)=>{
    console.log(y);
})