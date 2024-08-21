import { configureStore } from '@reduxjs/toolkit'
import prodectSlice from './componat/slice/prodectSlice'
export default configureStore({
  reducer: {
    counter: prodectSlice,
  },
})