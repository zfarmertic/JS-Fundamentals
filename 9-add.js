const args = process.argv;
const parsedOne = parseInt(args[2]);
const parsedTwo = parseInt(args[3]);

const add = () =>{
    if(isNaN(parsedOne) && isNaN(parsedOne)){
        console.log(NaN)
    }else{
         const answer = parsedOne + parsedTwo;
            console.log(answer);
    }
   
}
add()
