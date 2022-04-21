import { useRef, useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { setFilter } from "../store/email.action.js"
import { EmailList } from "./email-list"


export const FilterBar = (props) => {

    const [filterBy, setFilterBy] = useState('')

    const dispatch = useDispatch()

    useEffect(() => {
        // if (filterBy) {
        dispatch(setFilter(filterBy))
        // }
    }, [filterBy])

    const handleChange = (ev) => {
        setFilterBy(ev.target.value)
        // console.log(filterBy)
    }

    return (
        <div className="flex filter-bar">
            <input
                type="text"
                placeholder="Filter"
                name="filter"
                onChange={handleChange}
                value={filterBy}
            />
            {/* <EmailList filterBy={filterBy} /> */}
        </div>
    )
}