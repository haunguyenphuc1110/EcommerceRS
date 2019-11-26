import Service from './Service';

const getCategory = async () => {
  const task = new Service('http://165.22.97.19:8000/api/v1/category_1/');

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

export default {
  getCategory,
  getListItem,
  getTopProductCate1,
  getTopProductCate2,
  getTopProductCate3
}