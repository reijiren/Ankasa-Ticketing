import React from 'react'

const LoginAdmin = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
			<div className="card">
				<div className="card-body">
					{/* <form onSubmit={(e) => onSubmit(e)}> */}
					<form>
						<div className="form-group">
							<label htmlFor="username"></label>
							<input
								type="text"
								placeholder="username"
								className="form-control"
								// onChange={(e) =>
								// 	setForm({ ...form, username: e.target.value })
								// }
                ></input>
						</div>

						<div className="form-group">
							<label htmlFor="password"></label>
							<input
								type="text"
								placeholder="password"
								className="form-control"
								// onChange={(e) =>
								// 	setForm({ ...form, password: e.target.value })
								// }
                ></input>
						</div>
						<button type="submit" className="btn btn-primary">
							SUbmit
						</button>
					</form>
				</div>
			</div>
		</div>
  )
}

export default LoginAdmin