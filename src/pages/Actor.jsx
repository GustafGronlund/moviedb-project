import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import * as api from "../services/TMDBAPI";

const Actor = () => {
  const { id } = useParams();

  const { data, isLoading, isError, error } = useQuery(
    ["single-actor", id],
    api.getActor
  );

  if (isLoading) {
    return "loading s0 sl0w... :(";
  }

  if (isError) {
    return "error :/";
  }

  console.log(data);

  return (
    <>
      <p>skådespelarsida</p>
    </>
  );
};

export default Actor;
