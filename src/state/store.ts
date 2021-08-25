import { configureStore } from '@reduxjs/toolkit'
import { minimaMiddleware } from './minima.middleware'
import { minimaReducer } from './minima.reducer'

const reducer = {
    minima: minimaReducer
}


const store: any = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
        ...minimaMiddleware
    ]),
})

export default store



// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch