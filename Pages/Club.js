import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchClub } from "../store/actions/club";
import { useEffect } from "react";

export default function Club() {
  let { clubs } = useSelector((state) => state.club);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchClub());
  }, []);     

  console.log(clubs);

  return <div></div>;
}
