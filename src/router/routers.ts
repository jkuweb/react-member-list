interface SwitchRoutes {
  root: string,
  list: string,
  detail: string
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  list: '/list',
  detail: '/detail/:login'
}