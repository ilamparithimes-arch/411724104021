console.log("Print statement")

const a=20;
const b=30;
console.log(a+b)
const c="Alice"
console.log(c)
const arr=[1,2.4,"String",false]
console.log(arr)
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i])
}
arr[1]=3.1
console.log(arr[1])
arr.push("Ila")
console.log(arr)
arr.pop("Ila")
console.log(arr)


function example()
{
    console.log("Example test")

}
example()


const p=document.getElementById("one")
p.innerHTML="Print Statement"
const input=document.getElementById("a")
const output=document.getElementById("b")
input.addEventListener("input",()=>
{
    output.textContent=input.value
})


const first=document.createElement("h1")
first.textContent="Hello"
document.body.appendChild(first)

first.remove()