import React, { useState } from 'react';
import { Checkbox, Button, Card, Divider } from 'antd';


const PageSelector = () => {
  const [checkedList, setCheckedList] = useState([]);
  const options = ['Page 1', 'Page 2', 'Page 3', 'Page 4'];
  const allChecked = options.length === checkedList.length;
  const indeterminate = checkedList.length > 0 && checkedList.length < options.length;

  const onChange = (list) => {
    setCheckedList(list);
  };

  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? options : []);
  };

  return (
    <Card className="page-selector">
      <div className="checkbox-item">
        <span>All pages</span>
        <Checkbox
          indeterminate={indeterminate}
          onChange={onCheckAllChange}
          checked={allChecked}
        />
      </div>
      <Divider className="divider" />
      {options.map((option) => (
        <div key={option} className="checkbox-item">
          <span>{option}</span>
          <Checkbox
            checked={checkedList.includes(option)}
            onChange={() => {
              const newList = checkedList.includes(option)
                ? checkedList.filter((item) => item !== option)
                : [...checkedList, option];
              setCheckedList(newList);
            }}
          />
        </div>
      ))}
      <Divider className="divider" />
      <Button
        type="primary"
        style={{
          display: 'block',
          width: '100%',
          marginTop: 16,
          backgroundColor: '#FFCE22',
          borderColor: '#FFCE22',
          color: "#1F2128"
        }}
      >
        Done
      </Button>
    </Card>
  );
};

export default PageSelector;