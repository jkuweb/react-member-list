import React from "react"
import { Member } from "./api.model"

export const getMember = (login: string): Promise<Member> => {
  return fetch(`https://api.github.com/users/${login}`)
    .then((response) => response.json())

}