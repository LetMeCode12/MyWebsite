import { Modal, ModalBody, ModalFooter, Button } from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import EmailForm from "../forms/emailForm/emailForm";
import "./mailModal.scss"



export default function MailModal(props) {

    return (
        <Modal show={props.show} onHide={props.Hide}>
            <ModalHeader closeButton>
                <div className="Header">
                    Napisz do mnie wiadomość!
                </div>
            </ModalHeader>
            <ModalBody>
                <div className="Body">
               
                    <EmailForm Hide={props.Hide}/>
                    
                </div>
            </ModalBody>
            <ModalFooter>
                <div className="Footer">
                    <Button type="button" className="mx-1 btn btn-danger" onClick={props.Hide}>Zamknij</Button>
                    <Button form="EmailForm" type="submit" className="mx-1 btn btn-success">Wyślij</Button>
                   
                </div>
            </ModalFooter>

        </Modal>
    )
}