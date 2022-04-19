
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addEmail } from "../store/email.action.js";
import { EmailList } from "./list-email.jsx";

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
            <form onSubmit={submit}>
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
                <button type="submit">Submit</button>
            </form>
            <EmailList emails={emails} />
        </div>
    )
}