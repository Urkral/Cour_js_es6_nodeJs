const User =(username, email, website) =>{
    return{
        username,
        email,
        blog : website
    }
}

const createMyAvatar = (email)=>{
    return `https://gravata.com/avatar/${email}`
}

export {User, createMyAvatar as createA}
// on définit que createMyAvatar est = a createA