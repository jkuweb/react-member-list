import * as am from "./api/api.model"
import * as vm from "./member-detail.vm"

export const mapMemberDetailToVM = (data: am.Member): vm.MemberDetailEntity => {
  return mapMemberToVM(data)
}

const mapMemberToVM = (data: am.Member): vm.MemberDetailEntity => ({
  id: data.id,
  login: data.login,
  avatarUrl: data.avatar_url,
  bio: data.bio,
  company: data.company,
})