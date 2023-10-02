const weakMap = new WeakMap();

function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) weakMap.set(endpoint, 1);
  else if (weakMap.get(endpoint) + 1 >= 5) throw new Error('Endpoint load is high');
  else weakMap.set(endpoint, weakMap.get(endpoint) + 1);
}

export { queryAPI, weakMap };

