let a = 0, b = 1;
let n = 10;
if(!Number.isNaN(n)) {
    if(n==1)
    console.log(a);
    else if(n==2)
    console.log(a,b);
    else{
        let counter = 0;
        for(counter = 0; counter < n; counter++) {
            let sum = a+b;
            console.log(a);
            a=b;
            b=sum;
        }
    }
}