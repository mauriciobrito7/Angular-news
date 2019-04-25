export interface INews {
    id:number;
    title:string;
    content:string;
    author:string;
    date:string;
    label:string;
    img:string[];
    video:string[];
}

export class News implements INews {
    id: number;
    title: string;
    content: string;
    author: string;
    date: string;
    label: string;
    img: string[];
    video: string[];
    
    constructor(id,
        title,
        content,
        author,
        date,
        label,
        img,
        video) {}

}
