
import './BlogApp.css';
import Blog from './Blog_Components/Blog';
// import Footer from './Blog_components/Footer/Footer' ;
// import Navbar from './Blog_components/NavBar/Navbar';
// import CategoryBar from './Blog_components/NavBar/CategoryBar';
// import Tabs from './Blog_components/Tabs';

function BlogApp() {
  return (
    <div>
      {/* <Navbar  />
      <CategoryBar /> */}

      
     <h1>Blog Page</h1>
     <Blog />
     {/* <Tabs />
     <Footer /> */}

    </div>
  );
}

export default BlogApp;
