import React from "react";
import { Link, generatePath } from "react-router-dom";

interface MemberEntity {
  id: number;
  login: string;
  avatar_url: string;
}

export const ListPage: React.FC = () => {
  const [memberList, setMemberList] = React.useState<MemberEntity[]>([]);

  React.useEffect(() => {
    fetch("https://api.github.com/orgs/lemoncode/members")
      .then((response) => response.json())
      .then(setMemberList);
  }, []);
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
