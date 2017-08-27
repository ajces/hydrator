function hydrate(element) {
  return element
    ? {
        tag: element.tagName.toLowerCase(),
        data: {},
        children: [].map.call(element.childNodes, function(element) {
          return element.nodeType === 3 ? element.nodeValue : hydrate(element);
        })
      }
    : element;
}

export default function () {
  return {
    events: {
      load(state, actions, root) {
        return hydrate(root);
      }
    }
  };
}