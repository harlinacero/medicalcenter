import React from "react";
import './modal.css';
import { ModalProps } from "../../models/ModalProps";

export const Modal: React.FC<ModalProps> = ({
    title,
    message,
    isOpen,
    onClose,
    onConfirm,
    confirmText = "Aceptar",
    cancelText = "Cancelar", }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <h2 className="modal-title">{title}</h2>
                <p className="modal-message">{message}</p>
                <div className="modal-buttons">
                    {onConfirm && (
                        <button className="modal-confirm-button" onClick={onConfirm}>
                            {confirmText}
                        </button>
                    )}
                    <button className="modal-cancel-button" onClick={onClose}>
                        {cancelText}
                    </button>
                </div>
            </div>
        </div>
    );
}