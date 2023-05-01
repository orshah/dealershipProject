import "./navigation.style.css";

const Navigation = () => {
  return (
    <nav class="navigation">
      <p class="logo">REACT</p>
      <ul class="top-menu">
        <li>
          <a href="#">Lorem</a>
        </li>
        <li>
          <a href="#">Ipsum</a>
        </li>
        <li class="active">
          <a href="#">Dolor</a>
        </li>
        <li>
          <a href="#">Sit</a>
        </li>
        <li>
          <a href="#">Amet</a>
        </li>
        <li>
          <a href="#">Consectetur</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
