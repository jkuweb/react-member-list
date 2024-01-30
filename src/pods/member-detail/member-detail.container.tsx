import React from "react";
import { MemberDetailEntity } from "./member-detail.vm";
import { MemberDetail } from "./memeber-detail.component";
import { getMember } from "./member-detail.repository";

interface Props {
  login: string
}
export const MemberDetailContainer: React.FC<Props> = (props) => {
  const {login} = props
  const [member, setMember] = React.useState<MemberDetailEntity>({
    id: 0,
    login: '',
    avatarUrl: '',
    bio: '',
    company: ''
  });

  React.useEffect(() => {
      getMember(login)     
      .then(setMember);
  }, [login]);
  return <MemberDetail member={member}/>
}