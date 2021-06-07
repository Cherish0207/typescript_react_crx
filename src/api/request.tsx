import axios from "axios";
const instance = axios.create({
  timeout: 2000,
  baseURL: "http://localhost:4000",
});
export * from "axios"; // 导出 axios的类型声明
export default instance;
