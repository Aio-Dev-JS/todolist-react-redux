// import { createStore } from "redux";
import {
  // createAction,
  // createReducer,
  configureStore,
  createSlice,
} from "@reduxjs/toolkit";

const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      // 새로운 오브젝트를 반환 하던가 { }
      state.unshift({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) =>
      // immutate를 해서 return 해야함 x {}
      state.filter((toDo) => toDo.id !== action.payload),
  },
});

/*
const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");
// Action을 따로 정의 하지 않아도된다.

const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    // 새로운 오브젝트를 반환 하던가 { }
    state.unshift({ text: action.payload, id: Date.now() });
  },
  [deleteToDo]: (state, action) =>
    // immutate를 해서 return 해야함 x {}
    state.filter((toDo) => toDo.id !== action.payload),
});
*/

//  switch를 안 해도 됨, immutae를 쉽게 할 수 있다.
// immmer, 복제하면 복제한대로, 안 하면 새로 복제 자동으로해줌

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addToDo.type:
//       return [{ text: action.payload, id: Date.now() }, ...state];
//     case deleteToDo.type:
//       return state.filter((toDo) => toDo.id !== action.payload);
//     default:
//       return state;
//   }
// };

const store = configureStore({ reducer: toDos.reducer });
// Redux devtool 사용 가능
// const store = createStore(reducer);

export const { add, remove } = toDos.actions;

// export const actionCreators = {
//   addToDo,
//   deleteToDo,
// };

export default store;
