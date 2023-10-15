

// import { useRouter } from 'next/router';
import React from 'react';

const Demo = ({params}) => {
//     const router = useRouter();
  const filter = params.id;
  console.log(filter);
    return (
        <div className='pt-12'>
            welcome{filter}
        </div>
    );
};

export default Demo;