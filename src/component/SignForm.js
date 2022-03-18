import axios from 'axios';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import Input from '../comon/Input';

const SignForm = () => {
 
    const[formValue, setformValue]=useState(null);

    const validationSchema = Yup.object({
        name:Yup.string().required("Name is required").min(4,"Name lenght is not Valid"),
        email:Yup.string().email("Invalid email format").required("Email is required"),
        phonenumber:Yup.string().required("please write your number").matches(/^[0-9]{11}$/,"Invalid Phone Number").nullable(),
        password:Yup.string().required("password is required").matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
          ),
        passwordconfirm:Yup.string().required("password confirmation required").oneOf([Yup.ref('password'),null], 'Password must match'),
        gender:Yup.string().required("gender is required"),
    });
   
const initialValues={
    name:"",
    email:"",
    phonenumber:"",
    password:"",
    passwordconfirm:"",
    gender:"",
}
    useEffect(()=>{
        axios.get("http://localhost:3001/user/1").then(res=>setformValue(res.data)).catch(err=>console.log(err))
    },[])
    const formik = useFormik({
        initialValues: formValue|| initialValues,
        validationSchema,   
        validateOnMount:true,   
        enableReinitialize:true,
        
    })
    console.log(formik.errors);

    return (  
        <div className="formtable">
            <form onSubmit={formik.handleSubmit} className="form">
                <Input formik={formik} name="name" label="Name" />
                <Input formik={formik} name="email" label="Email" />
                
                <Input  formik={formik} name="phonenumber" label="Number"/>
                <Input  formik={formik} name="password" label="Password" type='password'/>
                <Input  formik={formik} name="passwordconfirm" label="Password Confirm" type='password'/>
                
                

                
                
                <div>
                    <input type="radio" id="0" name="gender" value="0" onChange={formik.handleChange} checked={formik.values.gender==="0"}/>
                    <label htmlFor="0">Male</label>
                    <input type="radio" id="1" name="gender" value="1" onChange={formik.handleChange} checked={formik.values.gender==="1"}/>
                    <label htmlFor="1">Female</label>
                </div>
                <div id='button'>
               
                <button type="submit" disabled={!formik.isValid}>Submit</button>
                </div>
                
            </form>
        </div>
    );
}
 
export default SignForm;
