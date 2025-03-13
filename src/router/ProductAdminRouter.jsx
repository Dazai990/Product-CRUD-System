import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AdminNavbar from './AdminNavbar';
import ProductView from '../components/ProductView';
import ProductAdd from '../components/ProductAdd';
import ProductEdit from '../components/ProductEdit';

const ProductAdminRouter = ()=>{
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<AdminNavbar/>}>
            <Route index element={<ProductView/>}/>
            <Route path='add' element={<ProductAdd/>}/>
            <Route path='edit/:nm/:br/:pr' element={<ProductEdit/>}/>
            </Route>
        </Routes>
        </BrowserRouter>
    );
}

export default ProductAdminRouter;