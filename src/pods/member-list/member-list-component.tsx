import React from "react";
import { Member } from "./member-list.vm";
import { MemberListHeader, MemberListRow } from "./components";

interface Props {
  members: Member[];
}
export const MemberList: React.FC<Props> = (props) => {
  const { members } = props;
  return (
    <div className="list-user-list-container">
      <MemberListHeader/>
      {members.map((member) => (
        <MemberListRow key={member.id} member={member}/>
      ))}
    </div>
  );
};
