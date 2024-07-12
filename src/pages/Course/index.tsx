import React, { useEffect, useState } from 'react';
import './style.css'
import { Button, Col, DatePicker, Form, Input, message, Row, Select, Space, Table, TableProps, Tabs, TabsProps, Tag } from 'antd';
import { selectTeacher } from '@/api/course';
import { PlusOutlined } from '@ant-design/icons';

const defaultItems: TabsProps['items'] = [
  {
    key: '1',
    label: '全部',
  },
  {
    key: '2',
    label: '未开始',
  },
  {
    key: '3',
    label: '进行中',
  },
  {
    key: '4',
    label: '已结束',
  }
];



interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];


const App: React.FC = () => {

  const [items, setItems] = useState<TabsProps['items']>(defaultItems)
  const [form] = Form.useForm();

  const [options, setOptions] = useState<{ value: string }[]>([]);



  const onChange = (key: string) => {
    console.log(key);
  };

  const updateCount = () => {
    if (items) {
      items[0].label = '全部(1)'
      items[1].label = '未开始(1)'
      items[2].label = '进行中(1)'
      items[3].label = '已结束(1)'
      setItems([...items])
    }
  }

  const onSearchTeacher = async (keys: string) => {
    if(!keys) {
      setOptions([]);
      return;
    }
    const data = await selectTeacher(keys);
    const options = data.map((item) => ({
      id: item.uid,
      label: (item.name || '') + `  (${item.phone})`,
      value: item.uid
    }));
    setOptions(options);
  };


  // unix() 时间戳不带毫秒， valueOf() 带毫秒
  const onFinish = (values: any) => {

    let startTime = values.startTime?.unix()
    let endTime = values.endTime?.unix()

    let params = {
      ...values,
      startTime,
      endTime
    }
    console.log(params)
    
  };

  useEffect(() => {
    updateCount()
  }, [])

  return (
    <>
      <Row >
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} style={{flex: 1}} />
        <Button type='primary' style={{marginTop: 5}}><PlusOutlined />创建课程</Button>
      </Row>

      <Form form={form} name="advanced_search" layout="vertical" className='search-form' onFinish={onFinish}>
        <Row gutter={24}>
          <Col span={6}>
            <Form.Item name="courseId" label="课程ID" >
              <Input />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item name="courseName" label="课程名称" >
              <Input />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item name="category" label="产品分类" >
              <Input />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item name="level" label="爱棋道段位" >
              <Select
                showSearch
                filterOption={false}
                options={[
                  { value: '1', label: 'Level 1' },
                  { value: '2', label: 'Level 2' },
                  { value: '3', label: 'Level 3' },
                ]}
                allowClear
              />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item name="startTime" label="课程开始时间" >
              <DatePicker
                showTime
                style={{ width: '100%' }}
                onChange={(value: any, dateString: any) => {
                  const endTime = form.getFieldValue('endTime');

                  if(!value || !endTime){
                    return;
                  }
                  if(value.unix() > endTime?.unix()){
                    message.error('开始时间不能大于结束时间');  

                    setTimeout(()=> {
                      form.resetFields(['startTime']);
                    })
                  }
                }}
              />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item name="endTime" label="课程结束时间" >
              <DatePicker
                showTime
                style={{ width: '100%' }}
                onChange={(value: any, dateString: any) => {
                  const startTime = form.getFieldValue('startTime');

                  if(!value || !startTime){
                    return;
                  }
                  if(value.unix() < startTime?.unix()){
                    message.error('结束时间不能小于开始时间');  

                    setTimeout(()=> {
                      form.resetFields(['endTime']);
                    })
                  }
                }}
              />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item name="teacher" label="主讲老师" >
            {/* 远程搜索框，需要关闭本地搜索filterOption */}
            <Select
              showSearch
              filterOption={false}
              options={options}
              onSearch={onSearchTeacher}
              allowClear
            />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label=" "
              name="operation"
            >
              <Space>

                <Button type="primary" htmlType="submit">
                  Search
                </Button>
                <Button
                  onClick={() => {
                    form.resetFields();
                  }}
                >
                  Clear
                </Button>
              </Space>
            </Form.Item>
          </Col>
        </Row>
      </Form>

      <Table columns={columns} dataSource={data} style={{ marginTop: 20 }} />
    </>
  );
};

export default App;