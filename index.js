// code your solution here
function saturdayFun(msg="roller-skate"){
    return `This Saturday, I want to ${msg}!`;
    }
    function mondayWork(activity="go to the office"){
        return `This Monday, I will ${activity}.`;
    }
    function wrapAdjective(comment='*'){
     return function(attr = "special"){
         return `You are ${comment}${attr}${comment}!`
     }
    }