import React from 'react';
import PropTypes from 'prop-types';

function Post(props) {
    const {title, modified_date, category, content} = props.post
    return (
        <div>
            <h2>{title}</h2>
            <p>{modified_date.toLocaleString()}</p>
            <p>{category}</p>
            <p>{content}</p>
        </div>
    )
}

Post.propTypes = {
    post: PropTypes.exact(
        {
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            category: PropTypes.string,
            modified_date: PropTypes.instanceOf(Date).isRequired,
            username: PropTypes.string.isRequired
        }
    )
}


export default Post;
