import { useNavigate } from 'react-router-dom'
import { AddEmail } from '../cmps/add-email'
import { EmailPreview } from '../cmps/preview-email'


export const HomePage = () => {
    return <section className="main-container">
        <div>Home Page
            <AddEmail />
            <EmailPreview />
        </div>
    </section>
}