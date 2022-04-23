const emoji = ["👯‍♂️" , "🧖‍♀️" , "🧗" , "🕺" , "😺"];

const test = () =>{
        return emoji[(Math.floor(Math.random()*emoji.length))]   
}

exports.test=test