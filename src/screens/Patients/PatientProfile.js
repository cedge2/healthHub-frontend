import React from 'react';
import Layout from '../../Layout';
import { Link } from 'react-router-dom';
import { IoArrowBackOutline } from 'react-icons/io5';
import AppointmentsUsed from '../../components/UsedComp/AppointmentsUsed';
import PersonalInfo from '../../components/UsedComp/PersonalInfo';

function PatientProfile() {
  const [activeTab] = React.useState(1);

  const tabPanel = () => {
    //Todo: Adding more functionality such as Health Info - made a switch case for this reason to be able to easily add more later
    switch (activeTab) {
      case 1:
        return <AppointmentsUsed doctor={false} />;
      case 2:
        return <PersonalInfo titles={false} />;
      default:
        return;
    }
  };
  

  return (
    <Layout>
      <div className="flex items-center gap-4">
        <Link
          to="/patients"
          className="bg-white border border-subMain border-dashed rounded-lg py-3 px-4 text-md"
        >
          <IoArrowBackOutline />
        </Link>
        <h1 className="text-xl font-semibold">Jane Doe</h1>
      </div>
      <div className=" grid grid-cols-12 gap-6 my-8 items-start">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="100"
          data-aos-offset="200"
          className="col-span-12 flex-colo gap-6 lg:col-span-4 bg-white rounded-xl border-[1px] border-border p-6 lg:sticky top-28"
        >
          <div className="gap-2 flex-colo">
            <h2 className="text-sm font-semibold">Jane Doe</h2>
            <p className="text-xs text-textGray">janedoe@gmail.com</p>
            <p className="text-xs">+1 712 345 6789</p>
          </div>
          {/* tabs */}
         
        </div>
        {/* tab panel */}
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="100"
          data-aos-offset="200"
          className="col-span-12 lg:col-span-8 bg-white rounded-xl border-[1px] border-border p-6"
        >
          {tabPanel()}
        </div>
      </div>
    </Layout>
  );
}

export default PatientProfile;
