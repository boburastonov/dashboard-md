import React, { JSX } from "react";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";

import type * as Store from "@/store";

import * as Api from "../api";
import * as Types from "../types";
import * as Actions from "../actions";
import * as Mappers from "../mappers";
import * as Constants from "../constants";

interface IProps {
  children: JSX.Element;
}

const Auth: React.FC<IProps> = ({ children }) => {
  const dispatch = useDispatch();

  const token = useSelector<Store.Types.IState, string>(
    (state) => state.auth.token
  );

  useQuery<Types.IQuery.Profile>({
    queryKey: [Constants.ENTITY, "profile", token],
    queryFn: async () => {
      dispatch(Actions.Profile.request());
      const { data } = await Api.Profile();
      return Mappers.Profile(data?.data);
    },
    enabled: Boolean(token), // yoki !!token
    onSuccess: (profile) => {
      dispatch(Actions.Profile.success({ profile }));
    },
    onError: () => {
      dispatch(Actions.Logout.request());
    },
    refetchOnWindowFocus: false,
    retry: false,
  });

  return children;
};

export default Auth;
