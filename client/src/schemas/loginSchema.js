import * as yup from 'yup';
const loginSchema = yup.object({
    username: yup.string().min(3, 'Tên người dùng phải có ít nhất 3 ký tự').max(30, 'Tên người dùng tối đa 30 ký tự').required('Vui lòng điền tên người dùng'),
    email: yup.string().email('Email không hợp lệ').required('Vui lòng điền email'),
    password: yup.string().min(3, 'Mật khẩu phải có ít nhất 3 ký tự').required('Vui lòng điền mật khẩu'),
});
export default loginSchema;