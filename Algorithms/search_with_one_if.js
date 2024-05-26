const kindOfSubscription = "Basic";

const options = {  
    "Free": () => {console.log("You can only take the courses for free")},  
    "Basic": () => {console.log("You can take almost all the courses for a month")},  
    "Expert": () => {console.log("You can take almost all the courses for a year.")},  
    "ExpertPlus": () => {console.log("You and someone else can take ALL courses for one year")},  
    "default": () => {console.log("You are not subscribed to the best learning platform")}
}
    
options[kindOfSubscription] ? options[kindOfSubscription]() : options["default"]()


