import { BarLoader } from "react-spinners";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return <BarLoader color="orange" width={"100%"} />;
}