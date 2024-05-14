import { type ClassValue, clsx } from "clsx";
import { ReadonlyURLSearchParams } from "next/navigation";
import { twMerge } from "tailwind-merge";

// export const createUrl = (pathname: string, params: URLSearchParams | ReadonlyURLSearchParams) => {
//   const paramsString = params.toString();
//   const queryString = `${paramsString.length ? '?' : ''}${paramsString}`

//   return `${pathname}${queryString}`;
// }

export const createUrl = (
  pathname: string,
  params: URLSearchParams | ReadonlyURLSearchParams,
) => {
  // Convert URLSearchParams to an array of key-value pairs
  const paramEntries: [string, string][] = Array.from(params.entries());

  // Parse the existing URL
  const url = new URL(pathname, window.location.origin);

  // Clear existing query parameters
  url.search = "";

  // Add new query parameters
  for (const [key, value] of paramEntries) {
    url.searchParams.set(key, value);
  }

  // Return the modified URL
  return url.toString();
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
