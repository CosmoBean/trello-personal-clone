interface Board {
    columns: Map<TypedColumns, Column>
}

type TypedColumns = "todo"|"inprogress"|"done"

interface Column {
    id: TypedColumns;
    todos : Todo[];
}

interface Todo{
    $id: string;
    $createdAt: string;
    title: string;
    status: TypedColumns;
    images?: Image;
}

interface Image {
    bucketId: string;
    fieldId: string;

}