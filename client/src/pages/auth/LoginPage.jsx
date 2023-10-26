import { useFormik } from 'formik';
import Button from '../../components/Button/Button';
import TextInput from '../../components/TextInput/TextInput';
import loginSchema from '../../schemas/loginSchema';
import { useState } from 'react';
function LoginPage() {
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [emailChanging, setEmailChanging] = useState(false);
    const [passwordChanging, setPasswordChanging] = useState(false);
    const { values, touched, handleBlur, handleChange, errors } = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: loginSchema,
    });
    const handleBlurEmailCustom = (event) => {
        setEmailChanging(false);
        setEmailError(errors.email);
        handleBlur(event);
    };
    const handleChangeEmailCustom = (event) => {
        setEmailChanging(true);
        setEmailError('');
        handleChange(event);
    };
    const handleBlurPasswordCustom = (event) => {
        setPasswordChanging(false);
        setPasswordError(errors.password);
        handleBlur(event);
    };
    const handleChangePasswordCustom = (event) => {
        setPasswordChanging(true);
        setPasswordError('');
        handleChange(event);
    };
    return (
        <div className="fixed top-0 left-0 flex w-[100vw] h-[100vh] bg-[rgb(204,204,204)] items-center justify-center">
            <div className="w-[440px] min-h-[540px] bg-[white] rounded-[2px]">
                <div className="pt-[32px]">
                    <h1 className="text-center text-[2.2rem] font-medium">Đăng kí</h1>
                </div>
                <div className="p-[40px] ">
                    <TextInput
                        title="Email"
                        type="text"
                        value={values.email}
                        name="email"
                        onBlur={handleBlurEmailCustom}
                        onChange={handleChangeEmailCustom}
                        placeholder="Eg.lequanphat@gmail.com"
                        error={emailError ? 1 : undefined}
                        errormessage={emailError}
                        changing={emailChanging}
                    />
                    <TextInput
                        title="Mật khẩu"
                        type="password"
                        value={values.password}
                        name="password"
                        onBlur={handleBlurPasswordCustom}
                        onChange={handleChangePasswordCustom}
                        placeholder="Nhập mật khẩu"
                        error={passwordError ? 1 : undefined}
                        errormessage={passwordError}
                        changing={passwordChanging}
                    />
                    <Button content={'login'} fullwidth />
                    <div className="text-[1.6rem] mt-[12px]">
                        <span>Bạn chưa có tài khoản?</span>
                        <span className="text-primary ml-[4px]">Đăng kí</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
