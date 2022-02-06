import React from 'react';
import FormInputGroup from './FormInputGroup';
import Form from './Form';
import "./SignUpModal.scss";

export default function SignUpModal() {
    function generateNumbers(min: number, max: number) {
        const options = [];
        for (let i = max; i >= min; i--) {
            options.push(<option key={i} value={i}>{i}</option>);
        }
        return options;
    }
    return (
        <div className='singup-modal'>
            <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Create an account
            </button>

            {/* <!-- Modal-- > */}
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Create your account</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div >
                        <div className="modal-body" >
                            <Form id="signup-form">
                                <FormInputGroup id="signup-firstname" label="Firstname" name="firstname" type="text" placeholder="Firstname please" required={true} />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                                <FormInputGroup id="signup-lasstname" label="Lastname" name="lastname" type="text" placeholder="Firstname please" required={true} />
                                <FormInputGroup id="signup-email" label="Email" name="email" type="email" placeholder="Your email please" required={true} />
                                <FormInputGroup id="signup-paswword" label="Password" name="password" type="password" placeholder="Your password please" required={true} />
                                <label className='form-label' htmlFor="signup-birthdate">Birthdate</label>
                                <div className='select-group'>
                                    <select name="day" id="signup-bithdate-day" required>
                                        {generateNumbers(1, 31).map((e) => (e))}
                                    </select>
                                    <select name="month" id="signup-bithdate-month" required>
                                        {generateNumbers(1, 12).map((e) => (e))}
                                    </select>
                                    <select name="year" id="signup-bithdate-year" required>
                                        {generateNumbers(new Date().getFullYear() - 150, new Date().getFullYear() - 18).map((e) => (e))}
                                    </select>
                                </div>
                                <fieldset>
                                    <legend>Gender</legend>
                                    <div className='radio-group form-check'>
                                        <div className="form-check">
                                            <label className="form-check-label" htmlFor="signup-gender-male">
                                                Male
                                            </label>
                                            <input id="signup-gender-male" className="form-check-input" type="radio" name="flexRadioDefault" required />
                                        </div>
                                        <div className="form-check">
                                            <label className="form-check-label" htmlFor="signup-gender-female">
                                                Female
                                            </label>
                                            <input id="signup-gender-female" className="form-check-input" type="radio" name="flexRadioDefault" required />
                                        </div>
                                        <div className="form-check">
                                            <label className="form-check-label" htmlFor="signup-gender-other">
                                                Other
                                            </label>
                                            <input id="signup-gender-other" className="form-check-input" type="radio" name="flexRadioDefault" required />
                                        </div>
                                        <div className="invalid-feedback">
                                            You must agree before submitting.
                                        </div>
                                    </div>
                                </fieldset>
                            </Form>
                            <p>
                                By clicking Start, you agree to our Terms.
                            </p>
                        </div >
                        <div className="modal-footer" >
                            <button type="submit" className="btn btn-primary" form='signup-form'> Start</button >
                        </div >
                    </div >
                </div >
            </div >
        </div >
    );
}