import './App.css';
import { Login } from './components/login.component/login.component.js';
import { MainComponent } from './components/main.component/main.component.js';
import { NotFoundPageComponent } from './components/notFound/notFoundPage.component.js';
import { Registration } from './components/registration.component/registration.component.js';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'
import { AuthorizedWrapper, NonAuthorizedWrapper } from './components/wrapper/wrapper.component.js';
import { AllPostsComponent } from './components/allPosts.component/allPosts.component.js';
import { Post } from './components/post.component/post.component.js';
import { PostPage } from './components/postPage.component/postPage.component.js';
import { AuthorsComponent } from './components/allPosts.component/authors.component.js';
import { AuthorPostsComponent } from './components/allPosts.component/authorPosts.component.js';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={NonAuthorizedWrapper}>
          <Route index Component={MainComponent} />
          <Route path='/posts' Component={AllPostsComponent} />
          <Route path='/posts/:postId' Component={PostPage} />
          <Route path="/authors" element={<AuthorsComponent />} />
          <Route path="/authors/:id" element={<AuthorPostsComponent />} />
        </Route>
        <Route path='/page-404' Component={NotFoundPageComponent} />
        <Route path='/*' Component={NotFoundPageComponent} />
        <Route path='/' Component={AuthorizedWrapper}>
          <Route path='/registration' Component={Registration} />
          <Route path='/login' Component={Login} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
