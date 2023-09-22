import { Outlet } from 'react-router'
import { Layout } from 'antd';

const PublicLayout = () => {

    return (
        <Layout style={{ width: '100%', height: '100%', background: 'teal' }}>

            < Outlet />

        </Layout>
    )
}

export default PublicLayout