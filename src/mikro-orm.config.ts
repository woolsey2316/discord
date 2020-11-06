import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core"
import path from 'path'

console.log("dirname: ", __dirname)
export default {
  migrations: {
    path: path.join(__dirname, "./migrations")
  },
  entities: [Post],
  dbName: 'dbreddit',
  type: 'mongo',
  debug: !__prod__
} as Parameters<typeof MikroORM.init>[0]