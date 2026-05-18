const validateUserRegistrationData={userData} =>{
    const errors=[]
    if(!userData.email){
        errors.push({
            feild: 'email',
            message: 'Valid email address is required'
        })
    }
    if(!userData.phone){
        errors.push({
            feild: 'phone',
            message: 'Valid phone is required'
        })
    }
    if(!userData.fullname){
        errors.push({
            feild: 'fullname',
            message: 'Valid fullname is required'
        })
    }
    if(!userData.password || userData.password.length < 3){
        errors.push({
            feild: 'email',
            message: 'Valid password is required with 3 characters'
        })
    }
    return errors
}   

export const registerMiddleware = async (req , res)=>{
    try {
        
    } catch (error) {
        
    }
}