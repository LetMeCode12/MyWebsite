import React,{Component} from "react";
import ReactDOM from "react-dom";
import "../Modal/modal.scss";


class Modal extends Component {

    constructor(props){
        super(props);
        this.modals=document.getElementById("root")
        this.el = document.createElement('div');
    }

    componentDidMount(){
       this.modals.appendChild(this.el);
    }

    componentWillUnmount(){
        this.modals.removeChild(this.el);
    }

    render(){
        const {children} = this.props;
        return ReactDOM.createPortal(<div className="Modal">{children}</div>,
            this.el
        );
    }
}

export default Modal;