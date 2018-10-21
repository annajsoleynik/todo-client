import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Col, Form, Row } from 'reactstrap';
import _ from 'lodash';

class AddTodoView extends Component {
    componentDidMount() {
        // const todoId = this.props.match.params.todoId;
        // if (!_.isEmpty(todoId)) {
        //   this.props.todoGetById(todoId);
        // }
    }

    render() {
        return (
            <div>
                <h1>Add Todo</h1>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    // todoCurrentInfo: state.todo.todoCurrentInfo,
});

const mapDispatchToProps = dispatch => ({
    // todoGetById: todoId => dispatch(todoGetById(todoId)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTodoView);
