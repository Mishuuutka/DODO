import People from "./People"
import { useState } from "react"

const ListPeople = ({peoples, checkUpdatePeoples}) => {
    const [isSort, setSort] = useState(false);

    const toggleSort = (event) => {
        setSort(event.target.checked)
    }

    const activePeople = peoples.filter((people) => people.active)
    const noActivePeople = peoples.filter((people) => !people.active)

    return (
        <div className="general-block">
            <p className="p-general">Список курьеров</p>
            <div className="sort-block">
                <p className="p-sort">Сортировать по активности</p>
                <div className="toggle-sort-block">
                    <input type='checkbox' className='ios8-switch' id='checkbox-1' onClick={toggleSort}/>
                    <label htmlFor='checkbox-1'></label>
                </div>
            </div>
            <div className="people-list">
                {!isSort && peoples.map((people) => {
                    return <People
                    people={people}
                    checkUpdatePeoples={checkUpdatePeoples}
                    key={people.id} />
                })}

                {isSort &&
                <>
                <p className="p-active">Активные</p>
                 {activePeople.map((people) => {
                        return <People
                        people={people}
                        checkUpdatePeoples={checkUpdatePeoples}
                        key={people.id} />
                })}
                </>
                }

                {isSort &&
                <>
                    <p className="p-active">Неактивные</p>
                    {noActivePeople.map((people) => {
                            return <People
                            people={people}
                            checkUpdatePeoples={checkUpdatePeoples}
                            key={people.id} />
                    })}
                </>
                }
            </div>
        </div>

    )
}

export default ListPeople