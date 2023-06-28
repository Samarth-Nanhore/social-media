import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Harry",
    lastName: "Potter",
    username: "harrypotter",
    password: "harrypotter123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [],
    followers: [],
  },
  // {
  //   _id: uuid(),
  //   firstName: "Ron",
  //   lastName: "Weasley",
  //   username: "ronweasley",
  //   password: "ronweasley123",
  //   createdAt: formatDate(),
  //   updatedAt: formatDate(),
  //   following: [],
  //   followers: [],
  // },
  // {
  //   _id: uuid(),
  //   firstName: "Naruto",
  //   lastName: "Naruto",
  //   username: "naruto",
  //   password: "naruto123",
  //   createdAt: formatDate(),
  //   updatedAt: formatDate(),
  //   following: [],
  //   followers: [],
  // },
  // {
  //   _id: uuid(),
  //   firstName: "Jhon",
  //   lastName: "Doe",
  //   username: "jhondoe",
  //   password: "123",
  //   createdAt: formatDate(),
  //   updatedAt: formatDate(),
  //   following: [],
  //   followers: [],
  // },
];
