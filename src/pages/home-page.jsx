import { useNavigate } from 'react-router-dom'
import { AddEmail } from '../cmps/add-email'


export const HomePage = () => {
    return <section className="main-container">
        <div>Home Page
            <AddEmail />
        </div>
    </section>
}