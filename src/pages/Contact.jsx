import React from "react";

const Contact = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: "5%",
          flexWrap: "wrap",
        }}
      >
        <a
          style={{ color: "black", textDecoration: "none" }}
          target="_blank"
          href="https://github.com/Liraamm"
        >
          GitHub
        </a>
        <a
          style={{ color: "black", textDecoration: "none" }}
          target="_blank"
          href="https://t.me/liraam"
        >
          Telegram
        </a>
        <a
          style={{ color: "black", textDecoration: "none" }}
          target="_blank"
          href="https://instagram.com/_liram?igshid=OGQ5ZDc2ODk2ZA=="
        >
          Instagram
        </a>
        <a
          style={{ color: "black", textDecoration: "none" }}
          target="_blank"
          href="https://www.threads.net/@_liram"
        >
          Threads
        </a>
      </div>

      <img
        style={{ marginTop: "3%" }}
        src="https://media.tenor.com/hnZRuZhgPSsAAAAd/cat-explosion.gif"
        alt=""
        width={500}
      />
    </div>
  );
};

export default Contact;
