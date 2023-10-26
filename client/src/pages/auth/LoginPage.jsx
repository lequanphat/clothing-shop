import { useFormik } from 'formik';
import Button from '../../components/Button/Button';
import TextInput from '../../components/TextInput/TextInput';
import loginSchema from '../../schemas/loginSchema';
function LoginPage() {
    const { values, touched, handleBlur, handleChange, errors } = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
    });
    return (
        <div className="fixed top-0 left-0 flex w-[100vw] h-[100vh] bg-[rgb(204,204,204)] items-center justify-center">
            <div className="w-[440px] min-h-[540px] bg-[white] rounded-[2px]">
                <div className='pt-[32px]'>
                    <h1 className='text-center text-[2.2rem] font-medium'>Đăng kí</h1>
                </div>
                <div className="p-[40px] ">
                    <TextInput
                        title="Email"
                        type="text"
                        value={values.username}
                        name="username"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Eg.lequanphat@gmail.com"
                        error={errors.username && touched.username ? 1 : undefined}
                        errormessage={errors.username}
                    />
                    <TextInput
                        title="Mật khẩu"
                        type="password"
                        value={values.password}
                        name="password"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Nhập mật khẩu"
                        error={errors.password && touched.password ? 1 : undefined}
                        errormessage={errors.password}

                    />
                    <Button content={'login'} fullwidth />
                    <div className='text-[1.6rem] mt-[12px]'>
                        <span >Bạn chưa có tài khoản?</span><span className='text-primary ml-[4px]'>Đăng kí</span>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
