import {Link,Outlet} from 'react-router-dom'

const AdminNavbar = ()=>{
    return (
        <div>
            <nav className='navbar navbar-expand-lg bg-body-tertiary' data-bs-theme='dark'>
                <div className='container-fluid'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                          <Link className='nav-link active' to='/'>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='add'>Add Product</Link>

                        </li>

                    </ul>

                </div>

            </nav>
            <Outlet/>
        </div>
    )
}

export default AdminNavbar;