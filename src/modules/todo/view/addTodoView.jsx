import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Col, Form, Row, FormGroup, Label, Input} from 'reactstrap';
import _ from 'lodash';

class AddTodoView extends Component {
     state = [
         name: '',
         description: ''
     ];

    render() {
        return (
            <div>
                <h1>Add Todo</h1>
                <Form>
                    <FormGroup>
                        <Label for="todoName">Name</Label>
                        <Input type="text" name="name" id="todoName" placeholder="enter item's name" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="todoDescription">Description</Label>
                        <Input type="textarea" name="description" id="todoDescription" />
                    </FormGroup>
                    <Button>Add Todo item</Button>
                </Form>
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
