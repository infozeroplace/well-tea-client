"use server";
import { cookies } from "next/headers";

export const setCookie = async (name, value) => {
  await cookies().set(name, value, {
    secure: true,
  });
};

export const getCookie = async (name) => {
  return await cookies().get(name)?.value;
};

export const deleteCookie = async (names) => {
  await names.forEach((name) => {
     cookies().delete(name);
  });
};
