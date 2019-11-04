import Service from './Service';

const getCategory = async () => {
  const task = new Service('https://demo2742272.mockable.io/datacat1');

  return task.get().then(data => {
    return data;
  });
};

const getListItem = async () => {
  const task = new Service('https://demo7730250.mockable.io/hau/ecommerce/data/listItem');

  return task.get().then(data => {
    return data;
  });
};

export default {
  getCategory,
  getListItem
}