import React, { useState, useEffect } from 'react';
import Layout from '../../Layout';
import { sortsDatas } from '../../components/Datas'; 
import { BiChevronDown } from 'react-icons/bi'; 
import { Link } from 'react-router-dom';
import { BiPlus } from 'react-icons/bi';
import { MdFilterList } from 'react-icons/md';
import { Button, Select } from '../../components/Form';
import { PatientTable } from '../../components/Tables';
import { toast } from 'react-hot-toast';
import axios from 'axios';


function Patients() {
  const [patients, setPatients] = useState([]); // State to store patient data
  const [status, setStatus] = useState(sortsDatas.filterPatient[0]);
  const [gender, setGender] = useState(sortsDatas.genderFilter[0]);

  useEffect(() => {
    // Function to fetch patient data from the backend API
    const fetchPatients = async () => {
      try {
        // Make a GET request to fetch patient data from the backend API
        const response = await axios.get("http://localhost:3001/patients");
        // Update the state with the fetched patient data
        setPatients(response.data.patients);
      } catch (error) {
        // Handle errors if any
        console.error('Error fetching patient data:', error);
        toast.error('Failed to fetch patient data');
      }
    };

    // Call the fetchPatients function when the component mounts
    fetchPatients();
  }, []); // Empty dependency array ensures that this effect runs only once

  const sorts = [
    // Sort options
    {
      id: 1,
      selected: status,
      setSelected: setStatus,
      datas: sortsDatas.filterPatient,
    },
    {
      id: 2,
      selected: gender,
      setSelected: setGender,
      datas: sortsDatas.genderFilter,
    },
  ];

  return (
    <Layout>
      {/* Add patient button */}
      <Link
        to="/patients/create"
        className="w-16 animate-bounce h-16 border border-border z-50 bg-subMain text-white rounded-full flex-colo fixed bottom-8 right-12 button-fb"
      >
        <BiPlus className="text-2xl" />
      </Link>
      <h1 className="text-xl font-semibold">Patients</h1>

      {/* Patient data table */}
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="10"
        data-aos-offset="200"
        className="bg-white my-8 rounded-xl border-[1px] border-border p-5"
      >
        <div className="grid lg:grid-cols-5 grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-2">
          <input
            type="text"
            placeholder='Search "Patients"'
            className="h-14 text-sm text-main rounded-md bg-dry border border-border px-4"
          />
          {/* Sort dropdowns */}
          {sorts.map((item) => (
            <Select
              key={item.id}
              selectedPerson={item.selected}
              setSelectedPerson={item.setSelected}
              datas={item.datas}
            >
              <div className="h-14 w-full text-xs text-main rounded-md bg-dry border border-border px-4 flex items-center justify-between">
                <p>{item.selected.name}</p>
                <BiChevronDown className="text-xl" />
              </div>
            </Select>
          ))}
          {/* Filter button */}
          <Button
            label="Filter"
            Icon={MdFilterList}
            onClick={() => {
              toast.error('Filter data is not available yet');
            }}
          />
        </div>
        <div className="mt-8 w-full overflow-x-scroll">
          {/* Pass fetched patient data to the PatientTable component */}
          <PatientTable data={patients} used={false} />
        </div>
      </div>
    </Layout>
  );
}

export default Patients;