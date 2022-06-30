const age_2 = 18;
const age_3 = 60;

const checkAge = function(age_1){
    if(age_1 && !isNaN(age_1)) {
        if (age_1 < age_2){
        console.log("You don`t have access, cause your age is " + age_1 + " " + "It`s less then")
        } else if (age_1 >= age_2 && age_1 < age_3){
        console.log("Welcome!")
        } else if (age_1 > age_3){
        console.log("Keep calm and look culture channel")
        } else {
        console.log("Technical work")
        }
    } else console.log('Not an integer value')
    }
    checkAge(17)
    checkAge(18)
    checkAge(60)
    checkAge(61)
    checkAge('fff')
    checkAge('20')
    checkAge('0')