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
    name: 'Nicholas',
    surname: 'Rodman',
    email: 'spiderman@gmail.com',
    password: 'spiderpass',
    role: 'HELPER',
    profilePic: 'http://localhost:3000/icons/nicholas.jpg',
    location:{
      type:'Point',
      coordinates: [2.154007, 41.390205]
    },
    address: 'Barcelona, Spain',
    phoneNumber: '+34677798451',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 12,
    slogan: "I don't build walls, I fix things!",
    status: 'morning time',
    speciality: ['Computer', 'Internet', 'Phone'],
  },
  {
    name: 'Alex',
    surname: 'Olalde',
    email: 'batman@gmail.com',
    password: 'batpass',
    role: 'HELPER',
    profilePic: 'http://localhost:3000/icons/alex.jpg',
    location:{
      type:'Point',
      coordinates: [2.354007, 42.390205]
    },
    address: 'Barcelona',
    phoneNumber: '+34677798451',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 13,
    slogan: "I'm a loving neibourgh, and a master with phones",
    status: 'all day',
    speciality: ['Phone'],
  },
  {
    name: 'Doug',
    surname: 'Christie',
    email: 'superman@gmail.com',
    password: 'superpass',
    role: 'HELPER',
    profilePic: 'http://localhost:3000/icons/doug.jpg',
    location:{
      type:'Point',
      coordinates: [2.254007, 41.890205]
    },
    address: 'Hospitalet City',
    phoneNumber: '+34677798451',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 15,
    slogan: 'Photography master, overlord lover',
    status: 'only weekends',
    speciality: ['Computer', 'Other'],

  },
  {
    name: 'Anton',
    surname: 'Finnish',
    email: 'aquaman@gmail.com',
    password: 'aquapass',
    role: 'HELPER',
    profilePic: 'http://localhost:3000/icons/anton.jpg',
    location:{
      type:'Point',
      coordinates: [2.154007, 41.990205]
    },
    address: 'Beach City',
    phoneNumber: '+34677798451',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 15,
    slogan: 'Master in designing logos, and fixing stuff by slapping',
    status: 'only weekend',
    speciality: ['Other', 'Phone'],

  },
  {
    name: 'Sergio',
    surname: 'Tesla',
    email: 'ironhacker@gmail.com',
    password: 'ironpass',
    role: 'HELPER',
    profilePic: 'http://localhost:3000/icons/sergio.jpg',
    location:{
      type:'Point',
      coordinates: [2.169593099999929, 41.3843889]
    },
    address: 'Code City',
    phoneNumber: '+34677798451',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 17,
    slogan: 'Bitcoin master, and part-time english teacher',
    status: 'only weekend',
    speciality: ['Computer', 'Internet', 'TV'],

  },
  {
    name: 'Andrea Cornetto',
    surname: 'Angular',
    email: 'darth@gmail.com',
    password: 'aquapass',
    role: 'HELPER',
    profilePic: 'http://localhost:3000/icons/andrea.png',
    location:{
      type:'Point',
      coordinates: [2.1743558000000576, 41.4036299]
    },
    address: 'Beach City',
    phoneNumber: '+34677798451',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 25,
    slogan: 'I fix any of your Angular problems',
    status: 'only weekend',
    speciality: ['TV', 'Internet'],

  },
  {
    name: 'Charlie',
    surname: 'Paella',
    email: 'luke@gmail.com',
    password: 'lukepass',
    role: 'HELPER',
    profilePic: 'http://localhost:3000/icons/charlie.png',
    location:{
      type:'Point',
      coordinates: [2.1918571999999585, 41.39580509999999]
    },
    address: 'Beach City',
    phoneNumber: '+34677798451',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 15,
    slogan: 'Code teacher, and paella critic',
    status: 'only weekend',
    speciality: ['Other', 'TV'],

  },
  {
    name: 'Amanda',
    surname: 'Finnish',
    email: 'jarjar@gmail.com',
    password: 'jarpass',
    role: 'HELPER',
    profilePic: 'http://localhost:3000/icons/amanda.jpg',
    location:{
      type:'Point',
      coordinates: [2.189640700000041, 41.3969391]
    },
    address: 'Beach City',
    phoneNumber: '+34677798451',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 25,
    slogan: 'Fix all computer issues, while bringing you a coffee',
    status: 'only weekend',
    speciality: ['Computer'],

  },
  {
    name: 'Thor',
    surname: 'Thundergod',
    email: 'frodo@gmail.com',
    password: 'frodopass',
    role: 'HELPER',
    profilePic: 'http://localhost:3000/icons/thor.jpg',
    location:{
      type:'Point',
      coordinates: [2.19103419999999, 41.40503289999999]
    },
    address: 'Beach City',
    phoneNumber: '+34677798451',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 19,
    slogan: 'If you dont mind swearing, then I will fix your computer',
    status: 'only weekend',
    speciality: ['Computer', 'Phone'],

  },
  {
    name: 'Matias',
    surname: 'Itlian',
    email: 'gollum@gmail.com',
    password: 'gollumpass',
    profilePic: 'http://localhost:3000/icons/matias.png',
    role: 'HELPER',
    location:{
      type:'Point',
      coordinates: [-3.6921270999999933, 40.4137818]
    },
    address: 'Beach City',
    phoneNumber: '+34677798451',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 15,
    slogan: 'Computer and Pizza expert',
    status: 'only weekend',
    speciality: ['Computer', 'Phone'],

  },
  {
    name: 'Ivy',
    surname: 'Dog',
    email: 'gandalf@gmail.com',
    password: 'gandalfpass',
    role: 'HELPER',
    profilePic: 'http://localhost:3000/icons/ivy.jpg',
    location:{
      type:'Point',
      coordinates: [2.1887362999999596, 41.39581630000001]
    },
    address: 'Beach City',
    phoneNumber: '+34677798451',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 15,
    slogan: 'While sitting on your lap, I fix any problem you have',
    status: 'only weekend',
    speciality: ['Phone', 'TV', 'Other'],

  },
  {
    name: 'Marta',
    surname: 'Us',
    email: 'Ironman@gmail.com',
    password: 'ironpass',
    role: 'HELPER',
    profilePic: 'http://localhost:3000/icons/marta.jpg',
    location:{
      type:'Point',
      coordinates: [2.1902811999999585, 41.4080056]
    },
    address: 'Beach City',
    phoneNumber: '+34677798451',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 11,
    slogan: 'I can solve all internet problems, as long if there is no mostard around',
    status: 'only weekend',
    speciality: ['Computers', 'Internet', 'Phone'],

  },
  {
    name: 'Roberto',
    surname: 'Chaval',
    email: 'jaime@gmail.com',
    password: 'jaimepass',
    role: 'HELPER',
    profilePic: 'http://localhost:3000/icons/roberto.jpg',
    location:{
      type:'Point',
      coordinates: [2.6305170000000544, 39.568009]
    },
    address: 'Beach City',
    phoneNumber: '+34677798451',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 13,
    slogan: 'Just say chaval, and I will fix it all',
    status: 'only weekend',
    speciality: ['TV', 'Other'],

  },
  {
    name: 'Max',
    surname: 'Russian',
    email: 'tyrion@gmail.com',
    password: 'tyrionpass',
    role: 'HELPER',
    profilePic: 'http://localhost:3000/icons/max.jpg',
    location:{
      type:'Point',
      coordinates: [2.1892365999999583, 41.4097037]
    },
    address: 'Beach City',
    phoneNumber: '+34677798451',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 15,
    slogan: 'I fix all your stuff!',
    status: 'only weekend',
    speciality: ['Computers'],

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
