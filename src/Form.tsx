import React from "react";
import './AuthPage.scss';

type Props = {
    id: string,
    children: any,
};
export default function AuthPage({ id, children }: Props) {
    const handleSubmit = (event: any) => {
        event.preventDefault();
        event.stopPropagation();
        const form = event.target;
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add('was-validated');
    };

    return (
        <form id={id} className='g-3 needs-validation' onSubmit={handleSubmit} noValidate>
            {children}
        </form>);
}

