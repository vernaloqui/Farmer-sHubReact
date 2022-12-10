function Login(){
    
    return (
    <section className="container mt-5">
    
        <p className="h4  text-center">Login | 
            <a type="button" 
                className="text-muted" 
                href="CustRegistration.html"
                style={{textDecoration:'none'}}>Register
            </a>
        </p>
        <br/>
        <br/>

        <div className="mb-3">
        <form className="logIn container border border-secondary rounded p-4" name="ValidForm" action="">

            {/* <div onLoad={document.form.text.focus()}> */}
            <div className="mail">

            <label for="uname" className="form-label">Email address</label>
            <input type="text" name='ValidText' className="form-control" placeholder="example@gmail.com"/>
            </div>
            <br/>

            <div className="mb-3">
                <label for="psw" className="form-label">Password</label>
                <input type="password" className="form-control" id="psw" required/>
            </div>

            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="Remember"/>
                <label className="form-check-label"  for="Remember">Remember me</label>
            </div>
            <br/>

            <button type="button" style={{backgroundColor:'#A2DBB7', borderRadius:'5px', 
            boxShadow:'5px 5px grey'}} >Login</button>

            <button type="button" className="btn btn-link text-muted" style={{textDecoration:'none', marginLeft: '80%'}} 
            data-bs-toggle="modal" data-bs-target="#forgotPw">Forgot password</button>
            
            {/* </div> */}
        </form>
        </div>

        {/* <!--Modal--> */}
        <div className="modal fade" id="forgotPw" tabIndex="-1">
            <div className="modal-dialog"> 
                <div className="modal-content">
                {/* <!--start of modal header--> */}
                <div className="modal-header">
                    <h5 className="modal-title text-center" id="modalTitle">
                        Forgot Password</h5>
                        <button className="btn-close" 
                                type="button"
                                data-bs-dismiss="modal"
                                aria-label="close">
                        </button>  
                </div>
                {/* <!--End of modal header--> */}
                {/* <!--start of modal body--> */}
                <form name="ValidFormModal"> 
                <div className="modal-body">
                    <p className="fst-italic">Input your email address so we can send you a link to reset your password.</p>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="modalEmailUser">Email address:</span>
                        <input type="email" name="ValidForgetPass" id="modalemail" className="form-control"/>
                    </div>
                </div>
                {/* <!--End of modal body--> */}
                {/* <!--start of modal footer--> */}
                <div className="modal-footer">
                    <button className="btn" 
                            type="button" style={{backgroundColor:'#A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}}>
                            OK
                    </button>

                </div>
                </form>

                {/* <!--End of modal footer--> */}
                </div>
            </div>
        </div>
    </section>
    )
}
export default Login;