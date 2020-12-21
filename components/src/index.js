import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovelCard from './ApprovelCard';


const App = () => {
    return (
        <div className='ui container comments'>
            <ApprovelCard> Are you sure you want to do this?</ApprovelCard>


            <ApprovelCard>
                < CommentDetail author="Sam" timeAgo="Today at 4:30PM" commentText="Nice blog post!" />
            </ApprovelCard>
            <ApprovelCard>
                < CommentDetail author="Alex" timeAgo="Today at 6:10PM" commentText="Looking Good" />
            </ApprovelCard>
            <ApprovelCard>
                < CommentDetail author="Jane" timeAgo="Today at 10:30PM" commentText="No way thats really cool" />
            </ApprovelCard>
            {/* < CommentDetail />
            < CommentDetail /> */}
        </div>

    );
};

ReactDOM.render(<App />, document.querySelector('#root'));