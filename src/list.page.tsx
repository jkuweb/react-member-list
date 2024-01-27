import React from "react";
import { Link } from "react-router-dom";

interface MemberEntity {
  id: number;
  login: string;
  avatar_url: string;
}

export const ListPage: React.FC = () => {
  const [memberList, setMemberList] = React.useState<MemberEntity[]>([]);

  React.useEffect(() => {
    fetch("https://api.github.com/orgs/lemoncode/members")
      .then((response) => response.json())
      .then((members) => setMemberList(members));
  }, []);
  return (
    <>
      <h2>Hello from List Page</h2>
      <Link to="/detail">Go to Detail</Link>
    </>
  );
};
