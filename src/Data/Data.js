const users = [
    {
      id: "7hZ2Q8cE7V",
      name: 'Tomas Smith',
      password: '1234',
      type: 'user',
      email: 'tomas19@aol.com'
    },
    {
      id: "7hZ2Q8cE7X",
      name: 'Elad Harel',
      password: '1234',
      type: 'admin',
      email: 'eladjmc88@gmail.com'
    },
    {
      id: "8dN4Q2eB2W",
      name: 'John Doe',
      password: '7GTHPPL',
      type: 'user',
      email: 'johndoe@gmail.com'
    },
    {
      id: "6mF9R3aD4X",
      name: 'Jane Doe',
      password: '6FDRKPL',
      type: 'user',
      email: 'janedoe@yahoo.com'
    },
    {
      id: "4kS1T8pG3U",
      name: 'Bob Johnson',
      password: '4JDMSKQ',
      type: 'user',
      email: 'bob.johnson@hotmail.com'
    },
    {
      id: "9pL5E1wC8V",
      name: 'Alice Lee',
      password: '2NDJYFL',
      type: 'admin',
      email: 'alicelee@gmail.com'
    },
    {
      id: "2tK6U9sZ1M",
      name: 'David Kim',
      password: '1KSMQDJ',
      type: 'user',
      email: 'davidkim@yahoo.com'
    },
    {
      id: "3yA7J1vR4B",
      name: 'Sarah Park',
      password: '3FLMQNK',
      type: 'user',
      email: 'sarahpark@gmail.com'
    },
    {
      id: "5fS8H2cE9N",
      name: 'Jack Brown',
      password: '8DPNLWK',
      type: 'user',
      email: 'jack.brown@hotmail.com'
    },
    {
      id: "1bT9N3mX2Q",
      name: 'Emily Chen',
      password: '5MFLPJS',
      type: 'user',
      email: 'emilychen@yahoo.com'
    },
    {
      id: "2vR8Z5jK9F",
      name: 'Megan Davis',
      password: '7LFDNSK',
      type: 'user',
      email: 'megandavis@aol.com'
    },
    {
      id: "6wS5G4fL2Q",
      name: 'Adam Wilson',
      password: '9MFLQPK',
      type: 'user',
      email: 'adamwilson@hotmail.com'
    },
    {
      id: "9zA1R6kC3H",
      name: 'Laura Brown',
      password: '3PFLDNK',
      type: 'admin',
      email: 'laura.brown@gmail.com'
    },
    {
      id: "4uB5S1dE8X",
      name: 'Chris Lee',
      password: '6LFNSJQ',
      type: 'user',
      email: 'chrislee@yahoo.com'
    },
    {
      id: "3tN8V2sK6J",
      name: 'Kelly Kim',
      password: '1DLMFKJ',
      type: 'user',
      email: 'kellykim@aol.com'
    },
    {
      id: "7qP9T3kF5R",
      name: 'Mike Davis',
      password: '8PLFDNK',
      type: 'user',
      email: 'mikedavis@hotmail.com'
    },
    {
      id: "2wJ5N6bS1L",
      name: 'Kate Johnson',
      password: '9LFDNSK',
      type: 'user',
      email: 'kate.johnson@gmail.com'
    },
    {
      id: "1mC3F5nL2R",
      name: 'Tom Smith',
      password: '4PLDNJK',
      type: 'user',
      email: 'tom.smith@yahoo.com'
    },
    {
      id: "8kV2Z5tH4F",
      name: 'Eric Kim',
      password: '2LFDNSK',
      type: 'user',
      email: 'erickim@aol.com'
    },
    {
      id: "6hP3T2cE7M",
      name: 'Susan Lee',
      password: '1DLMFKJ',
      type: 'user',
      email: 'susanlee@hotmail.com'
    },
    {
      id: "9rL1K2sT3P",
      name: 'Jessica Brown',
      password: '7LFDNSK',
      type: 'user',
      email: 'jessica.brown@gmail.com'
    },
    {
      id: "4wS5N2fL8K",
      name: 'Paul Wilson',
      password: '9PLFDNK',
      type: 'user',
      email: 'paulwilson@yahoo.com'
    },
    {
      id: "3mJ5C1nF2L",
      name: 'Linda Davis',
      password: '4LFDNSK',
      type: 'user',
      email: 'linda.davis@aol.com'
    },
    {
      id: "7tK2S4fL6Z",
      name: 'Jason Kim',
      password: '3DLMFKJ',
      type: 'user',
      email: 'jasonkim@hotmail.com'
    },
    {
      id: "2bN9C1sK8V",
      name: 'Karen Johnson',
      password: '5LFDNSK',
      type: 'user',
      email: 'karen.johnson@gmail.com'
    },
    {
      id: "8rF2V5tH1L",
      name: 'Sam Smith',
      password: '1PLFDNK',
      type: 'user',
      email: 'sam.smith@yahoo.com'
    },
    {
      id: "5jC2T3rP7N",
      name: 'Kevin Kim',
      password: '6DLMFKJ',
      type: 'user',
      email: 'kevinkim@aol.com'
    },
    {
      id: "6pK9S2fL3C",
      name: 'Julie Brown',
      password: '8LFDNSK',
      type: 'admin',
      email: 'julie.brown@hotmail.com'
    },
    {
      id: "1tN5F2nL9D",
      name: 'Peter Wilson',
      password: '2PLFDNK',
      type: 'user',
      email: 'peterwilson@gmail.com'
    },
    {
      id: "9vK6T5sH2F",
      name: 'Grace Lee',
      password: '9PLMFKJ',
      type: 'user',
      email: 'gracelee@aol.com'
    },
    {
      id: "4nS3F2cL1K",
      name: 'Mike Brown',
      password: '7LFDNSK',
      type: 'user',
      email: 'mikebrown@hotmail.com'
    },
    {
      id: "3wJ9C4nS8L",
      name: 'Christine Johnson',
      password: '1PLFDNK',
      type: 'user',
      email: 'christine.johnson@yahoo.com'
    },
    {
      id: "5rP2T7fK9N",
      name: 'Steven Smith',
      password: '5DLMFKJ',
      type: 'user',
      email: 'stevensmith@gmail.com'
    },
    {
      id: "2mC5N9sL3J",
      name: 'Karen Kim',
      password: '3PLFDNK',
      type: 'user',
      email: 'karenkim@aol.com'
    },
    {
      id: "8hV1S6tF5K",
      name: 'Matt Davis',
      password: '6LFDNSK',
      type: 'user',
      email: 'mattdavis@hotmail.com'
    },
    {
      id: "7bF1T2nK4S",
      name: 'Samantha Brown',
      password: '9LFDNSK',
      type: 'user',
      email: 'samantha.brown@gmail.com'
    },
    {
      id: "9jP3K2fL5D",
      name: 'Tom Wilson',
      password: '2PLFDNK',
      type: 'admin',
      email: 'tom.wilson@yahoo.com'
    },
    {
      id: "4kN7C3sF8T",
      name: 'Jenny Lee',
      password: '8DLMFKJ',
      type: 'user',
      email: 'jennylee@aol.com'
    },
    {
      id: "3vS6T1fK2L",
      name: 'Brian Smith',
      password: '4PLFDNK',
      type: 'user',
      email: 'briansmith@hotmail.com'
    },
    {
      id: "5tJ4N9cL8S",
      name: 'Anna Johnson',
      password: '7LFDNSK',
      type: 'admin',
      email: 'anna.johnson@gmail.com'
    }
  ];

  export default users;