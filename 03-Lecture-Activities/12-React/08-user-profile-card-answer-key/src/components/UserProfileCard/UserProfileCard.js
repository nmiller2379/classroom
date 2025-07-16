import React, { useState } from "react";
import { Card, Button, Container, Row, Col, Image } from "react-bootstrap";


export default function UserProfileCard({ user }) {
    const [isFollowing, setIsFollowing] = useState(false)
    
    const toggleFollow = () => {
        setIsFollowing((prev) => !prev)
    }

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={6} lg={4}>
          <Card>
            <Card.Body>
              <Row className="align-items-center">
                <Col xs={4}>
                  <Image src={user.profilePicture} roundedCircle fluid />
                </Col>
                <Col xs={8}>
                  <Card.Title>{user.name}</Card.Title>
                  <Card.Text>{user.bio}</Card.Text>
                  <Button variant="primary" onClick={toggleFollow}>{isFollowing ? "Unfollow" : "Follow"}</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
