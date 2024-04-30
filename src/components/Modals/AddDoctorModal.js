import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import Modal from './Modal';
import { Input, Select } from '../Form';
import { BiChevronDown } from 'react-icons/bi';
import { toast } from 'react-hot-toast';
import Uploader from '../Uploader';
import axios from 'axios';
import { sortsDatas } from '../Datas';

function AddDoctorModal({ closeModal, isOpen }) {
  const { register, handleSubmit, control, formState: { errors } } = useForm();

  const onSubmit = async (doctorData) => {
    try {
      const response = await axios.post('http://localhost:3001/doctors', doctorData);
      if(response.status === 201 || response.status === 200) {
        toast.success('Doctor added successfully');
        closeModal();
      } else {
        // Handle any other statuses here appropriately
        toast.error('Unexpected response from the server');
      }
    } catch (error) {
      console.error('Failed to add doctor:', error);
      toast.error('Error adding doctor: ' + error.response?.data?.message || error.message);
    }
  };

 return (
    <Modal
      closeModal={closeModal}
      isOpen={isOpen}
      title="Add Doctor"
      width={'max-w-3xl'}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-
        3 flex-col col-span-6 mb-6">
          <p className="text-sm">Profile Image</p>
          <Uploader />
        </div>
        <div className="flex-colo gap-6">
          <div className="grid sm:grid-cols-2 gap-4 w-full">
            <div className="flex w-full flex-col gap-3">
              <p className="text-black text-sm">Full Name</p>
              <Input color={true} placeholder="John Doe" {...register('fullName', { required: 'Full Name is required' })} />
              {errors.fullName && <p className="text-red-600">{errors.fullName.message}</p>}
            </div>
            <div className="flex w-full flex-col gap-3">
              <p className="text-black text-sm">Title</p>
              <Controller
                name="title"
                control={control}
                rules={{ required: 'Title is required' }}
                defaultValue={sortsDatas.title[0]} // Ensure this is not undefined
                render={({ field }) => (
                  <Select {...field} datas={sortsDatas.title}>
                    <div className="w-full flex-btn text-textGray text-sm p-4 border border-border font-light rounded-lg focus:border focus:border-subMain">
                      {/* Use optional chaining to safely access `name` */}
                      {field.value?.name || 'Select a title'} <BiChevronDown className="text-xl" />
                    </div>
                  </Select>
                )}
              />
              {errors.title && <p className="text-red-600">{errors.title.message}</p>}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 w-full">
            <Input label="Email" placeholder="example@gmail.com" color={true} {...register('email', { required: 'Email is required', pattern: {value: /^\S+@\S+$/i, message: 'Entered value does not match email format'} })} />
            {errors.email && <p className="text-red-600">{errors.email.message}</p>}
            <Input label="Phone Number" placeholder="(555)555-5555" color={true} {...register('phoneNumber', { required: 'Phone number is required', pattern: {value: /^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/, message: 'Entered value does not match phone number format'} })} />
            {errors.phoneNumber && <p className="text-red-600">{errors.phoneNumber.message}</p>}
          </div>

          <div className="grid sm:grid-cols-2 gap-4 w-full">
            <button
              type="button"
              onClick={closeModal}
              className="bg-red-600 bg-opacity-5 text-red-600 text-sm p-4 rounded-lg font-light"
            >
              Cancel
            </button>
            <button type="submit" className="btn-save bg-gray-100 border border-gray-300 text-gray-800 hover:bg-gray-200 rounded-lg px-4 py-2">
              Save
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
}

export default AddDoctorModal;
