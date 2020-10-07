import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Notificacao: React.FC = () => {

    return (
        <div>
            <ToastContainer position={"top-left"} />
        </div>);
}

export default Notificacao;