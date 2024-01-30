import React from "react";
import { MemberList } from "./member-list-component";
import { Member } from "./member-list.vm";
import { getMembers } from "./member-list.repository";

interface Props {
  onSelect: (login: string) => void;
}

export const MemberListContainer: React.FC<Props> = (props) => {
  const { onSelect } = props;
  const [memberList, setMemberList] = React.useState<Member[]>([]);

  React.useEffect(() => {
    getMembers("lemoncode").then(setMemberList);
  }, []);
  return <MemberList members={memberList} onSelect={onSelect} />;
};
