

const actionAndActionTypeCreator = (actionTypes) => {
  return actionTypes.reduce(
    (accum, actionType) => {
      accum.actions[actionType] = ( payload, otherAttrs = {} ) => ({
        type: actionType,
        payload
      });
      accum.actionTypes[actionType] = actionType;
      return accum;
    }, { actions: {}, actionTypes: {}});
};

export default actionAndActionTypeCreator;
