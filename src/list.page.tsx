import React from "react";
import { Link, generatePath } from "react-router-dom";
import { MembersContext } from "./main";

export const ListPage: React.FC = () => {
 const {memberList} = React.useContext(MembersContext)
  return (
    <>
      <h2>Hello from List Page</h2>
      <div className="list-user-list-container">
        <span className="list-header">Avatar</span>
        <span className="list-header">ID</span>
        <span className="list-header">Name</span>
        {memberList.map((member) => (
          <React.Fragment key={member.id}>
            <img src={member.avatar_url} alt={member.login} />
            <div>{member.id}</div>
            <div>
              <Link to={generatePath('/detail/:login', {login: member.login})}>{member.login}</Link></div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};
