const mongoose = require('mongoose');
const bcrypt         = require("bcrypt");
const bcryptSalt     = 10;
const User = require('../model/user');

mongoose.connect("mongodb://localhost/it-help");


const customer = new User({
  name: 'Marc',
  surname: 'Llopis',
  email: 'marcllopis89@gmail.com',
  password: 'marcpass',
  role: 'CUSTOMER',
  location:{
    type:'Point',
    coordinates: [2.154007, 41.390205]
  },
  address: 'Barcelona, Spain',
});

const helpers = [
  {
    name: 'Spiderman',
    surname: 'Parker',
    email: 'spiderman@gmail.com',
    password: 'spiderpass',
    role: 'HELPER',
    location:{
      type:'Point',
      coordinates: [2.154007, 41.390205]
    },
    address: 'Barcelona, Spain',
    phoneNumber: '+34677798451',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 15,
    slogan: 'I can fix anything',
    status: 'morning time',
    speciality: ['Computer', 'Internet', 'Phone'],
  },
  {
    name: 'Batman',
    surname: 'Wayne',
    email: 'batman@gmail.com',
    password: 'batpass',
    role: 'HELPER',
    location:{
      type:'Point',
      coordinates: [2.354007, 42.390205]
    },
    address: 'Barcelona',
    phoneNumber: '+34677798451',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 15,
    slogan: 'Master of Phone',
    status: 'all day',
    speciality: ['Phone'],
  },
  {
    name: 'Superman',
    surname: 'Parker',
    email: 'superman@gmail.com',
    password: 'superpass',
    role: 'HELPER',
    location:{
      type:'Point',
      coordinates: [2.254007, 41.890205]
    },
    address: 'Hospitalet City',
    phoneNumber: '+34677798451',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 15,
    slogan: 'Photography master',
    status: 'only weekends',
    speciality: ['Printer', 'Computer', 'Other'],

  },
  {
    name: 'Aquaman',
    surname: 'Fishy',
    email: 'aquaman@gmail.com',
    password: 'aquapass',
    role: 'HELPER',
    location:{
      type:'Point',
      coordinates: [2.154007, 41.990205]
    },
    address: 'Beach City',
    phoneNumber: '+34677798451',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 15,
    slogan: 'All about hardware',
    status: 'only weekend',
    speciality: ['Other', 'Phone'],

  },
  {
    name: 'Ironhacker',
    surname: 'Coder',
    email: 'ironhacker@gmail.com',
    password: 'ironpass',
    role: 'HELPER',
    location:{
      type:'Point',
      coordinates: [2.169593099999929, 41.3843889]
    },
    address: 'Code City',
    phoneNumber: '+34677798451',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 15,
    slogan: 'All your software problems will be solved',
    status: 'only weekend',
    speciality: ['Computer', 'Internet', 'TV'],

  },
  {
    name: 'Darth Vader',
    surname: 'Skywalker',
    email: 'darth@gmail.com',
    password: 'aquapass',
    role: 'HELPER',
    location:{
      type:'Point',
      coordinates: [-8.523700100000042, 41.405859]
    },
    address: 'Beach City',
    phoneNumber: '+34677798451',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 15,
    slogan: 'Apple Genius',
    status: 'only weekend',
    speciality: ['TV', 'Internet'],

  },
  {
    name: 'Luke',
    surname: 'Skywalker',
    email: 'luke@gmail.com',
    password: 'lukepass',
    role: 'HELPER',
    location:{
      type:'Point',
      coordinates: [2.1918571999999585, 41.39580509999999]
    },
    address: 'Beach City',
    phoneNumber: '+34677798451',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 15,
    slogan: 'Code teacher',
    status: 'only weekend',
    speciality: ['Other', 'TV'],

  },
  {
    name: 'Jar Jar',
    surname: 'Binks',
    email: 'jarjar@gmail.com',
    password: 'jarpass',
    role: 'HELPER',
    location:{
      type:'Point',
      coordinates: [2.189640700000041, 41.3969391]
    },
    address: 'Beach City',
    phoneNumber: '+34677798451',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 15,
    slogan: 'Fix all hardware',
    status: 'only weekend',
    speciality: ['Printer'],

  },
  {
    name: 'Frodo',
    surname: 'Baggins',
    email: 'frodo@gmail.com',
    password: 'frodopass',
    role: 'HELPER',
    location:{
      type:'Point',
      coordinates: [2.19103419999999, 41.40503289999999]
    },
    address: 'Beach City',
    phoneNumber: '+34677798451',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 15,
    slogan: 'Graphic design expert',
    status: 'only weekend',
    speciality: ['Other', 'Phone'],

  },
  {
    name: 'Gollum',
    surname: 'Precious',
    email: 'gollum@gmail.com',
    password: 'gollumpass',
    role: 'HELPER',
    location:{
      type:'Point',
      coordinates: [-3.6921270999999933, 40.4137818]
    },
    address: 'Beach City',
    phoneNumber: '+34677798451',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 15,
    slogan: 'Software Expert',
    status: 'only weekend',
    speciality: ['Computer', 'Phone'],

  },
  {
    name: 'Gandalf',
    surname: 'Grey',
    email: 'gandalf@gmail.com',
    password: 'gandalfpass',
    role: 'HELPER',
    location:{
      type:'Point',
      coordinates: [2.1887362999999596, 41.39581630000001]
    },
    address: 'Beach City',
    phoneNumber: '+34677798451',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 15,
    slogan: 'Smartphone Expert',
    status: 'only weekend',
    speciality: ['Phone', 'TV', 'Other'],

  },
  {
    name: 'Ironman',
    surname: 'Stark',
    email: 'Ironman@gmail.com',
    password: 'ironpass',
    role: 'HELPER',
    location:{
      type:'Point',
      coordinates: [2.1902811999999585, 41.4080056]
    },
    address: 'Beach City',
    phoneNumber: '+34677798451',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 15,
    slogan: 'I can solve all internet problems',
    status: 'only weekend',
    speciality: ['Computers', 'Internet', 'Phone'],

  },
  {
    name: 'Jaime',
    surname: 'Lannister',
    email: 'jaime@gmail.com',
    password: 'jaimepass',
    role: 'HELPER',
    location:{
      type:'Point',
      coordinates: [2.6305170000000544, 39.568009]
    },
    address: 'Beach City',
    phoneNumber: '+34677798451',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 15,
    slogan: 'Code Instructor',
    status: 'only weekend',
    speciality: ['TV', 'Other'],

  },
  {
    name: 'Tyrion',
    surname: 'Lannister',
    email: 'tyrion@gmail.com',
    password: 'tyrionpass',
    role: 'HELPER',
    location:{
      type:'Point',
      coordinates: [2.1892365999999583, 41.4097037]
    },
    address: 'Beach City',
    phoneNumber: '+34677798451',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 15,
    slogan: 'Hardware fixer',
    status: 'only weekend',
    speciality: ['Computers', 'Printer'],

  },

];




User.create(customer, (err, user) => {
  if (err) {
    throw err;
  }
  console.log(customer);
});

User.create(helpers, (err, docs)=>{
  if (err) { throw err };
    docs.forEach( (helpers) => {
      console.log(helpers.name)
    })
    mongoose.connection.close();
});
