import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { setFilter } from "../store/email.action.js"

import magnifyingGlass from "../assest/svg/magnifying-glass.svg"


export const FilterBar = (props) => {

    const [filterBy, setFilterBy] = useState('')

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setFilter(filterBy))
    }, [filterBy])

    const handleChange = (ev) => {
        setFilterBy(ev.target.value)
    }

    return (
        <div className="flex main-container filter-bar">
            <img src={magnifyingGlass} alt="" />
            <input
                type="text"
                placeholder="Filter"
                name="filter"
                onChange={handleChange}
                value={filterBy}
            />
        </div>
    )
}