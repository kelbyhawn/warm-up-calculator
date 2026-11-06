export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>
        ©{year} • Made by{" "}
        <a href="https://kelbyhawn.com" rel="noreferrer">
          Kelby Hawn
        </a>
      </p>
    </footer>
  );
}
