const person = {
  name: "Amir Khan Sk",
  address: {
    landmark: "Nahargarh Road",
    city: "Jaipur",
    country: "Rajasthan",
  },
  profiles: ["twitter", "linkedin", "instagram"],
  printProfile: () => {
    person.profiles.map((profile) => console.log(profile));
  },
};

export default function LearningJavaScript() {
  return (
    <>
      <div>{person.name}</div>
      <div>{person.address.landmark}</div>
      <div>{person.profiles[0]}</div>
      <div>{person.printProfile()}</div>
    </>
  );
}
