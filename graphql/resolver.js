const resolveFunctions = {
  RootQuery: {
    makgoli(obj, { title }, context, info) {
      const makgoli = new context.Makgoli();
      return makgoli.findMakgoli(title);
    },
  },
};

module.exports = resolveFunctions;
