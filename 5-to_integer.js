let args = process.argv;

if(args[2] === NaN || args[2] === undefined){
    console.log("Not a number")
}else{
    console.log(`My number: ${parseInt(args[2])}`)
}