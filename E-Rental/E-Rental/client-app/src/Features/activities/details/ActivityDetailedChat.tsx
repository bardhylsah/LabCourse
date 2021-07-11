import { Formik,  Field, FieldProps } from 'formik'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { Link } from 'react-router-dom'
import { Segment, Header, Comment, Form, Button } from 'semantic-ui-react'
import { useStore } from '../../../App/store/useStore'
import { formatDistanceToNow } from 'date-fns'


export default observer(function ActivityDetailedChat(){
    return (
        <>
            <Segment
                textAlign='center'
                attached='top'
                inverted
                color='teal'
                style={{ border: 'none' }}
            >
                <Header>Chat about this event</Header>
            </Segment>
            <Segment attached >
                <Comment.Group>
                        <Comment >
                            <Comment.Avatar src= '/assets/user.png' />
                            <Comment.Content>
                                <Comment.Author as='a'>Matt</Comment.Author>
                                <Comment.Metadata>
                                    <div>Today at 5:42PM </div>
                                </Comment.Metadata>
                                <Comment.Text >How artistic</Comment.Text>
                                <Comment.Action>
                                    <Comment.Action>Reply</Comment.Action>
                                </Comment.Action>
                            </Comment.Content>
                        </Comment>

                        <Comment >
                            <Comment.Avatar src= '/assets/user.png' />
                            <Comment.Content>
                                <Comment.Author as='a'>Joe Henderson</Comment.Author>
                                <Comment.Metadata>
                                    <div>5 days ago </div>
                                </Comment.Metadata>
                                <Comment.Text >Dude, this is awesome. Thanks so much</Comment.Text>
                                <Comment.Action>
                                    <Comment.Action>Reply</Comment.Action>
                                </Comment.Action>
                            </Comment.Content>
                            </Comment>

                            <Form reply>
                                <Form.TextArea/>
                                <Button
                                content='Add Reply'
                                labelPosition='left'
                                icon='edit'
                                primary
                                />
                                
                            </Form>
                </Comment.Group>
            </Segment>
        </>
    )
})
