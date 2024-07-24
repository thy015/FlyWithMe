const services=require('../services/services')
const signUpCustomer=async(req,res)=>{
    try{
        console.log(req.body)
        const{name,passWord,email,phoneNum}=req.body

        if(!name||!phoneNum|| !email |!passWord){
            return res.status(403).json({message:'Input is required'})
        }else if(!validateEmail(email)){ 
            return res.status(400).json({ message:'Invalid email'})
        }
        
        const result= await services.signUpCustomer(req.body)
        return res.status(201).json(result)

    }
    catch(e){
        return res.status(500).json({message:e})
    }
}

const signInCustomer = async (req, res) => {
    try {
        const { email, passWord } = req.body;

        if (!email || !passWord) {
            return res.status(403).json({ message: 'Input is required' });
        }
        const result = await services.signInCustomer(req.body);
        if (result.status === 'OK') {
            return res.status(200).json(result);
        } else {
            return res.status(400).json(result);
        }
    } catch (e) {
        return res.status(500).json({ message: e });
    }
};
const signInAdmin= async (req, res) => {
    try {
        const { email, passWord } = req.body;

        if (!email || !passWord) {
            return res.status(403).json({ message: 'Input is required' });
        }
        const result = await services.signInAdmin(req.body);
        if (result.status === 'OK') {
            return res.status(200).json(result);
        } else {
            return res.status(400).json(result);
        }
    } catch (e) {
        return res.status(500).json({ message: e });
    }
};

function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }

module.exports={
    signUpCustomer,
    signInCustomer,
    signInAdmin
}
