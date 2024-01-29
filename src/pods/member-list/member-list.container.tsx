import React from "react"
import { MemberEntity } from "./member-list.vm";
import { MemberList } from "./member-list-component";

export const MemberListContainer: React.FC = () => {
  const [memberList, setMemberList] = React.useState<MemberEntity[]>([]);
  React.useEffect(() => {
    fetch("https://api.github.com/orgs/lemoncode/members")
      .then((response) => response.json())
      .then(setMemberList);
  }, []);
  return <MemberList members={memberList}/>
}