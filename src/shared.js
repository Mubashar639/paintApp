
 class AllWorkDetails {
  allType = [
    {
     
      image: "./asset/01/project02.jpg",
      name: "BathRoom plumbing",
      type: "plumbing"
    },
    {
      image: "./asset/01/project04.jpg",
      name: "White House",
      type: "Painting"
    },
    {
      image: "./asset/01/project03.jpg",
      name: "Interior Door Instalation",
      type: "Interior"
    },
    {
      image: "./asset/01/project06.jpg",
      name: "BathRoom plumbing",
      type: "plumbing"
    },
    {
      image: "./asset/01/project07.jpg",
      name: "White House",
      type: "Painting"
    },
    {
      image: "./asset/01/project05.jpg",
      name: "Green House",
      type: "Electrical"
    },  {
      image: "./asset/01/project03.jpg",
      name: "Green House",
      type: "Interior"
    },
    {
      image: "./asset/01/project10.jpg",
      name: "white House",
      type: "Electrical"
    },

  ];
  electrical=[
    {
      image: "./asset/01/project08.jpg",
      name: "Green House",
      type: "Electrical"
    },
    {
      image: "./asset/01/project10.jpg",
      name: "white House",
      type: "Electrical"
    },
    {
      image: "./asset/01/project01.jpg",
      name: "Plumbing",
      type: "Plumbing"
    },
  ]
  interior=[
    {
      image: "./asset/01/project03.jpg",
      name: "Green House",
      type: "Interior"
    },
    {
      image: "./asset/01/project05.jpg",
      name: "white House",
      type: "Interior"
    }
  ]
  painting=[
    {
      image: "./asset/01/project02.jpg",
      name: "Painting White House in London",
      type: "Painting"
    },
    // {
    //   image: "./asset/01/project05.jpg",
    //   name: "Painting White House in Manchester",
    //   type: "Painting"
    // },
    // {
    //   image: "./asset/01/project04.jpg",
    //   name: "Blue Working",
    //   type: "Painting"
    // },
    {
      image: "./asset/01/project07.jpg",
      name: "Interior Design",
      type: "Painting"
    }

  ]
  plember=[
    {
      image: "./asset/01/project01.jpg",
      name: "Plumbing",
      type: "Plumbing"
    },
  
  ]
  repair=[
    {
      image: "./asset/01/project09.jpg",
      name: "Washing Machine Repair",
      type: "Repair"
    },
    {
      image: "./asset/01/project06.jpg",
      name: "Door Repairing",
      type: "Repair"
    }
  ]

}
// ......................................user accounts ...................>
const allobject=new AllWorkDetails()
export default allobject;

// class Accounts {
//   users = [
//     {
//       email: "test@test.com",
//       password: "password",
//       name: "Admin",
//       noc: "abcdef"
//     }
//   ];

//   addAccount = account => {
//     this.users.push(account);
//     return account;
//   };

//   login = creds =>
//     this.users.find(
//       user => user.email === creds.email && user.password === creds.password
//     );
// }

