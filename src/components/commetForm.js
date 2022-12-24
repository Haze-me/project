import React, {Component} from 'react';
//import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, Label, Row, Col
} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
//import { Link } from 'react-router-dom';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);


class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      isModalOpen: false
    };
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  handleSubmit(values) {
   this.toggleModal();
   this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
  }

  render() {
    return (
      <div>
        <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Add Comment</Button>

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row>
                <Col>
                  <Label htmlFor="rating">Rating</Label>
                </Col>
              </Row>
              <Row className="form-group">
                <Col>
                  <Control.select model=".rating" id="rating" name="rating">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Control.select>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Label htmlFor="firstname">Your Name</Label>
                </Col>
              </Row>
              <Row className="form-group">
                <Col>
                  <Control.text model=".author" id="author" name="author"
                    placeholder="Your Name"
                    className="form-control"
                    validators={{
                      required, minLength: minLength(3), maxLength: maxLength(15)
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".author"
                    show="touched"
                    messages={{
                      required: 'Required',
                      minLength: 'Must be 3 characters or greater',
                      maxLength: 'Must be 15 characters or less'
                    }}
                  />
                </Col>
              </Row>

              <Row>
                <Col>
                  <Label htmlFor="message">Comment</Label>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Control.textarea model=".message" id="message" name="message"
                    rows="6"
                    className="form-control" />
                </Col>
              </Row>

              <Row>
                <Col >
                  <Button type="submit" color="primary" className="mt-3">
                    Submit
                  </Button>
                </Col>

              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}
export default CommentForm;