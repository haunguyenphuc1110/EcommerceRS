import Service from './Service';

const getListCategory1 = async () => {
  const task = new Service('http://165.22.97.19:8000/api/v1/category_1/');

  return task.get().then(data => {
    return data;
  });
};

const getListCategory2 = async () => {
  const task = new Service('http://165.22.97.19:8000/api/v1/category_2/');

  return task.get().then(data => {
    return data;
  });
};

const getListCategory2ByCateId1 = async (id) => {
  const task = new Service(`http://165.22.97.19:8000/category/level_2/?cate1_id=${id}`);

  return task.get().then(data => {
    return data;
  });
};

const getListCategory3ByCateId2 = async (id) => {
  const task = new Service(`http://165.22.97.19:8000/category/level_3/?cate2_id=${id}`);

  return task.get().then(data => {
    return data;
  });
};

const getListItem = async (pageNumber) => {
  const task = new Service(`http://165.22.97.19:8000/api/v1/products/popularity/?page=${pageNumber}`);

  return task.get().then(data => {
    return data;
  });
};

const getTopProductCate1 = async (id) => {
  const task = new Service(`http://165.22.97.19:8000/category/prod/first/${id}`);

  return task.get().then(data => {
    return data;
  });
}

const getTopProductCate2 = async (id) => {
  const task = new Service(`http://165.22.97.19:8000/category/prod/second/${id}`);

  return task.get().then(data => {
    return data;
  });
}

const getTopProductCate3 = async (id) => {
  const task = new Service(`http://165.22.97.19:8000/category/prod/third/${id}`);

  return task.get().then(data => {
    return data;
  });
}

const login = async ({userName, password}) => {
  const task = new Service(`http://165.22.97.19:8000/user/${userName}/${password}`);

  return task.get().then(data => {
    return data;
  });
}

export default {
  getListCategory1,
  getListCategory2,
  getListCategory2ByCateId1,
  getListCategory3ByCateId2,
  getListItem,
  getTopProductCate1,
  getTopProductCate2,
  getTopProductCate3,
  login
}