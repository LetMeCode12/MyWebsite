import "../myInput/myInput.scss"

export default function MyInput (props) {
    const {field,form:{touched,errors}} = props;

    const isError=()=>touched[field.name]&&errors[field.name];
    
    return(
        <div className="MyInput">
            <input className={`form-control ${isError()?"Error":""}`} {...field} {...props}/>
            { isError()&&
                <div className="Error">{errors[field.name]}</div>
            }
        </div>
    )
}