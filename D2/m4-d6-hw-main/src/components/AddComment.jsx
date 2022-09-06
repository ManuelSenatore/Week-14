import { useEffect, useState } from "react";
import { Button, Form } from 'react-bootstrap'

const AddComment = (props) => {

    const [comments, setComment] = useState({comment: '', rate: 1, elementId: null})

    // componentDidUpdate(prevProps) {
    //     if (prevProps.asin !== this.props.asin) {
    //         this.setState({
    //             comment: {
    //                 ...this.state.comment,
    //                 elementId: this.props.asin
    //             }
    //         })
    //     }
    // }

    useEffect(() => {
        setComment({
            ...comments,
              elementId: props.asin
        }
        )
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.asin])


   const sendComment = async (e) => {
        e.preventDefault()
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/comments', {
                method: 'POST',
                body: JSON.stringify(comments),
                headers: {
                    'Content-type': 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjAyOTIxNzAwOTM4MjAwMTVkNjlkNGQiLCJpYXQiOjE2NjIwMjMxMjcsImV4cCI6MTY2MzIzMjcyN30.I6b0OH9Z19fA56gR_JN7igfZg1dCjRkXr39-NUxd1iE'
                }
            })
            if (response.ok) {
                // the comment has been sent succesfully!!
                alert('Comment was sent!')
            } else {
                console.log('error')
                alert('something went wrong')
            }
        } catch (error) {
            console.log('error')
        }
    }


        return (
            <div>
                <Form onSubmit={sendComment}>
                    <Form.Group>
                        <Form.Label>Comment text</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Add comment here"
                            value={comments.comment}
                            onChange={e => setComment({
                                    ...comments,
                                    comment: e.target.value
                                }
                            )}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Rating</Form.Label>
                        <Form.Control as="select" value={comments.rate}
                            onChange={e => setComment({
                                    ...comments,
                                    rate: e.target.value
                                }
                            )}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }


export default AddComment