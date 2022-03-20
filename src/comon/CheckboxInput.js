import React from "react";

const CheckboxInput = ({CheckboxOption, name, formik}) => {
    return (  
        <>
        <div >
        {CheckboxOption.map((item)=>
        <React.Fragment key={item.value}>
            <input type="checkbox" id={item.value} name={name} value={item.value} onChange={formik.handleChange} checked={formik.values[name].includes(item.value)}
            
            />
            
            <label htmlFor={item.value}>{item.label}</label>
           </React.Fragment>) }
          
                </div>
                
                {formik.errors[name] && formik.touched[name]&&<div style={{color:"red"}}>{formik.errors[name]}</div>}
          
         
        </>
    );
}
 
export default CheckboxInput;