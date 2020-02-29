import React, { useState } from "react";
import Modal from "antd/lib/modal";
import Phone from "@ant-design/icons-svg/lib/asn/PhoneOutlined";
import Mail from "@ant-design/icons-svg/lib/asn/MailOutlined";

import Icon from "src/components/Icon";

import "antd/lib/modal/style";
import "antd/lib/button/style";

import "./style.less";

const Header = ({ id, hash }) => {
  return (
    <div className="modal-header">
      {id && <p>ID: {id}</p>}
      {hash && <p>Hash: {hash}</p>}
    </div>
  );
};

const ModalView = ({ visible, hideModal, modalData }) => {
  const [phoneVisible, updatePhoneVisible] = useState(false);
  const [emailVisible, updateEmailVisible] = useState(false);
  return (
    <Modal
      title={<Header id={modalData?.id} hash={modalData?.hash} />}
      visible={visible}
      onCancel={() => {
        // close everytinng oncancel
        hideModal();
        updatePhoneVisible(false);
        updateEmailVisible(false);
      }}
      footer={null}
      destroyOnClose
    >
      {/* if the data is present show it otherwise hide it */}
      {modalData?.number && (
        <p className="phone">
          <Icon type={Phone} className="phone-icon" />{" "}
          {phoneVisible ? (
            <a href={`tel:${modalData.number}`}>{modalData.number}</a>
          ) : (
            <span className="click" onClick={() => updatePhoneVisible(true)}>
              click to view
            </span>
          )}
        </p>
      )}
      {modalData?.email && (
        <p className="email">
          <Icon type={Mail} className="mail-icon" />
          {emailVisible ? (
            <a href={`mailto:${modalData.email}`}>{modalData.email}</a>
          ) : (
            <span className="click" onClick={() => updateEmailVisible(true)}>
              click to view
            </span>
          )}{" "}
        </p>
      )}
    </Modal>
  );
};

export default ModalView;
