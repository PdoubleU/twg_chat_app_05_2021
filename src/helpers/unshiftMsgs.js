export const unshiftMsgs = (msgs) => {
  let arr = [];
  msgs.map((msg) => {
    arr.unshift({
      _id: msg.id,
      text: msg.body,
      createdAt: msg.insertedAt,
      user: {
        _id: msg.user.id,
        name: msg.user.firstName,
        avatar: msg.user.profilePic,
      },
    });
  });
  return arr;
};
