export class Campaign{

    _id: string;
    title: string;
    setting: Setting;
    createDate: string;
    startDate: string;
    currentDate: string;
    user: string;
    milestones: any[];

}

export class Setting{

    _id: string;
    name: string;
    months:string[];
    days:string[];
    satellites:Satellite[];
}

export class Satellite{
    name: string;
    revolution: number;
    color: string;
}


export interface IAddCampaignRequest {
    title: string;
    setting: string;
    startDate?: string;
    currentDate?: string;
}