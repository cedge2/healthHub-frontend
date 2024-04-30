import { HiOutlineHome, HiOutlineMail, HiOutlineUsers } from 'react-icons/hi';
import {TbUsers} from 'react-icons/tb';
import { FaRegCalendarAlt} from 'react-icons/fa';
import {
  RiUserHeartLine,
  RiUserLine,
} from 'react-icons/ri';
import {
  MdOutlineTextsms
} from 'react-icons/md';
import { AiOutlineSetting } from 'react-icons/ai';
import { BiCalendar, BiUserPlus } from 'react-icons/bi';

export const MenuDatas = [
  {
    title: 'BMI Calculator',
    path: '/',
    icon: HiOutlineHome,
  },
  {
    title: 'Patients',
    path: '/patients',
    icon: TbUsers,
  },
  {
    title: 'Administrators',
    path: '/receptionists',
    icon: HiOutlineUsers,
  },
  {
    title: 'Doctors',
    path: '/doctors',
    icon: RiUserHeartLine,
  },

  {
    title: 'Appointments',
    path: '/appointments',
    icon: FaRegCalendarAlt,
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: AiOutlineSetting,
  },
];

export const memberData = [
  {
    id: 1,
    name: 'John Smith',
    image: '/images/user1.jpg',
    admin: false,
    email: 'johnsmith@gmail.com',
    phone: '+1 234 567 8900',
    age: 25,
    gender: 'Male',
    blood: 'A+',
    date: '20 Aug 2021',
  },
  {
    id: 2,
    name: 'Jane Smith',
    image: '/images/user2.jpg',
    admin: false,
    email: 'janesmith@gmail.com',
    phone: '+1 456 789 1234',
    age: 34,
    gender: 'Female',
    blood: 'B+',
    date: '22 Nov 2023',
  },
  {
    id: 3,
    name: 'Miranda Brown',
    image: '/images/user3.jpg',
    admin: false,
    phone: '+1 890 123 4567',
    email: 'mirandabrown@gmail.com',
    age: 45,
    gender: 'Female',
    blood: 'O+',
    date: '12 Jan 2020',
  },
  {
    id: 4,
    name: 'William Anderson',
    image: '/images/user4.jpg',
    admin: true,
    phone: '+1 908 765 4321',
    email: 'williamanderson@gmail.com',
    age: 28,
    gender: 'Male',
    blood: 'AB+',
    date: '07 Feb 2001',
  },
  {
    id: 5,
    name: 'Minahil Khan',
    image: '/images/user5.jpg',
    admin: false,
    phone: '+1 890 123 456',
    email: 'minahilkhan@gmail.com',
    age: 35,
    gender: 'Female',
    blood: 'A+',
    date: '30 Dec 2019',
  },
  {
    id: 6,
    name: 'Alexa Garcia',
    image: '/images/user6.jpg',
    admin: false,
    phone: '+1 908 765 4321',
    email: 'alexagarcia@gmail.com',
    age: 29,
    gender: 'Female',
    blood: 'B+',
    date: '12 Jan 2020',
  },
  {
    id: 7,
    name: 'John Miller',
    image: '/images/user7.jpg',
    admin: false,
    phone: '+1 234 567 8901',
    email: 'johnmiller@gmail.com',
    age: 52,
    gender: 'Male',
    blood: 'O-',
    date: '18 Mar 2023',
  },
  {
    id: 8,
    name: 'Daniel Kumar',
    image: '/images/user8.jpg',
    admin: false,
    phone: '+1 456 789 1234',
    email: 'danielkumar@gmail.com',
    age: 27,
    gender: 'Male',
    blood: 'AB+',
    date: '01 June 2018',
  },
];

export const sortsDatas = {
  status: [
    {
      id: 1,
      name: 'Status...',
    },
    {
      id: 2,
      name: 'Pending',
    },
    {
      id: 3,
      name: 'Approved',
    },
    {
      id: 4,
      name: 'Cancelled',
    },
  ],

  title: [
    {
      id: 1,
      name: 'MD',
    },
    {
      id: 2,
      name: 'DO',
    },
    {
      id: 3,
      name: 'Mr',
    },
    {
      id: 4,
      name: 'Mrs.',
    },
  ],
  filterPatient: [
    {
      id: 1,
      name: 'Sort by...',
    },
    {
      id: 2,
      name: 'Newest Patients',
    },
    {
      id: 3,
      name: 'Oldest Patients',
    },
  ],

  genderFilter: [
    {
      id: 1,
      name: 'Gender...',
    },
    {
      id: 2,
      name: 'Female',
    },
    {
      id: 3,
      name: 'Male',
    },
    {
      id: 4,
      name: 'Other',
    },
  ],
  
  bloodTypeFilter: [
    {
      id: 1,
      name: 'Blood Type...',
    },
    {
      id: 2,
      name: 'A+',
    },
    {
      id: 3,
      name: 'A-',
    },
    {
      id: 4,
      name: 'B+',
    },
    {
      id: 5,
      name: 'B-',
    },
    {
      id: 6,
      name: 'AB+',
    },
    {
      id: 7,
      name: 'AB-',
    },
    {
      id: 8,
      name: 'O+',
    },
    {
      id: 9,
      name: 'O-',
    },
  ],

};

export const appointmentsData = [
  {
    id: 1,
    time: '2 hrs later',
    user: memberData[4],
    from: '10:00 AM',
    to: '12:00 PM',
    hours: 2,
    status: 'Pending',
    doctor: memberData[0],
    date: 'Jun 12, 2021',
  },
  {
    id: 2,
    time: '1 hrs ago',
    user: memberData[5],
    from: '13:00 Pm',
    to: '18:00 PM',
    hours: 5,
    status: 'Cancel',
    doctor: memberData[1],
    date: 'Feb 24, 2021',
  },
  {
    id: 3,
    time: '2 hrs ago',
    user: memberData[6],
    from: '10:00 AM',
    to: '12:00 PM',
    hours: 2,
    status: 'Approved',
    doctor: memberData[2],
    date: 'Mar 12, 2023',
  },
  {
    id: 4,
    time: '3 hrs later',
    user: memberData[7],
    from: '06:00 AM',
    to: '08:00 AM',
    hours: 3,
    status: 'Pending',
    doctor: memberData[3],
    date: 'Apr 06, 2023',
  },
  {
    id: 5,
    time: '4 hrs ago',
    user: memberData[3],
    from: '10:00 AM',
    to: '12:00 PM',
    hours: 7,
    status: 'Approved',
    doctor: memberData[4],
    date: 'May 18, 2023',
  },
];


export const shareData = [
  {
    id: 1,
    icon: HiOutlineMail,
    title: 'Email',
    description: 'Send to patient email address',
  },
  {
    id: 2,
    icon: MdOutlineTextsms,
    title: 'SMS',
    description: 'Send to patient phone number',
  },

];

export const doctorTab = [
  {
    id: 1,
    title: 'Personal Information',
    icon: RiUserLine,
  },
  {
    id: 2,
    title: 'Patients',
    icon: BiUserPlus,
  },
  {
    id: 3,
    title: 'Appointments',
    icon: BiCalendar,
  },
];

export const doctorsData = [
  {
    id: 1,
    user: memberData[0],
    title: 'Dr.',
  },
  {
    id: 2,
    user: memberData[1],
    title: 'Dr.',
  },
  {
    id: 3,
    user: memberData[2],
    title: 'Dr.',
  },
  {
    id: 4,
    user: memberData[3],
    title: 'Dr.',
  },
];

export const receptionsData = [
  {
    id: 1,
    user: memberData[6],
    title: 'Dr.',
  },
  {
    id: 2,
    user: memberData[7],
    title: 'Dr.',
  },
  {
    id: 3,
    user: memberData[5],
    title: 'Dr.',
  },
  {
    id: 4,
    user: memberData[4],
    title: 'Dr.',
  },
  {
    id: 5,
    user: memberData[2],
    title: 'Dr.',
  },
  {
    id: 6,
    user: memberData[1],
    title: 'Dr.',
  },
];
