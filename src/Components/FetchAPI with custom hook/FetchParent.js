import React from 'react'
import useFetchAPI from "./useFetchAPI";
import Users from "./Users";
import IMPPerson from "./IMPPerson";

const FetchParent = () => {
    const data = useFetchAPI();
    // const UpdatedUser = IMPPerson(Users);
  return (
    <div>
        {data && <Users data={data} />}
    </div>
  )
}

export default FetchParent