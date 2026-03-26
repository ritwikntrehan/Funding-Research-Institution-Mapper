export type Field = {
  id: string;
  name: string;
  description: string;
  agencyIds: string[];
  relatedFieldIds: string[];
  trendLabel: string;
  summary: string;
  topInstitutionIds: string[];
  topInvestigatorIds: string[];
  geographyIds: string[];
  emergingAreas: string[];
  underfundedAreas: string[];
  caveats: string[];
};

export type Institution = {
  id: string;
  name: string;
  type: string;
  geographyId: string;
  strengths: string[];
  fieldIds: string[];
  recentFundingAmount: number;
  trendLabel: string;
  notableInvestigatorIds: string[];
  summary: string;
};

export type Investigator = {
  id: string;
  name: string;
  institutionId: string;
  title: string;
  fieldIds: string[];
  recentAwardIds: string[];
  trendLabel: string;
  summary: string;
  relatedInvestigatorIds: string[];
};

export type Award = {
  id: string;
  title: string;
  agencyId: string;
  institutionId: string;
  investigatorId: string;
  fieldIds: string[];
  amount: number;
  year: number;
  status: string;
  summary: string;
};

export type Geography = { id: string; name: string; type: string; summary: string; topFieldIds: string[] };
export type Agency = { id: string; name: string; shortName: string; description: string };
export type Trend = { id: string; fieldId: string; year: number; amount: number; awardCount: number; signalLabel: string };
