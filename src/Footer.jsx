const Footer = (props) => {
    let copyright = String.fromCodePoint(169);
    return <footer>{copyright} {props.copy}</footer>
}
export default Footer;

/* You can generate special characters (UTF-16 characters) in ES6 using String.fromCodePoint(); */