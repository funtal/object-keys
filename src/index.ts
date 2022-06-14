export const objectKeys = <TObject extends object>(object: TObject) => {
  if (object === null || typeof object !== 'object') {
    return [];
  }

  return Object.keys(object) as Array<keyof TObject>;
};

export default objectKeys;
