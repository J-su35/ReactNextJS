import { ChangeEvent, useState } from "react";

interface PersonalInfo {
  firstName: string;
  lastName: string;
}

function StateObject() {

  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    firstName: "",
    lastName: "",
  });

//   const updateFirstName = (event: ChangeEvent<HTMLInputElement>) => {
//     setPersonalInfo({
//       ...personalInfo,
//       firstName: event.target.value,
//     });
//   }
//   const updateLastName = (event: ChangeEvent<HTMLInputElement>) => {
//     setPersonalInfo({
//       ...personalInfo,
//       lastName: event.target.value,
//     });
//   }



const updateField = (event: ChangeEvent<HTMLInputElement>) => {
    setPersonalInfo({
      ...personalInfo,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <form>
        <div>{JSON.stringify(personalInfo, null, 2)}</div>
        {/* <div>
            firstName:
            <input
            name="firstName"
            value={personalInfo.firstName}
            onChange={updateFirstName}
            />
        </div>
        <div>
            lastName:
            <input
            name="lastName"
            value={personalInfo.lastName}
            onChange={updateLastName}
            />
        </div> */}

      <div>
        firstName:
        <input
          name="firstName"
          value={personalInfo.firstName}
          onChange={updateField}
        />
      </div>

    </form>
  );
}
export default StateObject


