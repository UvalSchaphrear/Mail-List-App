import { Link } from "react-router-dom";
import { loadEmails } from "../store/email.action";
import { useDispatch } from "react-redux";

export const EmailPreview = ({ email }) => {

    // const dispatch = useDispatch()

    console.log(email)
    if (!email) return <div></div>
    return (
        <Link className="clean-link" title="email details" to={`/email/${email.id}`}>
            <>
                <article className="email-preview clean-link flex">
                    <p>{email.emailAddress}</p>
                    <p>{email.emailContent}</p>
                    {/* <p> <img src={email.links.patch.large} alt="" /> </p> */}
                </article>
            </>
        </Link>
    )
}