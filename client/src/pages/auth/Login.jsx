import { useFormik } from 'formik';
import Button from '../../components/Button/Button';
import TextInput from '../../components/TextInput/TextInput';
import loginSchema from '../../schemas/loginSchema';
import { useState, useImperativeHandle, forwardRef } from 'react';
import { login } from '../../api/internal';
import { setUser } from '../../store/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Wrapper from './Wrapper';
const LoginWrapper = forwardRef((props, ref) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loginError, setLoginError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [emailChanging, setEmailChanging] = useState(false);
    const [passwordChanging, setPasswordChanging] = useState(false);
    const { values, handleBlur, handleChange, errors } = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        initialErrors: {
            email: 'Vui lòng điền trường này',
            password: 'Vui lòng điền trường này',
        },
        validationSchema: loginSchema,
    });
    const handleLogin = async () => {
        // validate
        if (errors.password || errors.email) {
            if (errors.password) {
                setPasswordError(errors.password);
            }
            if (errors.email) {
                setEmailError(errors.email);
            }
            return;
        }
        // call api
        const data = {
            email: values.email,
            password: values.password,
        };
        const response = await login(data);
        console.log(response);
        if (response?.status === 200) {
            const user = {
                _id: response.data._id,
                email: response.data.email,
                username: response.data.name,
                auth: true,
            };
            console.log(user);
            dispatch(setUser(user));
            navigate('/');
        } else {
            setLoginError(response.response.data.message);
        }
    };
    const resetLogin = () => {
        setEmailError('');
        setPasswordError('');
        setLoginError('');
    };
    const handleBlurCustom = (event, setChanging, setError, error) => {
        setChanging(false);
        setError(error);
        setLoginError('');
        handleBlur(event);
    };
    const handleChangeCustom = (event, setChanging, setError) => {
        setChanging(true);
        setError('');
        setLoginError('');
        handleChange(event);
    };
    useImperativeHandle(ref, () => ({
        resetLogin,
    }));
    return (
        <Wrapper
            title="Đăng nhập"
            footerDesc="Bạn chưa có tài khoản?"
            footerButton="Đăng kí"
            eventAction={props.handleShowRegister}
        >
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
            <p className='text-[1.4rem] text-[red] mb-[4px]' >{loginError}</p>
            <Button primary medium content={'login'} fullwidth onClick={handleLogin} />
        </Wrapper>
    );
});

export default LoginWrapper;
