import React, {useState} from 'react';
import API from '../API/index';
import User from "./User";

const Users = () => {
    const [users, setUsers] = useState(API.users.fetchAll());

    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId));
    }

    const generateFraze = (number) => {
        const exceptions = [11, 12, 13, 14];
        const remainder = number % 10;
        let changingPart = ''
        if (number === 0) {
            return 'Никто с тобой не тусанет';
        }
        if (remainder > 1 && remainder < 5 && !exceptions.includes(number)) {
            changingPart = 'человека тусанут';
        } else {
            changingPart = 'человек тусанет';
        }
        return `${number} ${changingPart} с тобой сегодня`;
    }

    const renderPhrase = (number) => {
        return (
            <div className={`header__message bg-${number === 0 ? 'danger' : 'primary'}`}>{generateFraze(number)}</div>
        )
    }

    return (
        <>
            {renderPhrase(users.length)}
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Имя</th>
                    <th scope="col">Качества</th>
                    <th scope="col">Профессия</th>
                    <th scope="col">Количество встреч</th>
                    <th scope="col">Оценка</th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody>
                {
                    users.map((user) => (
                        <User
                            key={user._id}
                            id={user._id}
                            name={user.name}
                            profession={user.profession}
                            qualities={user.qualities}
                            completedMeetings={user.completedMeetings}
                            rate={user.rate}
                            deleteEvent={handleDelete}
                        />
                    ))
                }

                </tbody>
            </table>
        </>
    );
}

export default Users;
