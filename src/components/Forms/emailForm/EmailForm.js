import { Field, Form, Formik } from "formik";
import MyInput from "../../myInput/myInput";
import MyTestArea from "../../myTextArea/myTextArea";
import {validation, submit} from "./EmailFormUtils";

export default function EmailForm(props) {

    return (
       <Formik
        initialValues={{email:"",content:""}}
        validate={validation}
        onSubmit={(validate)=>submit(validate,props)}

       >
           <Form id="EmailForm">
               <Field name="email" component={MyInput} placeholder="Prosze o podanie email"/>
               <Field name="content" component={MyTestArea} placeholder="Wpisz tutaj treść wiadomości"/>
           </Form>
       </Formik>
    )
}