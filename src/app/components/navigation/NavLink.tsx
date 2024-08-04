
type NavLinkProps = {
  text: string,
  href: string,
}

export default function NavLink(props: NavLinkProps) {
  return (
    <a
      href={props.href}
      className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
    >
      {props.text}
    </a>
  );
}
