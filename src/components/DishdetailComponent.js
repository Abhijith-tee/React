import React  from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, } from 'reactstrap';

function RenderDish(Dishdetail) {
  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg top src={Dishdetail.image} alt={Dishdetail.name} />
            <CardBody>
              <CardTitle>{Dishdetail.name}</CardTitle>
              <CardText>{Dishdetail.description}</CardText>
            </CardBody>
          </Card>
            </div>
            <div className="col-12 col-md-5 m-1">
          <ul>{<RenderComments comments={Dishdetail.comments} />}</ul>
        </div>
      </div>
    </div>
  );
}

function RenderComments(comments) {
  return comments.comments.map((comment, i) => (
    <li key={i}>
      {comment.comment}
      <br />
      <br />
      -- {comment.author},
      {new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "short",
        day: "2-digit"
      }).format(new Date(Date.parse(comment.date)))}
      <br />
      <br />
    </li>
  ));
}

const Dishdetail = props => {
  if (props.dish) {
    return <RenderDish {...props.dish} />
  } else return <div></div>
};

export default Dishdetail;