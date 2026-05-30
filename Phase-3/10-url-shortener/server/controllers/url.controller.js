import { saveUrl } from "../services/url.services"


export const createShortUrl = async(req, res)=>{
    const {url} = req.body || {}
    if(!url){
        return res.status(400).send({
            success: false,
            message: 'Long Url is required'
        })
    }

    const shortUrl = await saveUrl(url)

    const BASE_URL = process.env.DOMAIN

    return res.status(200).send({
        success: true,
        message: 'Short Url created Successfully',
        data: {
            shortUrl: BASE_URL + shortUrl
        }
    })
}

export const redirect = async(req, res)=>{
    const shortUrl = req.params.shortUrl
    const {longUrl} = await getlongUrl(shortUrl)

    if(!longUrl){
        return res.status(400).send({
            success: false,
            message: 'Short Url not found'
        })
    }

    res.redirect(longUrl)
}