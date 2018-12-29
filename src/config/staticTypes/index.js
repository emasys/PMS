// @flow
export type Developer = {
  id: number,
  note: string,
  state: string,
  days_since_last_checkin: number,
  developer_id: string,
  rating_type: string,
  developer_profile: {
    picture: string,
    email: string,
    first_name: string,
    last_name: string,
    location: string,
    level: string,
    partner_name: string,
    partner_id: string,
    cohort: string,
  },
  attribute_score: [
    {
      attribute_id: number,
      attribute: string,
      score: string,
      note: string,
    },
  ],
  created_at: string,
  updated_at: string,
  staff_id: string,
  staff_firstname: string,
  staff_lastname: string,
  staff_email: string,
  staff_role: string,
  average_score: string,
};

export type InitialState = {
  developers: { developers: Array<Developer> },
  commonState: { page: string, loading: false },
};

export type ReduxState = {
  developer: {
    developers: Array<Developer>,
  },
  common: {
    page: string,
    loading: boolean,
    tab: string,
  },
};

export type User = {
  loggedIn: boolean,
  data: {
    id: string,
    first_name: string,
    last_name: string,
    firstName: string,
    lastName: string,
    email: string,
    name: string,
    picture: string,
    roles: {
      Fellow: string,
      Andelan: string,
    },
  },
};
