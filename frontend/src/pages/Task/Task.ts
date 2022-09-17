import OpportunityType from "./OpportunityType";
import TaskType from "./TaskType";

export interface Task {
    type: OpportunityType.TASK;
    subtype: TaskType;
    skills: string[];
    task: ImageCaptioningTask;
    datePublished: Date;
}

export interface ImageCaptioningTask {
    imageId: string;
    imageUrl: string;
}