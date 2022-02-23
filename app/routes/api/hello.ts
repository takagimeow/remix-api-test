import { json, LoaderFunction } from "remix";

export const loader: LoaderFunction = () => {
  return json({
    value: "Hello, World",
  });
};
