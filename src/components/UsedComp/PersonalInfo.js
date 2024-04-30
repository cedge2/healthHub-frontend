import React from 'react';
import Uploader from '../Uploader';
import { sortsDatas } from '../Datas';
import { Button, Input, Select } from '../Form';
import { BiChevronDown } from 'react-icons/bi';
import { toast } from 'react-hot-toast';
import { HiOutlineCheckCircle } from 'react-icons/hi';
import { RiDeleteBin5Line } from 'react-icons/ri';

function PersonalInfo({ titles }) {
  const [title, setTitle] = React.useState(sortsDatas.title[0] || {});
  const [gender, setGender] = React.useState(sortsDatas.genderFilter[0] || {});
  
  return (
    <div className="flex-col gap-4">
      {/* Profile Image Uploader */}
      <div className="flex gap-3 flex-col w-full">
        <p className="text-sm">Profile Image</p>
        <Uploader />
      </div>
      {/* Title Selection */}
      {titles && (
        <div className="flex w-full flex-col gap-3">
          <p className="text-sm text-black">Title</p>
          <Select
            selectedOption={title}
            setSelectedOption={setTitle}
            datas={sortsDatas.title}
          >
            <div className="w-full flex items-center text-sm text-textGray p-4 border border-gray-300 font-light rounded-lg focus:outline-none focus:border-blue-500">
              {title?.name} <BiChevronDown className="text-xl" />
            </div>
          </Select>
        </div>
      )}
      
      <Input label="Full Name" color={true} required type="text" />
      <Input label="Phone Number" color={true} required type="text" />
      <Input label="Email" color={true} required type="email" />
      {!titles && (
        <>
          <div className="flex w-full flex-col gap-3">
            <p className="text-sm text-black">Gender</p>
            <Select
              selectedOption={gender}
              setSelectedOption={setGender}
              datas={sortsDatas.genderFilter}
            >
              <div className="w-full flex items-center text-sm text-textGray p-4 border border-gray-300 font-light rounded-lg focus:outline-none focus:border-blue-500">
                {gender?.name} <BiChevronDown className="text-xl" />
              </div>
            </Select> 
          </div>
         <Input className="gap-4" label="Age" color={true} required type="text" />
        </>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        <Button label="Delete Account" Icon={RiDeleteBin5Line} onClick={() => toast.error('This feature is not available yet')} />
        <Button label="Save Changes" Icon={HiOutlineCheckCircle} onClick={() => toast.error('This feature is not available yet')} />
      </div>
    </div>
  );
}

export default PersonalInfo;
