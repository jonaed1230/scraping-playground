import React from "react";
import Button from "antd/lib/button";
import Col from "antd/lib/col";
import Row from "antd/lib/row";

import "antd/lib/button/style";
import "antd/lib/col/style";
import "antd/lib/row/style";
import "./style.less";

const Buttons = ({ loadItem, navigate, reload }) => {
  return (
    <Row className="buttons" gutter={16} style={{ marginTop: 30 }}>
      <Col>
        <Button type="danger" onClick={reload}>
          Reload Current Page
        </Button>
      </Col>
      <Col>
        <Button type="danger" onClick={navigate}>
          Navigate First Page
        </Button>
      </Col>
      <Col>
        <Button
          onClick={() => navigate("next")}
          type="default"
        >
          Navigate Next 4 Items
        </Button>
      </Col>
      <Col>
        <Button type="default" onClick={() => loadItem(100)}>
          Quick Load More 4 Items
        </Button>
      </Col>
      <Col>
        <Button type="default" onClick={() => loadItem(2500)}>
          Lazy Load More 4 Items
        </Button>
      </Col>
    </Row>
  );
};

export default Buttons;
