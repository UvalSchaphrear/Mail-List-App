import { Link } from "react-router-dom";

export const EmailPreview = ({ email }) => {
    // console.log(email)
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