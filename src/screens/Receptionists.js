import React, { useState, useEffect } from 'react';
import Layout from '../Layout';
import { BiPlus } from 'react-icons/bi';
import { DoctorsTable } from '../components/Tables'; 
import { toast } from 'react-hot-toast';
import axios from 'axios';

function Receptionists() {
  const [administrators, setAdministrators] = useState([]); 
  useEffect(() => {
    const fetchAdministrators = async () => {
      try {
        const response = await axios.get("http://localhost:3001/administrators");
        setAdministrators(response.data.administrators); // Assumes receptionist data is stored under users
        console.log('Fetched receptionist data:', response.data.users);
      } catch (error) {
        console.error('Error fetching receptionist data:', error);
        toast.error('Failed to fetch receptionist data');
      }
    };

    fetchAdministrators();
  }, []);

  return (
    <Layout>
      <h1 className="text-xl font-semibold">Administrators</h1>
      <div className="bg-white my-8 rounded-xl border-[1px] border-border p-5">
        <div className="mt-8 w-full overflow-x-scroll">
          <DoctorsTable data={administrators} /> 
        </div>
      </div>
    </Layout>
  );
}

export default Receptionists;
