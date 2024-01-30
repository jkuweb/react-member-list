import React from "react";
import { MemberList } from "./member-list-component";
import { getMembers } from "./api/api";
import { Member } from "./member-list.vm";
import { mapMemeberListToVM } from "./member-list.mapper";

export const MemberListContainer: React.FC = () => {
  const [memberList, setMemberList] = React.useState<Member[]>([]);
  React.useEffect(() => {
    getMembers("lemoncode")
      .then(mapMemeberListToVM)
      .then(setMemberList);
  }, []);
  return <MemberList members={memberList} />;
};
