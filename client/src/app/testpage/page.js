"use client"
import React, { useEffect, useState } from 'react';

const TestPAge = () => {
    const [data,setData] = useState([])
    useEffect(() => {
        // Define the data you want to send in the request body (if needed)
        const requestData = {
          // Your request data here
        };
      
        fetch('/api/category', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json', // Set the appropriate content type if sending JSON
          },
          body: JSON.stringify(requestData), // Convert your request data to JSON
        })
          .then((response) => response.json())
          .then((data) => {
            setData(data.data)
            console.log(data);
            // You can now do something with the data here
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      }, []);
      
      
    return (
        <div>
            {
                data.map(s=> (
                    <div key={data._id}> 
                    <p>{s.name}</p>
                    
                     </div>
                ))
            }
        </div>
    );
};

export default TestPAge;