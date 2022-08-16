const getNextId = (ids: number[]) => {
  if (!ids.length) {
    return 1;
  }

  let lastId = Number.MIN_VALUE;

  for (let index = 0; index < ids.length; index += 1) {
    if (ids[index] > lastId) {
      lastId = ids[index];
    }
  }

  return lastId + 1;
};

export default getNextId;
