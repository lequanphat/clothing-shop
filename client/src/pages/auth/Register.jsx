import { useFormik } from 'formik';
import Button from '../../components/Button/Button';
import TextInput from '../../components/TextInput/TextInput';
import loginSchema from '../../schemas/loginSchema';
import { useState } from 'react';
import { login } from '../../api/internal';
import { setUser } from '../../store/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function Register() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [emailChanging, setEmailChanging] = useState(false);
    const [passwordChanging, setPasswordChanging] = useState(false);
    const { values, handleBlur, handleChange, errors, } = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        initialErrors:{
            email: 'Vui lòng điền trường này',
            password: 'Vui lòng điền trường này',
        },
        validationSchema: loginSchema,
    });
    const handleLogin = async () => {
        // validate
        if(errors.password || errors.email){
            if(errors.password){
                setPasswordError(errors.password)
            }
            if(errors.email){
                setEmailError(errors.email)
            }
            return;
        }
        // call api
        const data = {
            email: values.email,
            password: values.password,
        };
        const respone = await login(data);
        console.log(respone);
        if (respone?.status === 200) {
            const user = {
                _id: respone.data._id,
                email: respone.data.email,
                username: respone.data.phone,
                auth: true,
            };
            console.log(user);
            dispatch(setUser(user));
            navigate('/');
        } else {
        }
    };
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
            <div className="w-[100%] h-[100%] bg-[white] rounded-[3px] border-[2px] border-[#777]">
                <div className="pt-[32px]">
                    <h1 className="text-center text-[2.2rem] font-medium">Đăng ký</h1>
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
                    <TextInput
                        title="Xác nhận mật khẩu"
                        type="password"
                        value={values.password}
                        name="password"
                        onBlur={handleBlurPasswordCustom}
                        onChange={handleChangePasswordCustom}
                        placeholder="Xác nhận mật khẩu"
                        error={passwordError ? 1 : undefined}
                        errormessage={passwordError}
                        changing={passwordChanging}
                    />
                    <Button content={'login'} fullwidth onClick={handleLogin} />
                    <div className="text-[1.6rem] mt-[12px]">
                        <span>Bạn đã có tài khoản?</span>
                        <span
                            className="text-primary ml-[4px]"
                            onClick={() => {
                                navigate('/products');
                            }}
                        >
                            Đăng nhập
                        </span>
                    </div>
                </div>
            </div>
    );
}

export default Register;
