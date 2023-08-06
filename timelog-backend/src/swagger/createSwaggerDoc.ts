import { CustomHttpHeaders } from "@/constants/headers";
import { booleanFilter } from "@/helpers/booleanFilter";
import { StatusCodes } from "@/helpers/statusCodes";
import {
  MinimalSwaggerPath,
  generateSwaggerDoc,
} from "@/swagger/swaggerDocGenerator";

type Options = {
  optOutAuthMiddleware?: boolean;
};
export const createSwaggerDoc = <P extends string>(
  config: MinimalSwaggerPath<P>,
  options?: Options
): ReturnType<typeof generateSwaggerDoc> => {
  const { optOutAuthMiddleware } = options || {};

  return generateSwaggerDoc({
    ...config,
    headers: [
      ...(config.headers || []),
      ...(!optOutAuthMiddleware
        ? [
            {
              name: CustomHttpHeaders.ACCESS_TOKEN,
              example: "dummy-token-123",
            },
            {
              name: CustomHttpHeaders.ACCESS_USER,
              example: "bo@testmail.com",
            },
          ]
        : []),
    ],

    responses: [
      ...config.responses,
      !optOutAuthMiddleware && StatusCodes.FORBIDDEN,
    ].filter(booleanFilter),
  });
};
