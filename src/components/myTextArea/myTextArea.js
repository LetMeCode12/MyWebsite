import "../myTextArea/myTextArea.scss"

export default function MyTestArea (props) {
    const {field,form:{touched,errors}} = props;

    const isError=()=>touched[field.name]&&errors[field.name];
    
    return(
        <div className="MyTestArea">
            <textarea className={`form-control ${isError()?"Error":""}`} {...field} {...props}/>
            { isError()&&
                <div className="Error">{errors[field.name]}</div>
            }
        </div>
    )
}