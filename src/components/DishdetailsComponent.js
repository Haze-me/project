import React, { Component } from 'react';
import {Card, CardImg, CardText, CardBody,  Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Label, Row, Col} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import {Link} from 'react-router-dom'
import CommentForm from './commetForm';
import { Loading } from './Loadingcomponent';
import { baseUrl } from '../shared/baseUrl';


function DishDetails({dish}) {
  return (
    <div className='col-12 col-md-5 m-1'>
      <Card>
         <CardImg top src={baseUrl + dish.image} alt={dish.name} />
        <CardBody>
          <CardText>{dish.name}</CardText>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

function CommentDetails({comments, postComment, dishId}) {
  if (comments != null)
    return(
    <div className='col-12 col-md-5 m-1'>
      <h4>Comments</h4>
      <ul className='list-unstyled'>
        {comments.map((comment) => {
          return(
      <li key = {comment.id}>
        <p>{comment.comment}</p>
        <p>--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
      </li>
           );
           }
           )}
      </ul>
      <CommentForm dishId={dishId} postComment={postComment}/>
    </div>
    );
    else
    return(
      <div></div>
    );
  }


  
const DishItems = (props) => {
  if (props.isLoading) {
    return(
      <div className='container'>
        <div className="row">
          <Loading/>
        </div>
      </div>
    )
  }

  else if (props.errMess) {
     return(
      <div className='container'>
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    )
  }
  if (props.dish != null) {

    return(
      <div className="container">
        <div className="row">
          <Breadcrumb>
      <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
      <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
      </Breadcrumb>
      <div className='col-12'>
        <h3>{props.dish.name}</h3>
        <hr/>
      </div>
      </div>
      <div className="row">
          <DishDetails dish={props.dish} />
          <CommentDetails comments={props.comments}
        postComment={props.postComment}
        dishId={props.dish.id}
      />
        </div>
      </div>
    );
  }
  else {
    return(
      <div>

      </div>
    );
  }
}
export default DishItems;

