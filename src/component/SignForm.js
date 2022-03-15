import { useFormik } from 'formik';

const SignForm = () => {
    const formik = useFormik({
        initialValues:{
            name:"",
            email:"",
            password:"",
        }
        
    })

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
                <div>
                    <label>email: </label>
                    <input type="text" value={formik.values.email} onChange={formik.handleChange} name="email"/>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" value={formik.values.password} onChange={formik.handleChange} name="password"/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
 
export default SignForm;
