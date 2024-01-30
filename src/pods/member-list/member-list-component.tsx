import React from "react";
import { Member } from "./member-list.vm";
import { MemberListHeader, MemberListRow } from "./components";

interface Props {
  members: Member[];
  onSelect: (login: string) => void
}
export const MemberList: React.FC<Props> = (props) => {
  const { members, onSelect } = props;
  return (
    <div className="list-user-list-container">
      <MemberListHeader/>
      {members.map((member) => (
        <MemberListRow key={member.id} member={member} onClick={() => onSelect(member.login)}/>
      ))}
    </div>
  );
};
