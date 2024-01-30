import * as api from "./api/api"
import * as vm from "./member-list.vm"
import { mapMemberListToVM } from "./member-list.mapper"

export const getMembers = (org: string): Promise<vm.Member[]> => {
  return api.getMembers(org).then(mapMemberListToVM)
}