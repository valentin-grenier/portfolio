import Header from "./components/Header/Header";

export default function App() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <div className="bg-gradient-blue text-center text-light mx-2 p-4 rounded-xl h-80 flex flex-col justify-center">
          <h1 className="text-[28px] mb-6">Valentin Grenier, enchanté !</h1>
          <p className="font-title font-medium text-md">
            Développeur web front-end spécialisé sur{" "}
            <strong className="text-danube-300">React</strong> et{" "}
            <strong className="text-danube-300">WordPress</strong>
          </p>
          <Image />
        </div>
      </main>
    </>
  );
}
