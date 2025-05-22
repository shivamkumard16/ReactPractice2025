import React, { useEffect, useState } from 'react';

const Search = () => {
  const [value, setValue] = useState('');
  const [userData, setUserData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const res = await fetch('https://dummyjson.com/users');
        const uData = await res.json();
        setUserData(uData.users); // FIXED
      } catch (error) {
        console.log(error);
      }
    }

    fetchUserData();
  }, []);

  function handleChange(e) {
    const inputVal = e.target.value;
    setValue(inputVal);

    if (userData.length > 0) {
      const filterUsingValue = userData.filter((user) =>
        user.firstName.toLowerCase().includes(inputVal.toLowerCase())
      );
      setFilteredData(filterUsingValue);
    }
  }

  const dataToRender = filteredData.length > 0 ? filteredData : userData;

  return (
    <div>
      <input
        type="text"
        value={value}
        className="text-2xl border-2 border-black"
        placeholder="Enter your query"
        onChange={handleChange}
      />
      <div>
        {dataToRender.map((user) => (
          <div key={user.id} className="border-2 rounded-md hover:bg-blue-300 bg-blue-100 my-2 p-2">
            <img src={user.image} alt="img not loaded yet" />
            <p className="font-medium"><span className="text-red-500">Id : </span>{user.id}</p>
            <p className="font-medium"><span className="text-red-500">Name : </span>{user.firstName}</p>
            <p className="font-medium"><span className="text-red-500">Gender : </span>{user.gender}</p>
            <p className="font-medium"><span className="text-red-500">Username : </span>{user.username}</p>
            <p className="font-medium"><span className="text-red-500">Blood Group : </span>{user.bloodGroup}</p>
            <p className="font-medium"><span className="text-red-500">Eye Color : </span>{user.eyeColor}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
