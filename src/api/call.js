import Service from './Service';

const getCategory = async () => {
  const task = new Service('https://demo2742272.mockable.io/datacat1');

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

export default {
  getCategory,
  getListItem
}