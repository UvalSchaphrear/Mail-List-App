import { Link } from "react-router-dom";

export const EmailPreview = ({ email }) => {
    // console.log(email)
    if (!email) return <div></div>
    return (
        // <Link className="clean-link" title="email details" to={`/email/${email.id}`}>
        // <>
        <div className="email-preview-container flex">
            <div className="email-preview flex">
                <img src={email.avatarPic} alt="" />
                <div className="address-and-content flex">
                    <div className="email-address">{email.emailAddress}</div>
                    <div className="email-content">{email.emailContent}</div>
                </div>
                {/* <img src={`${email.avatarPic}.jpg`} alt="" /> */}
            </div>
        </div>
        // </>
        // </Link>
    )
}