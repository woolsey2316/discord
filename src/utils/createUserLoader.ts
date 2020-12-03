import DataLoader from "dataloader";
import { User } from "../entities/User";
import { ObjectID } from "typeorm";

// [1, 78, 8, 9]
// [{id: 1, username: 'tim'}, {}, {}, {}]
export const createUserLoader = () =>
  new DataLoader<ObjectID, User>(async (userIds) => {
    const users = await User.findByIds(userIds as ObjectID[]);
    const userIdToUser: Record<string, User> = {};
    users.forEach((u) => {
      userIdToUser[u._id.toString()] = u;
    });

    const sortedUsers = userIds.map((userId) => userIdToUser[userId.toString()]);
    // console.log("userIds", userIds);
    // console.log("map", userIdToUser);
    // console.log("sortedUsers", sortedUsers);
    return sortedUsers;
  });