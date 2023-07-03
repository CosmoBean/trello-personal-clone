import { formatTodosHelper } from "./formatTodoHelper";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const fetchSuggestionDummy = async (board:Board, userName: string) => {
    const todos = formatTodosHelper(board)
    await sleep(3000);
    const content = `Hello ${userName}! Welcome to the Personal Trello App! Here's a summary of your todos To do - ${todos.todo}, in Progress - ${todos.inprogress}, done - ${todos.done}. Keep up the good work and have a productive day! `;
    return content;
    
}

