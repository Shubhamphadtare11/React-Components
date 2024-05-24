const Users = ({ data }) => {

  return (
    <div>
      <ol>
        {data?.map((items) => {
            const{id, email}=items
          return (
              <li key={id}>{email}</li>
          );
        })}
      </ol>
    </div>
  );
};

export default Users;
