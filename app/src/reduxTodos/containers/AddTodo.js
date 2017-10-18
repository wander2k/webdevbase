import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <Form inline onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <FormGroup>
        <FormControl type="text" ref={node => {
          input = node
        }} />
        </FormGroup>
        <Button type="submit" bsStyle="default">
          Add Todo
        </Button>
      </Form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
