export const getAction = (actionType, actionData) => {
  if (!actionType || actionType === "") {
    console.error("action type not provided");
  }
  return {
    type: actionType,
    data: actionData,
  };
};
