const jwt=require('jsonwebtoken')
const dotenv=require('dotenv')
dotenv.config()

const generalAccessTokens=async(payload)=>{
    console.log(payload)
    if (!process.env.ACCESS_TOKEN) {
        throw new Error('ACCESS_TOKEN environment variable is not set');
    }

    const access_token=jwt.sign({
        payload
    },process.env.ACCESS_TOKEN,{expiresIn:'24h'})
    
    return access_token
}

const refreshAccessTokens=async(payload)=>{
    const refresh_token=jwt.sign({
        payload
    },process.env.REFRESH_TOKEN,{expiresIn:'365d'})
    
    return refresh_token
}

const authenToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.status(401).json({ message: 'missing token' });

    jwt.verify(token, process.env.ACCESS_TOKEN, (error, user) => {
        if (error) {
            console.error("Token verification failed:", error);
            return res.sendStatus(403);
        }
        console.log("Token owner:", user);
        req.MaKH = user.id;
        next();
    });
}


module.exports={
    generalAccessTokens,
    refreshAccessTokens,
    authenToken
}