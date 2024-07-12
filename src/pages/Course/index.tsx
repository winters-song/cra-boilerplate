import React, { useEffect, useState } from 'react';
import './style.css'
import { Button, Col, DatePicker, Form, Input, message, Row, Select, Space, Tabs, TabsProps } from 'antd';
import { selectTeacher } from '@/api/course';

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
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />

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
    </>
  );
};

export default App;