import { databases } from '@/appwrite';
import { getTodosGroupedByColumn } from '@/utils/getTodosGroupedByColumn';
import { create } from 'zustand'

export interface BoardState {
    board: Board;
    getBoard: ()=>void
    setBoardState: (board:Board)=>void
    updateTodoInDB: (todo:Todo, columnId: TypedColumns)=>void

}

export const useBoardStore = create<BoardState>((set) => ({
  board: {
    columns: new Map<TypedColumns, Column>()
  },

  getBoard: async ()=>{
    const board = await getTodosGroupedByColumn()
    set({board});
  },

  setBoardState: (board:Board)=>{
    set({board});
  },
  
  updateTodoInDB: async (todo:Todo, columnId: TypedColumns)=>{
    await databases.updateDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID!,
      process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID!,
      todo.$id,
      {
        title: todo.title,
        status: columnId,
      }
    );
  }
}))

