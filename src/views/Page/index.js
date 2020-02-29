import React, { useState, useEffect } from "react";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Card from "antd/lib/card";
import Button from "antd/lib/button";
import Spin from "antd/lib/spin";

import data from "src/data";
import Buttons from "./components/Buttons";

import "antd/lib/row/style";
import "antd/lib/spin/style";
import "antd/lib/col/style";
import "antd/lib/card/style";
import "antd/lib/button/style";

import "./style.less";
import ModalView from "./components/Modal";

const Main = ({ location: { pathname }, history }) => {
  const [peoples, updatePeoples] = useState([]);
  const [loading, updateLoading] = useState(false);
  const [modalData, updateModalData] = useState(null);
  const [visible, updateVisible] = useState(false);
  const pageId = parseInt(pathname.split("/")[1] || 0, 10);

  // when the page id is not initial view
  useEffect(() => {
    if (pageId) {
      updatePeoples([...data].splice(pageId, 4));
    } else {
      updatePeoples([...data].splice(0, 4));
    }
  }, []);

  // when there are some data for modal open it otherwise close it
  useEffect(() => {
    if (modalData) {
      return updateVisible(true);
    }
    return updateVisible(false);
  }, [modalData]);

  // Time management for load item (Quick Load or Lazy Load)
  const loadItem = time => {
    const cardsCount = peoples.length;
    const loadData = [...data].splice(pageId + cardsCount, 4);
    updateLoading(true);
    setTimeout(() => {
      updatePeoples([...peoples].concat(loadData));
      updateLoading(false);
    }, time);
  };

  // Navigation management for next 4 item or first page
  const navigate = type => {
    if (type === "next") {
      window.location = `#/${pageId + peoples.length}`;
      return window.location.reload();
    }

    return (window.location = "/");
  };

  const reload = () => {
    window.location.reload();
  };

  const hideModal = () => {
    updateModalData(null);
  };

  return (
    <Spin spinning={loading}>
      <Row className="cards" gutter={16}>
        {peoples.map(people => (
          <Col key={people.id} style={{ marginTop: 0, paddingTop: 0 }}>
            <Card
              title={people.name}
              style={{ minWidth: "250px", height: "200px" }}
              extra={
                <Button type="primary" onClick={() => updateModalData(people)}>
                  More
                </Button>
              }
            >
              {people.address}
            </Card>
          </Col>
        ))}
      </Row>
      <Buttons loadItem={loadItem} navigate={navigate} reload={reload} />
      <ModalView
        modalData={modalData}
        visible={visible}
        hideModal={hideModal}
      />
    </Spin>
  );
};
export default Main;
