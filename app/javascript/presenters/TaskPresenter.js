import PropTypes from 'prop-types';
import PropTypesPresenter from 'utils/PropTypesPresenter';

export default new PropTypesPresenter(
  {
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    author: PropTypes.object,
    assignee: PropTypes.object,
    state: PropTypes.string,
    transitions: PropTypes.array,
  },
  {
    id(task) {
      return task.id;
    },
    name(task) {
      return task.name;
    },
    description(task) {
      return task.description;
    },
    state(task) {
      return task.state;
    },
    author(task) {
      return task.author;
    },
    assignee(task) {
      return task.assignee;
    },
    transitions(task) {
      return task.transitions;
    },
  },
);
