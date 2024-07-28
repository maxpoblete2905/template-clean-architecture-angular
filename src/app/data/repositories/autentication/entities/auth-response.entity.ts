// src/app/models/auth-result.interface.ts

interface StatusResponse {
  status: boolean;
  statusCode: number;
  message: string;
}

interface DataResponse {
  email: string;
  displayName: string;
  uid: string;
  token: string;
}

export interface AuthResponse {
  status: StatusResponse;
  data?: DataResponse | null;
}
