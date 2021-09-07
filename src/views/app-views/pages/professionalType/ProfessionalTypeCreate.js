import React, { Component, useState } from 'react';
import { Form, Avatar, Button, Input, DatePicker, Row, Col, message, Upload, Switch } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { ROW_GUTTER } from 'constants/ThemeConstant';
import Flex from 'components/shared-components/Flex'

const ProfessionalTypeCreate = () => {

    const [formState, setFormState] = useState({
        descricao: "",
        situacao: true,
        updatedAt: "",
        createdAt: ""
    })
    return (
        <>
            <Form
                name="basicInformation"
                layout="vertical"
                initialValues={formState}
                onFinish={() => { }}
                onFinishFailed={() => { }}
            >
                <Row>
                    <Col xs={24} sm={24} md={24} lg={16}>
                        <Row gutter={ROW_GUTTER}>
                            <Col xs={24} sm={24} md={12}>
                                <Form.Item
                                    label="Description"
                                    name="descriçao"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your name!',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={12}>
                                <Form.Item
                                    label="Situation"
                                    name="situacao"
                                    rules={[{
                                        required: true,
                                    }]}
                                >
                                    <Switch />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Button type="primary" htmlType="submit">
                            Save Change
                        </Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default ProfessionalTypeCreate