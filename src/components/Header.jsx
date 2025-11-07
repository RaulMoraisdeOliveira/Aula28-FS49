
export default function Header({ children, corFundo }) {

    const style = corFundo;

    return <header className={style}>{children}</header>;
}