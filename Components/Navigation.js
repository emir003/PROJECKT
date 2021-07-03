import React from "react";
import "./Header.css";

import { Link } from "react-router-dom";

export default function Navigation() {
  const clubs = [
    {
      id: 1,
      name: "Fanat",
    },
    {
      id: 2,
      name: "Gidra",
    },
  ];

  return (
    <nav className="game_link">
      {clubs.map((club) => {
        return (
          <Link to={`/club/${club.id}`} className="link_club">
            {club.name}
          </Link>
        );
      })}
    </nav>
  );
}
