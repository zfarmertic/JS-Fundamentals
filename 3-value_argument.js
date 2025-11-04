let arguments = process.argv
if(arguments[2] === undefined){
    console.log("No argument")
}else if(arguments[2] !== undefined){
    console.log("Argument found")
}else {
    console.log("Arguments found")
}