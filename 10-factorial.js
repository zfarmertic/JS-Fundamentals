

function factorial (n) {
    if (isNaN(n) || n === 0 ){
        return 1;
    }else {
    return (n * factorial(n - 1))
    }
   
}

const args = process.argv;
const parsedOne = parseInt(args[2]);

console.log(factorial(parsedOne))