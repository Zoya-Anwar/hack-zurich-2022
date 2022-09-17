export interface Task{
    name:string,
    category?:string,
    rating?:'High'|'Low',
    skills?:string[],
    date?:string,
    description?:string
}