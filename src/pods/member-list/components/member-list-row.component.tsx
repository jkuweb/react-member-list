import React from "react";
import { Member } from "../member-list.vm";

interface Prop {
  member: Member;
  onClick: () => void
}

export const MemberListRow: React.FC<Prop> = (props) => {
  const { member, onClick } = props;
  return (
    <>
      <img src={member.avatarUrl} alt={member.login} />
      <div>{member.id}</div>
      <div>
        <a href="#" onClick={onClick}>{member.login}</a>
      </div>
    </>
  );
};
