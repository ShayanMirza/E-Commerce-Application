import React, { useState } from 'react'
import { Form, Button, Col, Row } from 'react-bootstrap'

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  return (
    <Form onSubmit={submitHandler} inline>
      <Row className='align-items-center'>
        <Col xs='auto'>
          <Form.Control
            type='text'
            name='q'
            onChange={(e) => setKeyword(e.target.value)}
            placeholder='Search Products...'
            className='mr-sm-2 ml-sm-5 mb-2'
          ></Form.Control>
        </Col>
        <Col xs='auto'>
          <Button type='submit' variant='outline-info' className='p-2 mb-2'>
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  )
}

export default SearchBox
