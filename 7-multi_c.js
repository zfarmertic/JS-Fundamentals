const args = process.argv
const parsed = parseInt(args[2])
let i = 0
if(isNaN(parsed)){
    console.log("Missing number of occurrences")
}else{
    while ( i < parsed){
        console.log("C is fun")
        i++
        console.log(i)
    }
}