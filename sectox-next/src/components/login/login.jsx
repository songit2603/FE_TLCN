import React, { useState } from 'react';
import  Form  from 'react-bootstrap/Form';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Thực hiện xử lý đăng nhập ở đây, ví dụ kiểm tra email và mật khẩu

        if (email === 'user@example.com' && password === 'password') {
            alert('Đăng nhập thành công');
        } else {
            alert('Đăng nhập thất bại');
        }
    };

    const handleForgotPassword = () =>{
        alert('Bạn đã nhấp vào "Quên mật khẩu".');
    }

    const labelStyle ={
        textAlign: 'right', // Đặt căn chỉnh văn bản về phía phải
        cursor: 'pointer', // Đặt kiểu con trỏ chuột thành pointer
        color: 'blue',
        textDecoration: 'underline',
    };

    return (
        <div className="container">
            <div className="hm-section">
                <div className="row">
                    <div className="col-lg-5 col-md-7 col-sm-9 mx-auto">
                        <div className="card hm-card-signin my-5">
                            <div className="card-body">
                                <Form onSubmit={handleSubmit}>
                                    <div className="hm-form-label-group">
                                        <Form.Label htmlFor="email">Email </Form.Label>
                                        <Form.Control
                                            id="email"
                                            type="email"
                                            placeholder="Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="hm-form-label-group">
                                        <Form.Label htmlFor="password">Mật khẩu</Form.Label>
                                        <Form.Control
                                            id="password"
                                            type="password"
                                            placeholder="Mật khẩu"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div style={{textAlign: 'right'}}>
                                        <Form.Label
                                            htmlFor="password"
                                            style={labelStyle} // Đặt kiểu con trỏ chuột cụ thể
                                            onClick={handleForgotPassword}
                                        >
                                            Quên mật khẩu?
                                    </Form.Label>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-md btn-primary text-uppercase mb-4">Đăng nhập</button>
                                    </div>
                                    
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;