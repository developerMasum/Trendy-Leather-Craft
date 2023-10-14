import getCategories from '@/utils/getCategories';
import React from 'react';
import Blog from './blog';

const CategoriesPage = async() => {
    const categories = await getCategories();
    console.log("first clg",categories);
    return (
        <div>
 <p></p>
    </div>
    );
};

export default CategoriesPage;