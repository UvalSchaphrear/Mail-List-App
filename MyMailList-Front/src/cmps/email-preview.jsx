
export const EmailPreview = ({ email }) => {
    if (!email) return <div></div>
    return (
        <div className="email-preview-container flex">
            <div className="email-preview flex">
                <img src={email.avatarPic} alt="" />
                <div className="address-and-content flex">
                    <div className="email-address">{email.emailAddress}</div>
                    <div className="email-content">{email.emailContent}</div>
                </div>
            </div>
        </div>
    )
}