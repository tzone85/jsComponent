import React from 'react';
import ReactDOM from 'react-dom';
import ComentDetail from './ComentDetail';
import ApprovalCard from './ApprovalCard';
import faker from "faker";

const App = () => {
    return (
        <div className="ui containter comments">
            <ApprovalCard>
                <ComentDetail author='Mncedi' timeAgo={"Today at 4:55"} textComent="Yo hayi ndintswempu kodwa" proPic={faker.image.avatar()}/>
            </ApprovalCard>

            <ApprovalCard>
                <ComentDetail author='Thando' timeAgo={"Today at 8:55"} textComent="Ola Mqwathi" proPic={faker.image.avatar()} />
            </ApprovalCard>

            <ApprovalCard>
                <ComentDetail author='Dishman' timeAgo={"Yesterday at 3:30"} textComent="Yo usiskhokho Thando" proPic={faker.image.avatar()} />
            </ApprovalCard>

            <ApprovalCard>
                <ComentDetail author='King-T' timeAgo={"Yesterday at 4:50"} textComent="You've got this Mncedi" proPic={faker.image.avatar()} />
            </ApprovalCard>

        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));