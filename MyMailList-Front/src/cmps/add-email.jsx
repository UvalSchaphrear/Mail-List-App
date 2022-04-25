
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addEmail } from "../store/email.action.js";

export const AddEmail = () => {

    const [emailAddress, setEmailAddress] = useState('')
    const [emailContent, setEmailContent] = useState('')
    const [email, setEmail] = useState({})
    const [emails, setEmails] = useState([])

    const dispatch = useDispatch()

    const submit = (ev) => {
        ev.preventDefault()
        setEmail({ emailAddress, emailContent })
        setEmails(emails => [...emails, email])
        clearForm()
    }

    const clearForm = () => {
        setEmailAddress('')
        setEmailContent('')
    }

    useEffect(() => {
        if (email.emailAddress) {
            dispatch(addEmail(email))
        }
    }, [email])

    const handleChange = (ev) => {
        let field = ev.target.name
        let value = ev.target.value
        if (field === 'address') setEmailAddress(value)
        if (field === 'text') setEmailContent(value)
    }

    return (
        <div>
            <form className="flex email-add-container" onSubmit={submit}>
                <div className=" address-and-content flex">
                    <input type="email"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                        name="address"
                        value={emailAddress}
                    />
                    <textarea
                        type="text"
                        name="text"
                        placeholder="Message"
                        value={emailContent}
                        onChange={handleChange}
                    >
                    </textarea>
                    <button className="submit-button" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}