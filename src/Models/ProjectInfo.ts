interface ProjectInfo {
    projectName?:string,
    models?:Model[],
    createdBy?:string,
    creationDate?:string,
}

interface Model{
    modelName?:string,
    modelId?:number,
}

export interface ReduxState{
    projectInfo? : ProjectInfo,
    counter : number
}