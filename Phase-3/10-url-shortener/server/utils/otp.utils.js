
export const generateOtp = ()=>{
    return (Math.random() * (999999-100000 + 1))+ 100000
}