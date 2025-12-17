import Header from "../Header";

export default function HeaderExample() {
  return (
    <div className="bg-black min-h-[120px] relative">
      <Header onBookClick={() => console.log("Book clicked")} />
    </div>
  );
}
