import { formatTodosHelper } from "./formatTodoHelper";

export const fetchSuggestionHelper = async (board:Board) => {
    const todos = formatTodosHelper(board)

    const response = await fetch("/api/generateSummary", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ todos})
    });

    const gptData = await response.json();
    const {content} = gptData;
    return content;
    
}