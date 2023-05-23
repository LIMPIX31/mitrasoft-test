import { FC } from 'react'
import { withRedux } from './with-redux'
import { withRouter } from './with-router'

export const withProviders = (component: FC): FC => withRedux(withRouter(component))
