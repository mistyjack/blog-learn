import axios from "axios";

export default ({ req }) => {
  if (typeof window === "undefined") {
    // We are on the server
    // request should be made to "http://SERVICENAME.NAMESPACE.svc.cluster.local/api/users/currentuser"
    return axios.create({
      baseURL: "http://ingress-nginx-controller.kube-system.svc.cluster.local",
      headers: req.headers
    });
  } else {
    // We must be on the browser
    return axios.create({
      baseURL: "/"
    });
  }
};
