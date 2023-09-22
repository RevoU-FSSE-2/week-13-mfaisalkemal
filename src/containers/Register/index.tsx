import { Button, Form, Input, Space, Card } from 'antd';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

interface RegisterInterface {
    name: string;
    email: string;
    password: string;
}

const RegisterInterfaceValues = {
    name: '',
    email: '',
    password: ''
}

const validationSchema = yup.object({
    name: yup.string().required('Name must exist'),
    email: yup.string()
        .email('Invalid email format')
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email format')
        .required('Email must exist')
        .min(10),
    password: yup.string().required('Password must exist').min(8, '8 characters minimum')
})

const Register: React.FC = () => {

    const navigate = useNavigate();

    async function handleSubmit(values: RegisterInterface) {
        try {
            if (formik.isValid) {
                console.log('a');
            }
        } catch (error) {
            console.error('Error in handleSubmit:', error);
        }
    }

    const formik = useFormik({
        initialValues: RegisterInterfaceValues,
        onSubmit: handleSubmit,
        validationSchema: validationSchema
    })

    return (
        <Card title="Register Page" headStyle={{ textAlign: 'center' }}>
            <Form onFinish={formik.handleSubmit}>
                <Form.Item
                    name="name"
                    rules={[{ required: true, message: 'Name cannot blank!' }]}
                >
                    <Input
                        placeholder="Name"
                        value={formik.values.name}
                        onChange={formik.handleChange('name')}
                        status={formik.errors.name && 'error'}
                    />
                </Form.Item>
                <Form.Item
                    name="email"
                    validateStatus={formik.touched.email && formik.errors.email ? 'error' : 'success'}
                    help={formik.touched.email && formik.errors.email ? formik.errors.email : ''}
                >
                    <>
                        <Input
                            placeholder="Email"
                            value={formik.values.email}
                            onChange={formik.handleChange('email')}
                        />
                    </>

                </Form.Item>
                <Form.Item
                    name="password"
                    validateStatus={formik.touched.password && formik.errors.password ? 'error' : 'success'}
                    help={formik.touched.password && formik.errors.password ? formik.errors.password : ''}
                >
                    <Input
                        type="password"
                        placeholder="Password"
                        value={formik.values.password}
                        onChange={formik.handleChange('password')}
                        status={formik.errors.password && 'error'}
                    />
                </Form.Item>
                    
                    <Button onClick={() => {navigate('/login')}} type="primary" > Login </Button>
                    <Button type="primary" htmlType="submit">
                        Register
                    </Button>
                    
            </Form>
        </Card>
    );
};

export default Register;