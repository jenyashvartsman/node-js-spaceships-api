const getAll = async (): Promise<any[]> => {
  return Promise.resolve([]);
};

const getOne = async (id: any): Promise<any> => {
  return Promise.resolve({});
};

const createOne = async (data: any): Promise<any> => {
  return Promise.resolve({});
};

const updateOne = async (id: any, data: any): Promise<any> => {
  return Promise.resolve({});
};

const deleteOne = async (id: any): Promise<any> => {
  return Promise.resolve({});
};

export default { getAll, getOne, createOne, updateOne, deleteOne };
