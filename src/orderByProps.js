function orderByProps(obj, order) {
    const ordered = [];
    const unordered = [];
    
    for (const prop in obj) {
      if (order.includes(prop)) {
        ordered.push({ key: prop, value: obj[prop] });
      } else {
        unordered.push({ key: prop, value: obj[prop] });
      }
    }
  
    unordered.sort((a, b) => a.key.localeCompare(b.key));
  
    return [...order.map(key => ordered.find(el => el.key === key)), ...unordered];
  }
  
  export default orderByProps;