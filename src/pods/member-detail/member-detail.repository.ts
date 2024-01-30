import * as api from "./api/api";
import * as vm from "./member-detail.vm";
import { mapMemberDetailToVM } from "./member-detail.mapper";

export const getMember = (login: string): Promise<vm.MemberDetailEntity> => {
  return api.getMember(login).then(mapMemberDetailToVM);
};
