let args = process.argv;

if(args[2] === undefined){
    console.log("Not a number")
}else{
    const parsedNumber = parseInt(args[2])
    if(isNaN(parsedNumber)){
        console.log("Not a number")
    }else{
        console.log(`My number: ${parsedNumber}`)
    }
    
}