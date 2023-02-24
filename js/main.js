/* 1 creare un ciclo (for) che stampi i numeri da uno a 100.

   2 creare un (if) che esegua un operazione per cui SE i = ( i % 3 )
   ALLORA stampi Fizz al posto del valore normale.

   3 creare un (if) che esegua un operazione per cui SE i = ( i % 5 )
   ALLORA stampi Buzz al posto del valore normale.

   4 creare un (if) che esegua un operazione per cui SE i = ( i % (3*5))
   ALLORA stampi FizzBuzz al posto del multiplo di 3 o di 5.
*/
let Fizz = "Fizz";
let Buzz = "Buzz";
let FizzBuzz = "FizzBuzz";

for (let i = 1; i <= 100; i++) {

    if (i % (3 * 5) == 0) {

    console.log(FizzBuzz);

    } else if (i % 5 == 0 ) {

    console.log(Buzz);

    } else if (i % 3 == 0) {

    console.log(Fizz);

    } else {

        console.log(i)

    }

}


