// 1,3,6,10,15...
// Pattern - 1, (1+2=3), (3+3=6), (6+4=10), (10+5=15)...
let a=1;
let n=6; //user input
if(n==1)
console.log(a);
else
{
    for(let i=2;i<=n+1;i++){
        console.log(a);
        a = a+i;
    }
}