export class Campaign{

    _id: string;
    title: string;
    setting: string;
    createDate: string;
    startDate: string;
    currentDate: string;
    user: string;
    milestones: any[];

}

export interface IAddCampaignRequest {
    title: string;
    setting: string;
    startDate?: string;
    currentDate?: string;
}