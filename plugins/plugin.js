module.exports = function ({ types: t }) {
  return {
    visitor: {
      BindExpression(path) {
        const newNode = t.memberExpression(
          t.memberExpression(
            t.memberExpression(
              t.identifier(path.node.object.name),
              t.identifier('prototype')),
            t.identifier(path.node.callee.name)),
          t.identifier('call')
        );
        path.replaceWith(newNode);
      }
    }
  };
}
