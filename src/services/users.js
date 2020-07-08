const fakeUsersDB = [{ id: 1, name: "Elsa Andersen" }];

export const getUser = (id) => {
  return fakeUsersDB.find((user) => id === user.id);
};
