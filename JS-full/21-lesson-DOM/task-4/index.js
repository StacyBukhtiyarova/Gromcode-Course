const getTitle = () => {
  const title = document.querySelector('.title').textContent;
  return title;
};
console.log(getTitle());

const getDescription = () => {
  const description = document.querySelector('.about');
  return description.innerText;
};
getDescription();

const getPlans = () => {
  const plans = document.querySelector('.plans');
  return plans.innerHTML;
};
console.log(getPlans());

const getGoal = () => {
  const goal = document.querySelector('.goal');
  return goal.outerHTML;
};
console.log(getGoal());
export { getTitle, getDescription, getPlans, getGoal };
