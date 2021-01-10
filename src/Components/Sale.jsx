import React from "react";
import {Alert, Container} from "react-bootstrap";

const Sale = () => {
    return (
        <Container style={{width: "500px", height: "750px", marginTop: "50px"}}>
        <Alert variant={'info'}>
            No discounts!
        </Alert>
        </Container>
    )
}
export default Sale;