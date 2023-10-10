import getCategories from '@/utils/getCategories';
import React from 'react';

const CategoriesPage = async() => {
    const categories = await getCategories();
    console.log("first clg",categories);
    return (
        <div>
        {
            categories.map((c) => (
                <p key={c._id}>{c.name}</p> 
            ))
        }
    </div>
    );
};

export default CategoriesPage;