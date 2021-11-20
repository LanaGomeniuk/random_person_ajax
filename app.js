const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error("no element selected");
};

const url = "https://randomuser.me/api/";
const img = getElement(".user-img");
