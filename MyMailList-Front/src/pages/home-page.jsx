import { AddEmail } from '../cmps/add-email'
import { EmailList } from '../cmps/email-list'

export const HomePage = () => {
    return <section className="main-container">
        <div>
            <AddEmail />
            <EmailList />

        </div>
    </section>
}