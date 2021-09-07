import React, { Component, useState } from 'react'
import { Card, Table, Tag, Tooltip, message, Button } from 'antd';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import moment from 'moment';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import userData from "assets/data/professional-list.json";

const ProfessionalList = ({ history }) => {
	const [users, setUser] = useState(userData)
	const [userProfileVisible, setUserProfileVisible] = useState(false)
	const [selectedUser, setSelectedUser] = useState(null)

	const deleteUser = userId => {
		setUser(users.filter(item => item.id !== userId))
		message.success({ content: `Deleted user ${userId}`, duration: 2 });
	}

	const showUserProfile = userInfo => {
		setUserProfileVisible(true)
		setSelectedUser(userInfo)
	};

	const closeUserProfile = () => {
		setUserProfileVisible(false)
		setSelectedUser(null)
	}

	const getColums = [
		{
			title: 'Professional',
			dataIndex: 'nome',
			render: (_, record) => (
				<div>
					<p>
						{`${record.nome}${record.id}`}
					</p>
				</div >
			)
		},
		{
			title: 'Number',
			dataIndex: 'telefone',
		},
		{
			title: 'E-mail',
			dataIndex: 'email',
		},
		{
			title: 'Professional type',
			dataIndex: 'tipoDeProfissional',
		},
		{
			title: 'Situation',
			dataIndex: 'situacao',
			render: status => (
				<Tag className="text-capitalize" color={status ? 'cyan' : 'red'}>{status ? 'ACTIVE' : 'INACTIVE'}</Tag>
			),
		},
		{
			title: '',
			dataIndex: 'actions',
			render: (_, elm) => (
				<div className="text-right">
					<Tooltip title="View">
						<Button type="primary" className="mr-2" icon={<EyeOutlined />} onClick={() => { showUserProfile(elm) }} size="small" />
					</Tooltip>
					<Tooltip title="Delete">
						<Button danger icon={<DeleteOutlined />} onClick={() => { deleteUser(elm.id) }} size="small" />
					</Tooltip>
				</div>
			)
		}
	];
	return (
		<>
			<div style={{
				marginLeft: '92%',
				marginBottom: 10
			}}>
				<Button onClick={() => { history.push('professinal-create') }}>
					Create
				</Button>
			</div>
			<Card bodyStyle={{ 'padding': '0px' }}>
				<Table columns={getColums} dataSource={users} rowKey='id' />
			</Card>
		</>
	)
}

export default ProfessionalList

