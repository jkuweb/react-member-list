import React from "react";
import { Link } from "react-router-dom";
import { routes } from "@/router";
import { MemberEntity } from "./member-list.vm";

interface Props {
  members: MemberEntity[];
}
export const MemberList: React.FC<Props> = (props) => {
  const { members } = props;
  return (
    <div className="list-user-list-container">
      <span className="list-header">Avatar</span>
      <span className="list-header">ID</span>
      <span className="list-header">Name</span>
      {members.map((member) => (
        <React.Fragment key={member.id}>
          <img src={member.avatarUrl} alt={member.login} />
          <div>{member.id}</div>
          <div>
            <Link to={routes.detail(member.login)}>{member.login}</Link>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};
