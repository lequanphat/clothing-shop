import * as yup from 'yup';
const loginSchema = yup.object({
    email: yup.string().email('Email không hợp lệ').required('Vui lòng điền email'),
    password: yup.string().min(3, 'Mật khẩu phải có ít nhất 3 ký tự').required('Vui lòng điền mật khẩu'),
});
export default loginSchema;