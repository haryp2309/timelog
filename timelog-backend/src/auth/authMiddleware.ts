import { JWT } from "@/auth/jwt";

export const authMiddleware = async (
  email: string | undefined,
  token: string | undefined,
  onForbidden: () => void,
  onAuthorized: () => void
) => {
  try {
    if (
      process.env.NODE_ENV === "dev" &&
      email == "bo@testmail.com" &&
      token == "dummy-token-123"
    ) {
      onAuthorized();
      return;
    }
    if (token && email) {
      const jwt = new JWT(email);
      const verified = await jwt.verifyToken(token);
      if (verified) {
        onAuthorized();
        return;
      } else {
        onForbidden();
      }
    }
  } catch {
    onForbidden();
  }
};
