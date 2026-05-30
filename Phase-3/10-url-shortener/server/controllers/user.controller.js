

export const getUserDetails = async(req, res)=>{
    const user = req.user
    return res.status(200).send({
        success: true,
        message: 'User details Fetched succcessfully',
        data: user
    })
}