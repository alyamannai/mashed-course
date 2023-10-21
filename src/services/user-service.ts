import apiClients from "./api-clients";
import create from "./http-service";

export interface User {
    id: number;
    name: string;
    message?: string;
  }

  export default create("./users")
