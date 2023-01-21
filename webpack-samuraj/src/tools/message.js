export const message = (info) => console.log(info);
export const messageDom = (info) => {
  const container = document.querySelector('div');
  container.textContent = info;

  // console.log(d);
};
