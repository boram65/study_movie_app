import "./Menu.css";
const Menu = () => {
  return (
    <div className="menu">
      <nav>
        <ul>
          <li className="home">
            <a href="/">π νμΌλ‘</a>
          </li>
          <li className="popular">
            <a href="/popular">πμΈκΈ°μν</a>
          </li>
          <li className="showing">
            <a href="/showing">π¬μμμ€</a>
          </li>
          <li className="expected">
            <a href="/expected">πκ°λ΄μμ </a>
          </li>
          <li>
            <a href="/about">π»μ΄λ°μ μ΄μ€...</a>
          </li>
          <li>
            <a href="/youtube">πΌμ νλΈ</a>
          </li>
          <li>
            <a href="/tailwind">π§΅tailwind</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Menu;
