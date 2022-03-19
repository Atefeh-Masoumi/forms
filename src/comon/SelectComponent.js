const SelectComponent = ({selectOption, name, formik}) => {
    return (  
        <>
        <div className="select" >
            <select name={name} {...formik.getFieldProps(name)}>
                {selectOption.map((item)=><option key={item.value} value={item.value}>{item.label}</option>)}
            </select>
            {formik.errors[name] && formik.touched[name]&&<div style={{color:"red"}}>{formik.errors[name]}</div>}
        </div>
    
        </>
    );
}
 
export default SelectComponent;