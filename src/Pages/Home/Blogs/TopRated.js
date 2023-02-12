import React from 'react';
import Box from "@mui/material/Box";
import Rating from '@mui/material/Rating';
import './Blogs.css'
import { Link } from 'react-router-dom';

const TopRated = (props) => {
    const {_id, avgPrice, day, thumb, title, rating, desc1} = props.blog;
    return (
        <div style={{marginBottom:"10px"}}>
            <Box sx={{ boxShadow: 2 }} className='d-flex justify-content-between align-items-center rounded-2'>
                <div className='pe-2'>
                    <img className='rounded-2 side-img' src={thumb} alt="" />
                </div>
                <div className='pe-1'>
                <Link className="text-decoration-none" to={`blog/${_id}`}>
                    <p className="mb-2">{title}</p>
                    </Link>
                    <strong className='d-flex justify-content-between pe-2 mb-1'>
                        <Rating name="half-rating-read" className='mb-0 fs-6' defaultValue={rating} precision={0.5} readOnly />
                        <small className='fw-normal'>({day})day</small>
                        <small>${avgPrice}</small>
                    </strong>
                    <small>{desc1.slice(0, 100)}...</small>
                </div>
            </Box>
        </div>
    );
};

export default TopRated;

/* 
                <Link className="text-decoration-none" to={`blog/${_id}`}>
                    
                    </Link>
*/