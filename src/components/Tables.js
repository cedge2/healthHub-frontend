import React from 'react';
import { MenuSelect } from './Form';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { FiEye } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { toast } from 'react-hot-toast';
import { memberData } from './Datas';

const thclass = 'text-start text-sm font-medium py-3 px-2 whitespace-nowrap';
const tdclass = 'text-start text-sm py-4 px-2 whitespace-nowrap';

function formatDate(dateString) {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}

// patient table
export function PatientTable({ data, functions, used }) {
  const DropDown1 = !used
    ? [
        {
          title: 'View',
          icon: FiEye,
          onClick: (data) => {
            functions.preview(data.id);
          },
        },
        {
          title: 'Delete',
          icon: RiDeleteBin6Line,
          onClick: () => {
            toast.error('This feature is not available yet');
          },
        },
      ]
    : [
        {
          title: 'View',
          icon: FiEye,
          onClick: (data) => {
            functions.preview(data.id);
          },
        },
      ];

  return (
    <table className="table-auto w-full">
      <thead className="bg-dry rounded-md overflow-hidden">
        <tr>
          <th className={thclass}>#</th>
          <th className={thclass}>Patient</th>
          <th className={thclass}>Name</th>
          <th className={thclass}>Created At</th>
          <th className={thclass}>Gender</th>
          <th className={thclass}>Age</th>
          <th className={thclass}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr
            key={item.id}
            className="border-b border-border hover:bg-greyed transitions"
          >
           <td className={tdclass}>{index + 1}</td>
            
            <td className={tdclass}>
              <div className="flex gap-4 items-center">
                {!used && (
                  <span className="w-12">
                    <img
                      src="../images/userIcon.png"
                      alt={item.title}
                      className="w-full h-12 rounded-full object-cover border border-border"
                    />
                  </span>
                )}
                
                <div>
                  <h4 className="text-sm font-medium">{item.title}</h4>
                  <p className="text-xs mt-1 text-textGray">{item.phone}</p>
                </div>
              </div>
            </td>
            <td className={tdclass}>{item.name}</td>
            <td className={tdclass}>{formatDate(item.dateCreated)}</td> 
            
            <td className={tdclass}>
              <span
                className={`py-1 px-4 ${
                  item.gender === 'Male'
                    ? 'bg-subMain text-subMain'
                    : 'bg-orange-500 text-orange-500'
                } bg-opacity-10 text-xs rounded-xl`}
              >
                {item.gender}
              </span>
            </td>
            {!used && (
              <>
                <td className={tdclass}>{item.age}</td>
              </>
            )}

            <td className={tdclass}>
              <MenuSelect datas={DropDown1} item={item}>
                <div className="bg-dry border text-main text-xl py-2 px-4 rounded-lg">
                  <BiDotsHorizontalRounded />
                </div>
              </MenuSelect>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

//Doctor and Admin Table
export function DoctorsTable({ data, functions }) {
  const DropDownActions = [
    {
      title: 'View',
      icon: FiEye,
      onClick: (data) => {
        functions.preview(data);
      },
    },
    {
      title: 'Delete',
      icon: RiDeleteBin6Line,
      onClick: () => {
        toast.error('This feature is not available yet');
      },
    },
  ];

  const renderActionMenu = (item) => (
    <div className="flex justify-around">
      {DropDownActions.map((action, idx) => (
        <button key={idx} onClick={() => action.onClick(item)} className="text-gray-500 hover:text-gray-700">
          <action.icon />
        </button>
      ))}
    </div>
  );

  // Check if data is available
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <table className="table-auto w-full">
      <thead className="bg-dry rounded-md overflow-hidden">
        <tr>
          <th className={thclass}>#</th>
          <th className={thclass}>Profile</th> 
          <th className={thclass}>Name</th>
          <th className={thclass}>Email</th>
          <th className={thclass}>Title</th>
          <th className={thclass}>Date Created</th>
          <th className={thclass}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={item.id} className="border-b border-border hover:bg-greyed transitions">
            <td className={tdclass}>{index + 1}</td>
            <td className={tdclass}>
              <div className="flex gap-4 items-center">
                <span className="w-12">
                  <img
                    src="../images/userIcon.png" 
                    alt={`${item.name}`}
                    className="w-full h-12 rounded-full object-cover border border-border"
                  />
                </span>
              </div>
            </td>
            <td className={tdclass}>{item.name}</td>
            <td className={tdclass}>{item.email}</td>
            <td className={tdclass}>{item.title}</td>
            <td className={tdclass}>{formatDate(item.dateCreated)}</td>
            <td className={tdclass}>
              {renderActionMenu(item)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}



// appointment table
export function AppointmentTable({ data, functions, doctor }) {
  return (
    <table className="table-auto w-full">
      <thead className="bg-dry rounded-md overflow-hidden">
        <tr>
          <th className={thclass}>Date</th>
          <th className={thclass}>{doctor ? 'Patient' : 'Doctor'}</th>
          <th className={thclass}>Status</th>
          <th className={thclass}>Time</th>
          <th className={thclass}>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr
            key={item.id}
            className="border-b border-border hover:bg-greyed transitions"
          >
            <td className={tdclass}>
              <p className="text-xs">{item.date}</p>
            </td>
            <td className={tdclass}>
              <h4 className="text-xs font-medium">
                {doctor ? item.user.title : item.doctor.title}
              </h4>
              <p className="text-xs mt-1 text-textGray">
                {doctor ? item.user.phone : item.doctor.phone}
              </p>
            </td>
            <td className={tdclass}>
              <span
                className={`py-1  px-4 ${
                  item.status === 'Approved'
                    ? 'bg-subMain text-subMain'
                    : item.status === 'Pending'
                    ? 'bg-orange-500 text-orange-500'
                    : item.status === 'Cancel' && 'bg-red-600 text-red-600'
                } bg-opacity-10 text-xs rounded-xl`}
              >
                {item.status}
              </span>
            </td>
            <td className={tdclass}>
              <p className="text-xs">{`${item.from} - ${item.to}`}</p>
            </td>

            <td className={tdclass}>
              <button
                onClick={() => functions.preview(item)}
                className="text-sm flex-colo bg-white text-subMain border rounded-md w-10 h-10"
              >
                <FiEye />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}


