export class Note {
        id: number;
        title: string;
        content: string;
        folderId: number;
        folderName: string;
        tags: Array<{ name: string, id: string }>;
}
