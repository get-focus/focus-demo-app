import React from 'react';
import MovieDetailView from '../views/movie/detail';

const route = [
    {
        path: 'movies/:id',
        component: (props) => (<MovieDetailView id={+props.params.id} {...props}/>)
    }
];

export default route;
