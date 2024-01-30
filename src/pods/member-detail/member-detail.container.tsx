import React from "react";
import { useParams } from "react-router-dom";
import { MemberDetailEntity } from "./member-detail.vm";
import { MemberDetail } from "./memeber-detail.component";
import { getMember } from "./member-detail.repository";

export const MemberDetailContainer: React.FC = () => {
  const [member, setMember] = React.useState<MemberDetailEntity>({
    id: 0,
    login: '',
    avatarUrl: '',
    bio: '',
    company: ''
  });
  const { login } = useParams();
  React.useEffect(() => {
      getMember(login)     
      .then(setMember);
  }, [login]);
  return <MemberDetail member={member}/>
}