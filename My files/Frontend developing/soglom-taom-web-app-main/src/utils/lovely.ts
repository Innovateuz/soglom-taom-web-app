export const saveToLocal = async (product: any, setLovely: any) => {
  // @ts-ignore
  let data: [] = JSON.parse(window.localStorage.getItem("liked")) || [];
  let sample: any[] = [...data];

  if (!data?.filter((x: any) => x.id === product.id)?.length) {
    sample.push(product);
    setLovely(sample);
    window.localStorage.setItem("liked", JSON.stringify(sample));
    return;
  }

  let filtered = data.filter((i: any) => i.id !== product.id);
  window.localStorage.setItem("liked", JSON.stringify(filtered));
  setLovely(filtered);
};

export const isLiked = (id: any, data: any) => {
  // @ts-ignore
  return data.some((el: any) => id == el.id);
};

export const setInit = (setLiked: any) => {
  // @ts-ignore
  let data: [] = JSON.parse(window.localStorage.getItem("liked")) || [];
  setLiked(data);
};
