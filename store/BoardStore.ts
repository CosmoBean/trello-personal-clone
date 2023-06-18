import { databases, storage } from '@/appwrite';
import { getTodosGroupedByColumn } from '@/utils/getTodosGroupedByColumn';
import { create } from 'zustand'

export interface BoardState {
    board: Board;
    getBoard: ()=>void
    setBoardState: (board:Board)=>void
    updateTodoInDB: (todo:Todo, columnId: TypedColumns)=>void
    searchString: string;
    setSearchString: (searchString:string)=>void
    deleteTask: (taskIndex:number, todo: Todo, id: TypedColumns)=>void


}

export const useBoardStore = create<BoardState>((set, get) => ({
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
  },
  deleteTask: async (taskIndex: number, todo:Todo, id:TypedColumns)=>{
    const newColumns = new Map(get().board.columns)

    newColumns.get(id)?.todos.splice(taskIndex, 1);
    set({board: {columns: newColumns}});

    if (todo.images){
      await storage.deleteFile(todo.images.bucketId, todo.images.fileId)
    }

    await databases.deleteDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID!,
      process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID!,
      todo.$id
    );
  },
  searchString:'',
  
  setSearchString: (searchString:string)=>{
    set({searchString});
  }
}))

