import type { App, Plugin } from 'vue'

type SFCWithInstall<T> = T & Plugin

export function makeInstaller(components: Plugin[]) {
  return (app: App) => {
    components.forEach((component) => {
      app.use(component)
    })
  }
}

export function withInstall<T>(component: T) {
  (component as SFCWithInstall<T>).install = (app: App) => {
    const name = (component as any)?.name || 'UnnamedComponent'
    app.component(name, component as SFCWithInstall<T>)
    return app
  }
  return component as SFCWithInstall<T>
}
