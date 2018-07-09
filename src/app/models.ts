export class Note {
    id: number;
    title: string;
    content: string;
    folderId: number;
    folderName: string;
    tags: Array<{ name: string, id: string }>;
}

export class Tag {
    id: string;
    name: string;
    }

export class Folder {
    id: string;
    name: string;
    }
