//-------(1) Topic: Online Store Discount Calculator

// function calculateDiscountedAmount(purchaseAmount) {
//   var purchaseAmount = prompt();
//   if(purchaseAmount<50){
//       console.log('No Discount!');
//   }else if(purchaseAmount>=50 && purchaseAmount<100){
//     const discountAmount = (purchaseAmount * 5) / 100;
//     const discountedTotalAmount = purchaseAmount - discountAmount;
//       console.log('Your Purchase Amount is: ' + purchaseAmount);
//       console.log('Your 5% Discount Amount is: '+ discountAmount)
//       console.log('Your Discounted Total Amount is: ' + discountedTotalAmount);
//   }
//   else if(purchaseAmount>=100 && purchaseAmount<200){
//     const discountAmount = (purchaseAmount * 10) / 100;
//     const discountedTotalAmount = purchaseAmount - discountAmount;
//     console.log('Your Purchase Amount is: ' + purchaseAmount);
//     console.log('Your 10% Discount Amount is: '+ discountAmount)
//     console.log('Your Discounted Total Amount is: ' + discountedTotalAmount);
//   }
//   else{
//     const discountAmount = (purchaseAmount * 15) / 100;
//     const discountedTotalAmount = purchaseAmount - discountAmount;
//     console.log('Your Purchase Amount is: ' + purchaseAmount);
//     console.log('Your 15% Discount Amount is: '+ discountAmount)
//     console.log('Your Discounted Total Amount is: ' + discountedTotalAmount);
//   }
// }
// calculateDiscountedAmount();

//--------(2) Topic: Filter Even Numbers------------

// var num = [10,20,30,38,35,40,50,56,60,75,87,93,100];
// var result = num.filter(function(item){
//    return item % 2 === 0;
// });
// console.log(result);

//--------(3) Topic: Multiplication Table Generator-----------

// function calculateMultiplicatio(){
//  var number = prompt(parseInt());
//     for(i=1; i<=10; i++){
//     console.log(`${number}*${i} = ${number*i}`);
//     }
// }
// calculateMultiplicatio();

//---------(4) Topic: Grade Calculator----------

function calculateGrade(){
 var Marks = prompt();
 switch(true){
    case(Marks<=100 && Marks>=90):
        console.log('A');
    break;

    case(Marks<90 && Marks>=80):
         console.log('B');
    break;
    
    case(Marks<80 && Marks>=70):
         console.log('C');
    break;

    case(Marks<70 && Marks>=60):
         console.log('D');
    break;

    default: console.log('F')
  }
}
calculateGrade();
