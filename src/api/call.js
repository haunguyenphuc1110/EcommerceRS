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

const getListItem = async ({pageNumber, userId}) => {
  const task = new Service(`http://165.22.97.19:8000/api/v1/users/recommend?page=${pageNumber}&top_n=100&user_id=${userId}`);

  return task.get().then(data => {
    return data;
  });
};

const getListItemFullMode = async ({pageNumber, userId}) => {
  const task = new Service(`http://165.22.97.19:8000/api/v1/users/recommend?page=${pageNumber}&top_n=100&user_id=${userId}&mode=cate_full`);

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

const search = async (queryString) => {
  const task = new Service(`http://165.22.97.19:8000/api/v1/products/?q=${queryString}`);

  return task.get().then(data => {
    return data;
  });
}

const sendListChosenCategory = async (data) => {
  const task = new Service('http://165.22.97.19:8000/api/v1/users/survey', data);

  return task.post().then(data => {
    return data;
  });
}

const getRelatedProduct = async (id) => {
  const task = new Service(`http://165.22.97.19:8000/api/v1/products/related?product_id=${id}`);

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
  getListItemFullMode,
  getTopProductCate1,
  getTopProductCate2,
  getTopProductCate3,
  login,
  search,
  sendListChosenCategory,
  getRelatedProduct
}