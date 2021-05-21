import React, {useState} from 'react';

const List  = (props) => {
    let [people, setPeople] = useState([
        {name: 'Aanish', review: 'Hello Aanish here, this is a test review', platform: 1},
        {name: 'Hamza', review: 'Hello Hamza here, this is a test review', platform: 2},
        {name: 'Junaid', review: 'Hello Junaid here, this is a test review', platform: 2},
    ])

    const deleteItem = (idx) => {
        alert('deleted' + idx)
        setPeople(
            people.splice(idx, 1)
        )
    }

    return (
        <div>
            <div>{people.map((people, index) => {
                return (
                    <div onClick={() => deleteItem(index)}>
                        {index}. {people.name} gave a review of {people.review} on platform {people.platform}
                    <br/>
                        <button>delete</button>
                    </div>
                )
            })}</div>
        </div>
    );
}

export default List;