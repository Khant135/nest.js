export class ApiResponse<T = any> {
  success: boolean;
  message?: string | null;
  data: T;
}