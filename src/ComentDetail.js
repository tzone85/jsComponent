import React from 'react';

const ComentDetail = props => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img src={props.proPic} alt="avatar"/>
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                </a>
                <div className="metadata">
                      <span className="date">
                          {props.timeAgo}
                      </span>
                </div>
                <div className="text">
                    {props.textComent}
                </div>
            </div>
        </div>
    );
};

export default ComentDetail;