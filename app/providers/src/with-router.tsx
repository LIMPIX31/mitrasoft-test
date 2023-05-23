import { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'

export const withRouter = (component: FC) => () => <BrowserRouter>{component({})}</BrowserRouter>
