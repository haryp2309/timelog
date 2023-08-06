export type MinimalSwaggerPath<Property extends string> = {
  path: string;
  method: "post" | "get";
  requestBody?: {
    content: Record<Property, "string">;
    example?: Record<Property, string>;
  };
  responses: number[];
  headers?: { name: string; example: string }[];
  dynamicRouteParams?: {
    name: string;
    example: string | number;
    type: "integer" | "string";
  }[];
};

export const generateSwaggerDoc = <Property extends string>(
  minimalSwaggerPath: MinimalSwaggerPath<Property>
) => ({
  [minimalSwaggerPath.path]: {
    [minimalSwaggerPath.method]: {
      parameters: [
        ...(minimalSwaggerPath?.headers?.map(({ name, example }) => ({
          in: "header",
          name,
          schema: {
            type: "string",
            example,
          },
        })) || []),
        ...(minimalSwaggerPath?.dynamicRouteParams?.map(
          ({ name, example, type }) => ({
            in: "path",
            name,
            schema: {
              type,
              example,
            },
          })
        ) || []),
      ],
      requestBody: minimalSwaggerPath.requestBody && {
        required: true,
        content: {
          "application/json": {
            schema: {
              properties: Object.fromEntries(
                Object.entries(minimalSwaggerPath.requestBody.content).map(
                  ([propertyName, propertyType]) => [
                    propertyName,
                    { type: propertyType },
                  ]
                )
              ),
              example: minimalSwaggerPath.requestBody.example,
            },
          },
        },
      },
      responses: Object.fromEntries(
        minimalSwaggerPath.responses
          .filter(Boolean)
          .map((statusCode) => [statusCode, {}])
      ),
    },
  },
});
