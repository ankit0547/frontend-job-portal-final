import axios from "axios";

const apiHeader = {};
apiHeader["app-name"] = "ONLINE-JOB-PORTAL";
apiHeader["Content-Type"] = "application/json";
apiHeader.responseType = "arraybuffer";

export default axios.create({
  // headers: apiHeader,
});
