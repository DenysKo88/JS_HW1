const age_2 = 18;
const age_3 = 60;

const checkAge = function(age_1){
    if(age_1 && !isNaN(age_1)) {
        if (age_1 < age_2){
        alert("You don`t have access, cause your age is " + age_1 + " " + "It`s less then")
        } else if (age_1 >= age_2 && age_1 < age_3){
        alert("Welcome!")
        } else if (age_1 > age_3){
        alert("Keep calm and look culture channel")
        } else {
        alert("Technical work")
        }
    } else console.log('Not an integer value')
    }
   let a = prompt("Enter your age")
   checkAge(a)