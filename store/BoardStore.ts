import { getTodosGroupedByColumn } from '@/utils/getTodosGroupedByColumn';
import { create } from 'zustand'

export interface BoardState {
    board: Board;
    getBoard: ()=>void
}
export const useBoardStore = create<BoardState>((set) => ({
  board: {
    columns: new Map<TypedColumns, Column>()
  },
  getBoard: async ()=>{
    const board = await getTodosGroupedByColumn()
    set({board});
  }
}))

