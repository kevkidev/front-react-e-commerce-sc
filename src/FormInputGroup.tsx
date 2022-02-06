import React from 'react';
import "./FormInputGroup.scss";

type Props = {
    id: string,
    label: string,
    name: string,
    type: "text" | "email" | "password" | "radio",
    placeholder: string,
    required?: boolean,
    validFeedBack?: string,
    invalidFeedBack?: string,
};
export default function FormInputGroup({ id, label, name, type, placeholder = "", required = false, validFeedBack = "Nice :)", invalidFeedBack = "Oops :(" }: Props) {

    return (
        <div className="form-item">
            <label htmlFor={id} className="form-label">{label}</label>
            <input id={id} type={type} placeholder={placeholder} name={name.toLowerCase()} className="form-control" required={required} />
            {required && (
                <>
                    <div className="valid-feedback">
                        {validFeedBack}
                    </div>
                    <div className="invalid-feedback">
                        {invalidFeedBack}
                    </div>
                </>
            )}
        </div>
    );
}