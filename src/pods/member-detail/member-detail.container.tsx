import React from "react";
import { useParams } from "react-router-dom";
import { MemberDetailEntity } from "./member-detail.vm";
import { MemberDetail } from "./memeber-detail.component";

export const MemberDetailContainer: React.FC = () => {
  const [member, setMember] = React.useState<MemberDetailEntity>({
    id: 0,
    login: '',
    avatar_url: '',
    bio: '',
    company: ''
  });
  const { login } = useParams();
  React.useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setMember);
  }, [login]);
  return <MemberDetail member={member}/>
}