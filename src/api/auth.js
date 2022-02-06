import http from "../utils/http";
import Request from "../utils/request";
import { toast } from "react-toastify";

export const signup = async (req) => {
  const request = new Request(req);
  try {
    const response = await http.GET(`/v3/web/profile`);
    // const { items = [], meta } = response;
    toast.success("Successful response");
    request.success();
  } catch (e) {
    request.error(e);
  } finally {
    request.finally();
  }
};
