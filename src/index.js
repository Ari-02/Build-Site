import { db } from './lib/firebase'; // Adjust the import path according to your setup

const addIndianDummyData = async () => {
  const indianTeamMembers = [
    {
      id: "1",
      name: "Ravi Kumar",
      email: "ravikumar@example.com",
      photoURL: "https://randomuser.me/api/portraits/men/2.jpg",
      role: "admin"
    },
    {
      id: "2",
      name: "Priya Sharma",
      email: "priyasharma@example.com",
      photoURL: "https://randomuser.me/api/portraits/women/2.jpg",
      role: "member"
    }
  ];

  const batch = db.batch();

  indianTeamMembers.forEach(member => {
    const memberRef = db.collection('teamMembers').doc(member.id);
    batch.set(memberRef, member);
  });

  await batch.commit();
  console.log("Indian dummy data added successfully!");
};

addIndianDummyData();
