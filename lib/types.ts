export type FilterTabs = {
  id: string;
  name: string;
};

export interface ActivitiesTypes {
  id: string;
  name: string;
  community_name: string;
  created_at: Date;
  new_member: boolean;
  status: string;
};
