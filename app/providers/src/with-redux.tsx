import { FC } from 'react'
import { Provider } from 'react-redux'
import { store } from '@app/store'

export const withRedux = (component: FC) => () => <Provider store={store}>{component({})}</Provider>
