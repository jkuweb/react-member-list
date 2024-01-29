import React from "react";
import { Link } from "react-router-dom";
import { routes } from "@/router";
import { MembersContext } from "@/main";
import { AppLayout } from "@/layouts";

interface MemberEntity {
  id: number;
  login: string;
  avatar_url: string;
}

export const ListPage: React.FC = () => {
  const {memberList, clear} = React.useContext(MembersContext)


  return (
    <AppLayout>
      <h2>Hello from List Page</h2>
      <button onClick={clear} >Clear</button>
      <div className="list-user-list-container">
        <span className="list-header">Avatar</span>
        <span className="list-header">ID</span>
        <span className="list-header">Name</span>
        {memberList.map((member) => (
          <React.Fragment key={member.id}>
            <img src={member.avatar_url} alt={member.login} />
            <div>{member.id}</div>
            <div>
              <Link to={routes.detail(member.login)}>{member.login}</Link>
            </div>
          </React.Fragment>
        ))}
      </div>
    </AppLayout>
  );
};
