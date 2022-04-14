import People from "./People"

const ListPeople = ({peoples, checkUpdatePeoples}) => {
    return (
        <div className="people-list">
            {peoples.map((people) => {
                return <People
                people={people}
                checkUpdatePeoples={checkUpdatePeoples}
                key={people.id} />
            })}
        </div>
    )
}

export default ListPeople