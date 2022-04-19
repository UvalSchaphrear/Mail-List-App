import { EmailPreview } from "./preview-email"
import { loadEmails } from "../store/email.action"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";


export const EmailList = (props) => {
    const { emails } = useSelector(state => state.emailModule)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadEmails())

    }, [])

    console.log(emails)

    if (!emails.length) {
        return <h1>No emails to show</h1>
    }

    return (
        <section>
            <div className="email-list">
                {emails.map((email, idx) =>
                    <EmailPreview key={idx} email={email} />)}
            </div>
        </section>
    )
}
