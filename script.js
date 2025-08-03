function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here
	    let arr = [];
   while (num >= 1000) {
        arr.push(1000);
        num -= 1000;
    }
    if (num >= 900) {
        arr.push(100, 1000);
        num -= 900;
    }
    if (num >= 500) {
        arr.push(500);
        num -= 500;
    }
    if (num >= 400) {
        arr.push(100, 500);
        num -= 400;
    }
    while (num >= 100) {
        arr.push(100);
        num -= 100;
    }
    if (num >= 90) {
        arr.push(10, 100)
        num -= 90;
    }
    if (num >= 50) {
        arr.push(50);
        num -= 50;
    }
    if (num >= 40) {
        arr.push(10, 50);
        num -= 40;
    }
    while (num >= 10) {
        arr.push(10);
        num -= 10;
    }
        if (num == 9) {
        arr.push(1, 10)
        num -= 9;
    }
    if (num >= 5) {
        arr.push(5);
        num -= 5;
    }
    if (num == 4) {
        arr.push(1, 5);
        num -= 4;
    }
    while (num >= 1) {
        arr.push(1);
        num -= 1;
    }

    let roman = '';
     for (let index in arr){
         for ( romanarr of Object.values(obj)){
            if(arr[index]==romanarr[1])
                arr[index]=romanarr[0];
         }


     }
    // console.log(Object.values(obj));
    return arr.join('');
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
