import React from "react";
import { Link } from "react-router-dom";
import { routes } from "@/router";
import { Member } from "../member-list.vm";

interface Prop {
  member: Member;
}

export const MemberListRow: React.FC<Prop> = (props) => {
  const { member } = props;
  return (
    <>
      <img src={member.avatarUrl} alt={member.login} />
      <div>{member.id}</div>
      <div>
        <Link to={routes.detail(member.login)}>{member.login}</Link>
      </div>
    </>
  );
};
