import * as am from "./api/api.model";
import * as vm from "./member-list.vm";

export const mapMemeberListToVM = (data: am.Member[]): vm.Member[] =>
  data.map(mapMemeberToVM);

const mapMemeberToVM = (data: am.Member): vm.Member => ({
  id: data.id,
  login: data.login,
  avatarUrl: data.avatar_url,
});
