import { EmailPreview } from "./email-preview"
import { loadEmails } from "../store/email.action"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { FilterBar } from "./filter-bar";


export const EmailList = () => {
    let { emails, filterBy } = useSelector(state => state.emailModule)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadEmails(filterBy))
    }, [dispatch, filterBy])

    return (
        <section>
            <div className="filter-container flex">
                <FilterBar />
            </div>
            <div className="email-list flex">
                {emails.map((email, idx) =>
                    <EmailPreview key={idx} email={email} />
                )
                }
            </div>
        </section>
    )
}
