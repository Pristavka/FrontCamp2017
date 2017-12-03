module.exports = function ({ types: t }) {
  return {
    visitor: {
      MemberExpression(path) {
        path.replaceWith(
          t.memberExpression(t.memberExpression(t.identifier(path.node.object.name), t.identifier('prototype')), t.identifier(path.node.property.name))
        )
      }
    }
  };
};