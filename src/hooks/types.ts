export interface IUseFetch {
    count: number
    data: Data[]
    success: boolean
}

export interface Data {
    baseSubjects: string[] | undefined
    bootcamp: string
    createdAt: string
    goalsOfProgram: string
    mbaFormat: string
    mbaTypeOfProgram: string
    picture: string
    scholarshipAvailable: boolean
    showInMenu: boolean
    specializedSubjects: string[]
    title: string
    titleEng: string
    url: string
    user: string
    whatWillYouLearn: string[]
    __v: number
    _id: string
}