import React , {useState} from 'react'

import { Box , TextField , Button , styled , Typography } from '@mui/material'

// CSS using material ui 
const Component = styled(Box) `
   width : 400px;
    margin : auto ;
    box-shadow : 5px 2px 5px 2px rgb(0 0 0/ 0.6)
`

// capital latter : HTML elem desing using material ui : 
const Image = styled('img')({
         width:   100 ,   
         margin: 'auto' ,
         display : 'flex',
         padding : '50px 0 0'  
    }
)

const Wrapper = styled(Box)`
   padding : 25px 35px ;
   display : flex ;
   flex : 1 ;
   flex-direction : column;
   & > div , & > btn  , & > p { 
       margin-top : 20px ; 
   }
`

const LoginButton = styled(Button)`
   text-transform : none;
   margin-top : 20px;
   background : #FB641B;
   color : #fff;
   height : 48px;
   border-radius : 2px;
`
const SignupButton = styled(Button)`
   text-transform : none;
   background : #fff;
   color : #2874fe;
   height : 48px;
   border-radius : 2px;
   box-shadow : 0 2px 4px 0 rgb(0 0 0 / 20%);
`
const singupIntialValues = {
  name : "",
  username : "",
  password : ""
}


const Login = () => {

  const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';

const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;

const [account,toggleAccount] = useState('login');
const [signup,setSignup] = useState(singupIntialValues);


const toggleSignup = () => { 
    if( account === "login") 
       toggleAccount("signup");
    if( account === "signup") 
      toggleAccount("login");
}



const onInputChange = (e) =>{
  console.log(e.target.value);
  setSignup({...signup,[e.target.name]: e.target.value});
}

  return (
    <Component>
      <Box> 
            <Image src={imageURL} alt="" />
           
           {
           account === "login" ? 
            <Wrapper>
                <TextField variant="standard" label="Enter username"/>
                <TextField variant="standard" label ="Enter password"/>
                <LoginButton variant= "contained">Login</LoginButton>
                <Text style = {{textAlign : "center"}}>OR </Text>
                <Button  onClick = {()=>toggleSignup()}>CREATE AN ACCOUNT</Button>
            </Wrapper>
           : 
            <Wrapper>
                <TextField variant="standard" name = "name" onChange = { (e)=> onInputChange(e)}  label="Enter Name"/>
                <TextField variant="standard" name = "username" onChange = { (e)=> onInputChange(e)}   label ="Enter Username"/>
                <TextField variant="standard" name = "password" onChange = { (e)=> onInputChange(e)}   label ="Enter Password"/>
                
                <SignupButton  variant= "contained">Sign up </SignupButton>
                <Text style = {{textAlign : "center"}}>OR </Text>
                <LoginButton  variant= "contained" onClick = {()=>toggleSignup()}>Already have Account </LoginButton>
            </Wrapper>
    }
      </Box>
    </Component>
  )
}

export default Login
