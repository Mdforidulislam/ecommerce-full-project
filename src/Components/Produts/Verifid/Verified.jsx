import React, { useState } from 'react';
import Navbar from './Navbar';
import Container from '../../../Container/Container';
import ProductCategory from './ProductCategory';
import Pagination from './Pagination';

const Verified = () => {
    const [layout,setLayout] = useState(0)
    return (
        <div>
            <Container>
                 <div className=' space-y-3'>
                    <Navbar setLayout={setLayout}/>
                    <ProductCategory layout={layout}/>
                    <Pagination/>
                 </div>
            </Container>
        </div>
    );
};

export default Verified;