import React from "react";
import { Card, Image, Icon, Button } from "semantic-ui-react";
import AddItem from "./AddItem.js";
import EditItem from "./EditItem.js";
const MyTechList = () => {
  return (
    <div className="tech-container">
      <h2>My Tech Items</h2>
      <div className="myTech-list">
        {/* Map out given user items */}
        <MyTechItems />
        <AddItem />
      </div>
    </div>
  );
};

function MyTechItems() {
  return (
    <div className="myTech-item">
      <Card>
        <Image src="/images/avatar/large/matthew.png" wrapped ui={false} />
        <Card.Content>
          <Card.Header>Item Name: Super Digital Camera</Card.Header>
          <Card.Description>
            Sony RcX8VTS digital camera in perfect condition.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <p>Price: $100.00</p>
        </Card.Content>
        <div>
          <EditItem />
          <Button secondary>Delete</Button>
        </div>
      </Card>
    </div>
  );
}

export default MyTechList;
