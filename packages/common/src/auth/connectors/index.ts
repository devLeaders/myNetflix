import { ISingInRequest, IUserRequest, ISingInResponse, ISignInGoogleRequest } from "../models";
import AxiosInstance from "../../config/axios/configAxios";
import { AxiosPromise } from "axios";

export function signUp(obj: IUserRequest): AxiosPromise<any> {
  return AxiosInstance.post(`/auth/signup`, obj);
}

export function signIn(obj: ISingInRequest): AxiosPromise<ISingInResponse> {
  return AxiosInstance.post(`/auth/signin`, obj);
}
export function signInGoogle(obj: ISignInGoogleRequest): AxiosPromise<ISingInResponse> {
  return AxiosInstance.post(`/firebase-auth/google`, obj);
}
