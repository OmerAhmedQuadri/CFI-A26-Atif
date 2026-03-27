import readlineSync from 'readline-sync'
let rows=readlineSync.questionInt("Enter the no.of rows: ")
let cols=readlineSync.questionInt("Enter the no.of cols: ")
while(rows<=0||cols<=0){
    console.log(rows,cols);
    rows=readlineSync.questionInt("Enter a positive row number!: ")
    cols=readlineSync.questionInt("Enter a positive cols number!: ")
}
let matrix=Array(rows)
for(let i=0;i<matrix.length;i++){
    matrix[i]=Array(cols)
    for(let j=0;j<matrix[i].length;j++){ 
        matrix[i][j]=readlineSync.questionInt(`Enter the elements of the array ${i+1}:${j+1}-`)
        if(matrix[i][j]<0){
            console.log("please enter positive number!: ");
            j--
        }
    }
}
console.log(matrix);
