import { EmailPreview } from "./email-preview"
import { loadEmails } from "../store/email.action"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react";
import { FilterBar } from "./filter-bar";


export const EmailList = () => {
    let { emails, filterBy } = useSelector(state => state.emailModule)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadEmails(filterBy))
    }, [dispatch, filterBy])


    console.log(emails)
    console.log(filterBy)

    // if (!emails.length) {
    //     return <h1>No emails to show</h1>
    // }

    return (
        <section>
            <div>
                <FilterBar />
            </div>
            <div className="email-list">
                {emails.map((email, idx) =>
                    <EmailPreview key={idx} email={email} />
                )
                }
            </div>
        </section>
    )
}
