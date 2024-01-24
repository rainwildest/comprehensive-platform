import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "generated/schema.ts",
  documents: ["pages/**/*.tsx", "generated/fragments/*.tsx"],
  generates: {
    "generated/gql/": {
      preset: "client",
      plugins: []
    },
    "generated/resolvers-types.ts": {
      plugins: ["typescript", "typescript-resolvers"]
    }
  }
};

export default config;
