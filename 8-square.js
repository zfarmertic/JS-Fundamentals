const args = process.argv;
const parsed = parseInt(args[2]);

let row = 0;
if (isNaN(parsed)){
    console.log("Missing size")
}else {
    let col = 0;
    while ( col < parsed){
        let line = ''
        let row = 0;
    while (row < parsed){
            line += "x"
            // console.log(line)
            row++;
        }
        console.log(line)
        col++;
    }
}