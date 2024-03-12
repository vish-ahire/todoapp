export const validateValue=(data)=>{
    let error = {}
    
    if (!data.email) error.email = "Please Enter a Email";
    else if (!/\S+@\S+\.\S+/.test(data.email))
        error.email = 'Email is not valid'

    if (!data.password) error.password = "Please Enter a Password"
    else if (!/(?=.*[a-z])(?=.*[A-Z]).{6,}/g.test(data.password))
        error.password = 'Password should be  6 characters long and contain at least one upper case letter,one lowercase letter.'
    
    if(!data.age && data.age==0) error.age="please  enter your age"
    
    else if(data.age <= 12) error.age='Age must be greater than 12';
    return error;
}

