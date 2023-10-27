import { useFormik } from 'formik';
import Button from '../../components/Button/Button';
import TextInput from '../../components/TextInput/TextInput';
import registerSchema from '../../schemas/registerSchema';
import { useState } from 'react';
import { register } from '../../api/internal';
import { setUser } from '../../store/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Wrapper from './Wrapper';
import { forwardRef, useImperativeHandle } from 'react';
const Register = forwardRef(( props ,ref) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [emailChanging, setEmailChanging] = useState(false);
    const [passwordChanging, setPasswordChanging] = useState(false);
    const [confirmPasswordChanging, setConfirmPasswordChanging] = useState(false);
    const [nameChanging, setNameChanging] = useState(false);
    const { values, handleBlur, handleChange, errors } = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        initialErrors: {
            name: 'Vui lòng điền trường này',
            email: 'Vui lòng điền trường này',
            password: 'Vui lòng điền trường này',
            confirmPassword: 'Vui lòng điền trường này',
        },
        validationSchema: registerSchema,
    });
    const handleLogin = async () => {
        // validate
        if (errors.password || errors.email || errors.name || errors.confirmPassword) {
            if (errors.confirmPassword) {
                setConfirmPasswordError(errors.confirmPassword);
            }
            if (errors.password) {
                setPasswordError(errors.password);
            }
            if (errors.email) {
                setEmailError(errors.email);
            }
            if (errors.name) {
                setNameError(errors.name);
            }
            return;
        }
        // call api
        const data = {
            name: values.name,
            email: values.email,
            password: values.password,
            confirmPassword: values.confirmPassword,
            phone: '0123123123',
        };
        const respone = await register(data);
        console.log(respone);
        if (respone?.status === 200) {
            const user = {
                _id: respone.data._id,
                email: respone.data.email,
                username: respone.data.name,
                auth: true,
            };
            console.log(user);
            dispatch(setUser(user));
            navigate('/');
        } else {
        }
    };
    const handleBlurCustom = (event, setChanging, setError, error) => {
        setChanging(false);
        setError(error);
        handleBlur(event);
    };
    const handleChangeCustom = (event, setChanging, setError) => {
        setChanging(true);
        setError('');
        handleChange(event);
    };
    const resetRegister = () => {
        setNameError('') 
        setEmailError('') 
        setPasswordError('') 
        setConfirmPasswordError('') 
    }
    useImperativeHandle(ref, () => ({
        resetRegister
    }))
    return (
        <Wrapper title="Đăng kí" footerDesc="Bạn đã có tài khoản?" footerButton="Đăng nhập" eventAction={props.handleShowLogin}>
            <TextInput
                    title="Họ và tên"
                    type="text"
                    value={values.name}
                    name="name"
                    onBlur={(e) => {
                        handleBlurCustom(e, setNameChanging, setNameError, errors.name);
                    }}
                    onChange={(e) => {
                        handleChangeCustom(e, setNameChanging, setNameError);
                    }}
                    placeholder="Nguyễn Văn A"
                    error={nameError ? 1 : undefined}
                    errormessage={nameError}
                    changing={nameChanging}
                />
                <TextInput
                    title="Email"
                    type="text"
                    value={values.email}
                    name="email"
                    onBlur={(e) => {
                        handleBlurCustom(e, setEmailChanging, setEmailError, errors.email);
                    }}
                    onChange={(e) => {
                        handleChangeCustom(e, setEmailChanging, setEmailError);
                    }}
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
                    onBlur={(e) => {
                        handleBlurCustom(e, setPasswordChanging, setPasswordError, errors.password);
                    }}
                    onChange={(e) => {
                        handleChangeCustom(e, setPasswordChanging, setPasswordError);
                    }}
                    placeholder="Nhập mật khẩu"
                    error={passwordError ? 1 : undefined}
                    errormessage={passwordError}
                    changing={passwordChanging}
                />
                <TextInput
                    title="Xác nhận mật khẩu"
                    type="password"
                    value={values.confirmPassword}
                    name="confirmPassword"
                    onBlur={(e) => {
                        handleBlurCustom(
                            e,
                            setConfirmPasswordChanging,
                            setConfirmPasswordError,
                            errors.confirmPassword,
                        );
                    }}
                    onChange={(e) => {
                        handleChangeCustom(e, setConfirmPasswordChanging, setConfirmPasswordError);
                    }}
                    placeholder="Xác nhận mật khẩu"
                    error={confirmPasswordError ? 1 : undefined}
                    errormessage={confirmPasswordError}
                    changing={confirmPasswordChanging}
                />
                <Button medium content={'login'} fullwidth onClick={handleLogin} />
        </Wrapper>
    );
});

export default Register;
