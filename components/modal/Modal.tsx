'use client';

import React, {useRef, useEffect, useState, ReactNode} from 'react';
import {modal} from "@/styled-system/recipes/modal";

type ModalProps = {
    isOpen: boolean;
    hasCloseBtn?: boolean;
    onClose?: () => void;
    children?: ReactNode;
};

const Modal: React.FC<ModalProps> = ({isOpen, hasCloseBtn = true, onClose, children}) => {
    const [isModalOpen, setModalOpen] = useState<boolean>(isOpen);
    const modalRef = useRef<HTMLDialogElement | null>(null);

    const handleCloseModal = () => {
        if (onClose) {
            onClose();
        }
        setModalOpen(false);
    };

    useEffect(() => {
        setModalOpen(isOpen);
    }, [isOpen]);

    useEffect(() => {
        const modalElement = modalRef.current;

        if (modalElement) {
            if (isModalOpen) {
                modalElement.showModal();
            } else {
                modalElement.close();
            }
        }
    }, [isModalOpen]);

    return (
        <dialog className={modal()} ref={modalRef}>
            {hasCloseBtn && (
                <button className={modal({modal: 'close'})} onClick={handleCloseModal}>
                    X
                </button>
            )}
            {children}
        </dialog>
    );
};

export default Modal;
