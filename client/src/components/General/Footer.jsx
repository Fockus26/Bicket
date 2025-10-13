import data from "./Footer/data";

function Footer() {
  return (
    <footer id="footer">
      <ul>
        {data.navFooter.map((data, index) => (
          <li key={index}>
            <a href={data.url}>{data.name}</a>
          </li>
        ))}
      </ul>

      <ul>
        {data.socialMedia.map((data, index) => (
          <li key={index}>
            <a target="blank" href={data.url}>
              <i className={`fa-brands fa-${data.name}`} />
            </a>
          </li>
        ))}
      </ul>

      <span> Bicket &copy; {new Date().getFullYear()} </span>
    </footer>
  );
}

export default Footer;
