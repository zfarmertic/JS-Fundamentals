const args = process.argv;
const parsedOne = parseInt(args[2]);

const factorial = () =>{
    if(isNaN(parsedOne) || parsedOne === 0 ){
        console.log(1)
    }else if(parsedOne > 0){
        let factorial = 1;
         let factorialAnswer = parsedOne;
        for (let i = 1; i< parsedOne; i++){
           

           factorialAnswer = factorialAnswer * i;
        }
        
        console.log(factorialAnswer)
    }
   
}
factorial()