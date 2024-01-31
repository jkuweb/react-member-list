import React from "react";
import { Member } from "../member-list.vm";
import { ButtonList } from "@/common/components/button";

interface Prop {
  member: Member;
  onClick: () => void;
}

export const MemberListRow: React.FC<Prop> = (props) => {
  const { member, onClick } = props;
  return (
    <>
      <img src={member.avatarUrl} alt={member.login} />
      <div>{member.id}</div>
      <div>
        <ButtonList
          variant="contained"
          sx={{
            backgroundColor: "#0d3a3a",
          }}
          size="medium"
          onClick={onClick}
        >
          {member.login}
        </ButtonList>
      </div>
    </>
  );
};
