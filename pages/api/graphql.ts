import { createYoga } from "graphql-yoga";
import type { NextApiRequest, NextApiResponse } from "next";
import { makeExecutableSchema } from "@graphql-tools/schema";
import gql from "graphql-tag";

import typeDefs from "generated/schema";
import resolvers from "generated/resolvers";
import { getLoginSession } from "lib/auth";

export const schema = makeExecutableSchema({
  resolvers,
  typeDefs: gql(typeDefs)
});

export default createYoga<{ req: NextApiRequest; res: NextApiResponse }>({
  schema,
  context: async (ctx) => {
    return { ...ctx, user: await getLoginSession(ctx.req) };
  },
  graphqlEndpoint: "/api/graphql"
});

// export const config = {
//   api: {
//     bodyParser: true
//   }
// };
