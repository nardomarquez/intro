export default function Header() {
  return (
    <header>
      <nav>
        <ul className="grid grid-cols-4 gap-6">
          {navigation.map((item, index) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="font-medium font-mono uppercase tracking-normal"
              >
                {index === 0 ? <h1>{item.name}</h1> : <>{item.name}</>}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

const navigation = [
  { name: "Nardo Marquez", href: "/" },
  { name: "About", href: "/about" },
  { name: "Lab", href: "/lab" },
  { name: "Contact", href: "/contact" },
];
