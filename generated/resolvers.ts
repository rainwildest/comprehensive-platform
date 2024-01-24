import { Resolvers } from "generated/resolvers-types";
import prisma from "lib/prisma";
import { setLoginSession } from "lib/auth";

const resolvers: Resolvers = {
  User: {
    // posts: (parent) => {
    //   console.log("kk", parent);
    //   return [{ id: 1, title: "22" }];
    // }
  },
  Query: {
    getUser: (_parent, args) => {
      return prisma.user.findUnique({
        where: { id: Number(args.id) }
      });
    },

    signIn: async (_parent, args, ctx) => {
      // const result = await prisma.$queryRaw<User[]>`SELECT * FROM User`
      const user = await prisma.user.findFirst({
        where: {
          OR: [{ email: args.username }, { telphone: args.username }],
          AND: {
            password: args.password
          }
        }
      });

      const token = user ? await setLoginSession(ctx.res, user) : "";

      return { token, user };
    }
  }
};

export default resolvers;
