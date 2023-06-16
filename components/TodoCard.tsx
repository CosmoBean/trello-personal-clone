"use client";

import { XCircleIcon } from "@heroicons/react/24/solid";
import { DraggableProvidedDragHandleProps, DraggableProvidedDraggableProps } from "react-beautiful-dnd";

type TodoCardProps = {
    todo: Todo;
    index: number;
    id: TypedColumns;
    innerRef: (element: HTMLElement| null)=>void;
    draggableProps: DraggableProvidedDraggableProps;
    dragHandleProps: DraggableProvidedDragHandleProps|null|undefined;    
}
function TodoCard({todo, index, id, innerRef, draggableProps, dragHandleProps}: TodoCardProps) {
  return (
    <div
        className="bg-white rounded-md space-y-2 drop-shadow-md"
        {...draggableProps}
        {...dragHandleProps} 
        ref={innerRef}
    >
        <div className="flex items-center justify-between p-5">
            <p>{todo.title}</p>
            <button className="text-red-500 hover:text-red-600">
                <XCircleIcon className="ml-5 h-8 w-8" />
            </button>
        </div>
        {/* placeholder for image */}
    </div>
  )
}

export default TodoCard