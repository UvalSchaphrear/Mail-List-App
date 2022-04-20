import { useNavigate } from 'react-router-dom'
import { AddEmail } from '../cmps/add-email'
import { FilterBar } from '../cmps/filter-bar'
import { EmailList } from '../cmps/email-list'

export const HomePage = () => {
    return <section className="main-container">
        <div>
            <AddEmail />
            <EmailList />
            {/* <FilterBar /> */}

        </div>
    </section>
}