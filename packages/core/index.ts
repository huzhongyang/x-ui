import { makeInstaller } from '@x-ui/utils'
import components from './components.ts'

const installer = makeInstaller(components)

export * from '@x-ui/components'
export default installer
