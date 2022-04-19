
import { useState, useEffect } from "react";

export const AddEmail = () => {

    const [emailAddress, setEmailAddress] = useState('')
    const [emailContent, setEmailContent] = useState('')
    const [email, setEmail] = useState({})

    const submit = (ev) => {
        ev.preventDefault()
        setEmail({ emailAddress, emailContent })
        // console.log('kkk');
        console.log(email);

    }

    const handleChange = (ev) => {
        let field = ev.target.name
        let value = ev.target.value
        if (field === 'address') setEmailAddress(value)
        if (field === 'text') setEmailContent(value)
    }

    return (
        <div>
            <div>{email.emailAddress} {email.emailContent}</div>
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
        </div>
    )


}