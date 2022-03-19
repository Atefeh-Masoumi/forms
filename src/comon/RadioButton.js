const RadioButton = ({formik,name,label,radioOption}) => {
    return ( 
        <>
        <div >
        {radioOption.map((item)=><>
            <input type="radio" id={item.value} name={name} value={item.value} onChange={formik.handleChange} checked={formik.values[name]=== item.value}/>
            <label htmlFor={item.value}>{item.label}</label>
           </>)}
                </div>
                {formik.errors[name] && formik.touched[name]&&<div style={{color:"red"}}>{formik.errors[name]}</div>}
          
         
        </>
     );
}
 
export default RadioButton;