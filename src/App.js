import React from "react";
import Movies from "./components/Movies";
import ClickCount from "./components/ClickCount";
import {
  HashRouter,
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Menu from "./components/Menu";
import Youtube from "./components/Youtube";

const Home = () => {
  return <h2>홈 컨포넌트</h2>;
};
const About = () => {
  return <h2>개발자 소개</h2>;
};
const Expected = () => {
  return <h2>상영예정</h2>;
};
const Showing = () => {
  return <h2>상영중</h2>;
};
const Popular = () => {
  return <h2>유명한</h2>;
};
function App(props) {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/popular" element={<Movies apiPath="popular" />} />
        <Route path="/showing" element={<Movies apiPath="now_playing" />} />
        <Route path="/expected" element={<Movies apiPath="upcoming" />} />
        <Route path="/about" element={<About />} />
        <Route path="/youtube" element={<Youtube />} />
      </Routes>
    </BrowserRouter>
  );
  // return (

  //
  // );
}
export default App;
