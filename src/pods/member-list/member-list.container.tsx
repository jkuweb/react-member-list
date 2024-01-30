import React from "react"
import { MemberEntity } from "./member-list.vm";
import { MemberList } from "./member-list-component";
import { getMembers } from "./api/api";

export const MemberListContainer: React.FC = () => {
  const [memberList, setMemberList] = React.useState<MemberEntity[]>([]);
  React.useEffect(() => {
    getMembers('lemoncode').then(setMemberList) 
  }, []);
  return <MemberList members={memberList}/>
}