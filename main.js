//question1
function helloWorld(){
    console.log("Hello World")
}
helloWorld();

//question2
function greeting(name){
    console.log(`Hello, ${name}`)
}
greeting("Kevin");

//question3
function divisibleByThree(number){
    let result;
    if(number % 3 == 0)
    {
        result = true;
    }
    else
    {
        result = false;
    }
    console.log(result)
}
divisibleByThree(9);

//question4
function averageAge(num1, num2, num3){
    let average;
    let num;
    average = num1 + num2;
    num = 1;
    if(num3 != null)
    {
        average = average + num3;
        num = 2;
    }

    if(num == 1)
    {
        average = average / 2;
    }
    else
    {
        average = average / 3;
    }
    Math.round(average);
    console.log(`result is: ${average}`);
}
averageAge(2, 4, 6);
averageAge(10, 4);


//question5
function leetSpeak(word){
    for(i = 0; i < word.length; i++)
    {
        if (word.charAt(i) == 'e')
        {
            console.log("3");
        }
        else if(word.charAt(i) == 'a')
        {
            console.log("4");
        }
        else
        {
            console.log(word.charAt(i));
        }
    }
}
leetSpeak("Hello");
console.log("");
leetSpeak("Leetle Talk");