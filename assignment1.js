//Q1--Write a JavaScript function to get an array and to read the first element of an array. Check whether it is prime or not. 
function checkprime(number)
{
    for (let i = 2;i<number;i++){
        if(number%i===0){
          }
        }
     }
     function detectPrime(array){
         if (checkprime){
             return true;
              }else{
                return false;
           }
   }
   console.log(detectPrime([15,110,7,22,25]));

//Q2--Write a JavaScript program to find the most frequent item of an array
let array1 =[13,20.30,40,30,40,50,60,40,40];
let maxcount = 0;
let max_element;
for(let i = 0;i<array1.length;i++) 
{
  let count=0;
  for (let j=0; j<array1.length;j++)
  {
  if (array1[i] == array1[j])
    count++;
  }
if (count > maxcount) {
  maxcount = count;
  max_element= array1[i];
      }
}
console.log(max_element+"  is most repeating element in the array");

//Q3--Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, check if the current number is odd or even, and display the message to the screen as odd or even.
for(let i=0;i<=15;i++)
{
    if(i%2==0)
    console.log(i+"-EVEN NUMBER");
    else
    console.log(i+"-ODD NUMBER")
}

//Q4--Write a JavaScript program to find the sum of squares of the elements of an array.
let array=[1,2,3,4];
console.log(array);
let sum=0;
for(let i=0;i<array.length;i++)
{
  array1=Math.pow(array[i],2);
  sum=array1+sum;
}
console.log("after squaring sum of all terms");
console.log(sum);
