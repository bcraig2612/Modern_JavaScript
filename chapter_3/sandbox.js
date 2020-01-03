// *** CONTROL FLOW ***

// ** FOR LOOP **
// for(let i = 0; i < 5; i++){
//     console.log('in loop:', i);
// }
// console.log('loop has finished!');

// const names = [ 'Bob', 'Nick', 'Ted' ];

// for(let i = 0; i < names.length; i++) {
    // console.log(i, names[i]);
    // let html = `<div> ${names[i]} </div>`;
    // console.log(html);
// }


// ** WHILE LOOPS **
// let i = 0;

// while( i < 5 ) {
    // console.log('in loop: ', i);
    // i++;
// }


// const names = ['Bob', 'Nick', 'Ted'];
// let i = 0;

// while(i < names.length) {
//     console.log(names[i]);
//     i++;
// }

// ** DO WHILE LOOPS **
// let i = 0;

// do{
//     console.log('value of i is: ', i);
//     i++;
// } while( i < 5 );


// ** IF STATEMENTS **
// const age = 25;

// if(age > 20) {
//     console.log('You are over 20 years old.')
// }

// const ninjas = [ 'Brandon', 'Ethan', 'Christian', 'Brian' ];

// if(ninjas.length > 3) {
//     console.log("That's alot of ninjas!");
// }

// const password = 'password123';

// if( password.length >= 10 ) {
//     console.log('That password is long enough!');
// }


// ** ELSE & ELSE IF **
// const password = 'p@ss';

// if( password.length >= 12 ) {
//     console.log('That password is super solid!');
// } else if( password.length >= 8 ) {
//     console.log('That password is long enough!');
// } else {
//     console.log('That password is not long enough.');
// }


// ** LOGICAL OPERATORS ( OR --> || ) ( AND --> && ) **
// const password = 'ps@s12111ssss';

// if(password.length >= 12 && password.includes('@')) {
//     console.log('That password is super solid!');
// } else if(password.length >= 8 || password.includes('@') && password.length >= 5) {
//     console.log('That password is good enough but not super solid!');
// } else {
//     console.log('That password is not going to cut it...');
// }


// ** LOGICAL NOT ( ! )**
// let user = false;

// if( !user ){
//     console.log('You must be logged in to continue!');
// }

// ** BREAK & CONTINUE **
// const scores = [ 50, 25, 0, 30, 100, 20, 10 ];

// for( let i = 0; i < scores.length; i++ ) {
    // if(scores[i] === 0) { 
        // continue; // it doesn't log 0 to the console. it just continues to the next loop.
    // }
    // console.log('Your Score: ', scores[i]);
    // if(scores[i] === 100) {
        // console.log('Congrats, you got the top score!');
        // break; // once a score of 100 is reached. we don't continue looping. 
    // }
// }

// ** SWITCH STATEMENTS **
// const grade = 'A';

// switch(grade) {
//     case 'A':
//         console.log( 'You got an A! Keep up the hard work!' );
//         break;
//     case 'B':
//         console.log( 'You got a B! Great job.' );
//         break;
//     case 'C':
//         console.log( 'You got a C! Keep working hard!' );
//         break;
//     case 'D':
//         console.log( 'You got a D! You need to step it up.' );
//         break;
//     case 'F':
//         console.log( 'You got an F! You failed the class..' );
//         break;
//     default:
//         console.log('Not a valid grade.');
// }

// using if statements
// const grade = 'D';

// if( grade === 'A' ) {

// } else if( grade === 'B' ) {

// } else if( grade === 'C' ) {

// } else if( grade === 'D' ) {

// } else if( grade === 'E' ) {

// } else {

// }


// ** VARIABLES * BLOCK SCOPE **
let age = 30; // GLOBAL SCOPE
let name = 'Brandon'; // GLOBAL SCOPE
console.log('Before the code blocks: ', age, name );

if(true) {
    // You can re-declare using let within the code block. It will only be accesible within the block.
    // This is LOCAL SCOPE
  let age = 40;
  let name = 'Shaun';
    console.log( 'Inside of the code block: ', age, name );

 if(true) {
     // Only accesible withing this 2nd block.
     // LOCAL SCOPE
     let age = 50; 
     let name = 'Bill';
     console.log( 'Inside the 2nd code block: ', age, name );
 }   
}
// The GLOBAL SCOPE is accessed because the other instances are LOCAL, within the code blocks using either LET or CONST
console.log( 'After the code blocks: ', age, name );