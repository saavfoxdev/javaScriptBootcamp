let name 
name= 'jen'
if (name === undefined){
    console.log('please provide a name')
}
else {
    console.log(name)
}

//undefined function arguments

let square = function (num)
{
    console.log(num)

}
let result = square()
console.log(result)


let age = 27
age = null
console.log(age)