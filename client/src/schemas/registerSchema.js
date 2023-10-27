import * as yup from 'yup';
const registerSchema = yup.object({
    name: yup.string().min(4 , 'Tên không được ngắn hơn 4 kí tự!').max(50 , 'Tên không được dài quá 50 kí tự!').required('Vui lòng điền tên của bạn!'),
    email: yup.string().email('Email không hợp lệ').required('Vui lòng điền email!'),
    password: yup.string().min(3, 'Mật khẩu phải có ít nhất 3 ký tự!').required('Vui lòng điền mật khẩu!'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Mật khẩu xác nhận không đúng!').required('Vui lòng xác nhận mật khẩu'),
});
export default registerSchema;