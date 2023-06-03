import User from '../model/user.js'
// API user : 2 i/p  rqurest -> frontend to banced    
// response bankend to frontend 
export const  signupUser = async (request,response) => {

     try{

        const user  = request.body;

       const newUser = new User(user);
       
       await newUser.save();

       return response.status(200).json({msg : 'signup sucessful '});
     }catch(error)
     {
        return response.status(500).json({msg: 'Erro while signup the user'});
     }
}