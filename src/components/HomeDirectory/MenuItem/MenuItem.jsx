import React from 'react';
import { withRouter } from 'react-router-dom';

import './MenuItem.scss';

const MenuItem = ({ title, imageUrl, linkUrl, size, id, history }) => {
    return (
        <div className={`${size} menu-item`}
            onClick={(event) => {
                history.push(linkUrl);
            }}>
            <div className='background-image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}></div>
            <div className='content'>
                <h1 className='title'>{title}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem);
