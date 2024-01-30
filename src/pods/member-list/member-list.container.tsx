import React from "react";
import { MemberList } from "./member-list-component";
import { Member } from "./member-list.vm";
import { getMembers } from "./member-list.repository";

export const MemberListContainer: React.FC = () => {
  const [memberList, setMemberList] = React.useState<Member[]>([]);
  React.useEffect(() => {
    getMembers("lemoncode").then(setMemberList);
  }, []);
  return <MemberList members={memberList} />;
};
