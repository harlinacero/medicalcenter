
export interface ModalProps {
    title: string;
    message: string;
    isOpen: boolean;
    onClose: () => void;
    onConfirm?: () => void;
    confirmText?: string;
    cancelText?: string;
}
