let arguments = process.argv
// arguments.forEach((val, index)=>{
//    if(arguments[index] === undefined){
//     console.log("No argument")
//    }
// })


 if(arguments[2] === undefined){
    console.log("No argument")
    }else if(arguments[2]){
    console.log(arguments[2])
    }else {
    console.log("Arguments found")
    }

