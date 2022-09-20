import "./Menu.css";
const Menu = () => {
  return (
    <div className="menu">
      <nav>
        <ul>
          <li className="home">
            <a href="/">🏠홈으로</a>
          </li>
          <li className="popular">
            <a href="/popular">😎인기영화</a>
          </li>
          <li className="showing">
            <a href="/showing">🎬상영중</a>
          </li>
          <li className="expected">
            <a href="/expected">🎞개봉예정</a>
          </li>
          <li>
            <a href="/about">💻어바웃 어스...</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Menu;
