import { fetch } from "undici-types";

const getUsers = ()=> fetch("https://api.github.com/users").then