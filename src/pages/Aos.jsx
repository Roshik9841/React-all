import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Aos() {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
    AOS.refresh();
  }, []);

  return (
    <div style={{ padding: "40px"}}>
      <div data-aos="zoom-in">
        <h1>Zoom In Animation</h1>
      </div>

      <div data-aos="fade-right" style={{ marginTop: "300px" }}>
        <p>This text fades from the right!</p>
      </div>

      <div data-aos="flip-left" style={{ marginTop: "300px" }}>
        <button>Click me</button>
      </div>
    </div>
  );
}

export default Aos;
