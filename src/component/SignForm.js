import { useFormik } from 'formik';

const SignForm = () => {
 
    const validate=(values)=>{
        let errors={};
        if(!values.name){
            errors.name="Name is Required";
        }
        if(!values.email){
            errors.email = "Email is Required";
        }
        if(!values.password){
            errors.password = "password is Required";
        }
        return errors;
    }
   

    const formik = useFormik({
        initialValues:{
            name:"",
            email:"",
            password:"",
        },
        validate,      
        
    })
    console.log(formik.errors);

        const submitHandler=(e)=>{
        e.preventDefault();
    }

    return (  
        <div className="formtable">
            <form onSubmit={formik.handleSubmit} className="form">
                <div>
                    <label>name: </label>
                    <input type="text" value={formik.values.name} onChange={formik.handleChange} name="name"/>
                </div>
                {formik.errors.name && <div>{formik.errors.name}</div>}
                <div>
                    <label>email: </label>
                    <input type="text" value={formik.values.email} onChange={formik.handleChange} name="email"/>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" value={formik.values.password} onChange={formik.handleChange} name="password"/>
                </div>
                <div id='button'>
                <button type="submit">Submit</button>
                </div>
                
            </form>
        </div>
    );
}
 
export default SignForm;
