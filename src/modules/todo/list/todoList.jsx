import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { todoGetAll } from './../_actions/todoActions';
import {Button} from 'reactstrap'


class TodoList extends Component {
  componentDidMount() {
    this.props.todoGetAll();
  }

  render() {
    return (
      <div>
        <h1>Todos</h1>
          {/*<Button color="primary">Add Todo</Button>*/} <Link to="/add-todo">Add Todo</Link>
        <ul>
          {this.props.todoList.map(el => (
            <li key={el._id}>{el.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todoList: state.todo.todoList
});

const mapDispatchToProps = dispatch => ({
  todoGetAll: () => dispatch(todoGetAll())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TodoList)
);
