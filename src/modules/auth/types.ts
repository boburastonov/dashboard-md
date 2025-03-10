import { PERMISSIONS } from "@/helpers/enums";
import { IMinFile } from "@/helpers/interfaces";

export declare namespace IAction {
  export namespace Login {
    export interface Success {
      token: IEntity.Token;
    }
  }

  export namespace Profile {
    export interface Success {
      profile: IEntity.Profile;
    }
  }
}

export declare namespace IEntity {
  export interface Profile {
    id: string;
    fullName: string;
    firstName: string;
    lastName: string;
    login: string;
    activated: boolean;
    region: string[];
    photo: IMinFile | string;
    permissions: PERMISSIONS[];
  }

  export interface Token {
    accessToken: string;
  }
}

export interface IState {
  isAuthenticated: boolean;
  isFetched: boolean;
  token: string;
  profile: IEntity.Profile;
}

export declare namespace IForm {
  export interface Login {
    username: string;
    password: string;
  }
}

export declare namespace IQuery {
  export type Profile = IEntity.Profile;
}
