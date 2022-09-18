import React from 'react'
import studyingImg from './img/login-img-August-de-Richelieu.jpg'
const LoginCard = () => {
  return (
    <section className="vh-100" style={{backgroundColor: '#d9d9d9'}} >
        <div className="container py-5" >
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col col-xl-10">
                    <div className="card" style={{borderRadius: '1rem'}}>
                        <div className="row g-0">
                            <div className="col-md-6 col-lg-5 d-none d-md-block">
                                <img src={studyingImg} alt="login form" className="img-fluid" style={{borderRadius: '1rem 0 0 1rem'}} />
                            </div>
                            <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                <div className="card-body p-4 p-lg-5 text-black">
                                    <form>
                                        <div className="d-flex align-items-center mb-3 pb-0">
                                            <span className="h1 fw-bold mb-0">A1 Maths</span>
                                        </div>

                                        <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>

                                        <div className="mb-4">
                                            <label className="form-label" htmlFor="email">Email address</label>
                                            <input type="email" className="form-control form-control-lg" id="email" placeholder='Enter your email'/>
                                        </div>

                                        <div className="mb-4">
                                            <label className="form-label" htmlFor="password">Password</label>
                                            <input type="password" className="form-control form-control-lg" id="password" placeholder='Enter your password'/>
                                        </div>

                                        <div className="pt-1 mb-4">
                                            <button className="btn btn-dark btn-lg btn-block" type="button" style={{width: '100%'}}>Login</button>
                                        </div>
                                        <div className="pt-1 mb-4">
                                            <button className="btn btn-outline-secondary btn-lg" type="button" style={{width: '100%'}}>Forgot Password</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default LoginCard
