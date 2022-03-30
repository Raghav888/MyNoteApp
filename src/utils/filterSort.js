const sortDate = ({ noteList, sortbydate }) => {
  if (sortbydate) {
    return noteList.sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    });
  } else {
    return noteList;
  }
};

const sortPriority = ({ sortbypriority }, noteList) => {
  if (sortbypriority) {
    return noteList.sort(function (a, b) {
      return b.priority - a.priority;
    });
  } else {
    return noteList;
  }
};

const dataFilterbytag = ({ tags }, noteList) => {
  if (tags.length >= 1) {
    const tagfilterdata = noteList.filter(
      (item) => tags.indexOf(item.tag) !== -1
    );
    return tagfilterdata;
  }
  return noteList;
};

const compose = (state, ...args) => {
  const output = args.reduce((acc, curr) => {
    acc = curr(state, acc);
    return acc;
  }, state);

  return output;
};

export { compose, sortDate, sortPriority, dataFilterbytag };
