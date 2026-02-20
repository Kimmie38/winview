// No backend integration - all queries return null
const create = {
  db: (database) => ({
    from: (table) => {
      return {
        getById: async (id) => {
          return null;
        },
      };
    },
  }),
};

export default create;
