let argument = process.argv


if(argument[2] === undefined){
    console.log(`${argument[2]} is ${argument[2]}`)
}else if(argument[2] && argument[3]){
    console.log(`${argument[2]} is ${argument[3]}`)
}else if(argument[2] && argument[3] === undefined){
    console.log(`${argument[2]} is ${argument[3]}`)
}