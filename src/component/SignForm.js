import axios from 'axios';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import CheckboxInput from '../comon/CheckboxInput';
import Input from '../comon/Input';
import RadioButton from '../comon/RadioButton';
import SelectComponent from '../comon/SelectComponent';

const CheckboxOption =[
    {label:"normal", value:"normal"},
    {label:"Premuim", value:"premium"},
]
const radioOption =[
    {label:"male", value:"0"},
    {label:"female", value:"1"},
]
const selectOption=[
    {label:"select nationality...", value:""},
    {label:"Iran", value:"IR"},
    {label:"Germany", value:"Ger"},
    {label:"USA", value:"Usa"},
]
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
        nationality:Yup.string().required("this field is necessary"),
        intersts:Yup.array().min(1).required("select one at least"),
        terms:Yup.boolean().required().oneOf([true], "You must accept the terms and conditions"),
    });
   
const initialValues={
    name:"",
    email:"",
    phonenumber:"",
    password:"",
    passwordconfirm:"",
    gender:"",
    nationality:"",
    intersts:[],
    terms:false,

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
                
                <RadioButton formik={formik} radioOption={radioOption
                } name="gender"/>

                <SelectComponent selectOption={selectOption} formik={formik} name="nationality"/>
                <CheckboxInput CheckboxOption={CheckboxOption} formik={formik} name="intersts"/>
                <div id='button'>
                    <button type="submit" disabled={!formik.isValid}>Submit</button>
                </div>
                
            </form>
        </div>
    );
}
 
export default SignForm;
