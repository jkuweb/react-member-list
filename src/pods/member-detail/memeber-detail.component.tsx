import React from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "@/router";
import { MemberDetailEntity } from "./member-detail.vm";

interface Props {
  member: MemberDetailEntity;
}
export const MemberDetail: React.FC<Props> = (props) => {
  const { member } = props;
  const navigate = useNavigate();
  return (
    <>
      {member ? (
        <>
          <img src={member.avatarUrl} alt={member.login} />
          <h3>{member.login}</h3>
          <h4>ID:{member.id}</h4>
          <h4>Company:{member.company}</h4>
          <h4>Bio:{member.bio}</h4>
        </>
      ) : (
        <div>Loading...</div>
      )}
      <button onClick={() => navigate(routes.list)}>Volver a la lista</button>
    </>
  );
};
