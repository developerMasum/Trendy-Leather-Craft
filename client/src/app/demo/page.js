"use client"
import { useEffect, useState } from 'react';



const TopicsList = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("http://localhost:3000/api/topics", {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch topics");
        }

        const data = await res.json();
        setTopics(data);
      } catch (error) {
        console.log("Error loading topics: ", error);
      }
    }

    fetchData();
  }, []);

  console.log(topics); // Log topics in the console

  return (
 <>
 
 <div className='pt-12'>
    
    hi 
    </div> </>
      
  );
};

export default TopicsList;
