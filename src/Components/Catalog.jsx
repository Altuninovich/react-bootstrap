import React from "react";
import {Container, Table} from "react-bootstrap";

const Catalog = () => {
    return (
        <>
            <Container style={{height: "750px"}}>
        <Table style={{marginTop: "50px"}} striped bordered hover variant="dark">
            <tbody>
            <tr>
                <th>MODEL</th>
                <th>SPEED</th>
                <th>POWER</th>
                <th>PRICE</th>
            </tr>
            <tr>
                <td>a</td>
                <td>1</td>
                <td>10</td>
                <td>5$</td>
            </tr>
            <tr>
                <td>b</td>
                <td>2</td>
                <td>20</td>
                <td>6$</td>
            </tr>
            <tr>
                <td>c</td>
                <td>3</td>
                <td>30</td>
                <td>7$</td>
            </tr>
            </tbody>
        </Table>
            </Container>
        </>
    )
}
export default Catalog;