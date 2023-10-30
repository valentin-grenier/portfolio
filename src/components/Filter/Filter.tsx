"use client";

import React, { useState, useEffect } from "react";
import CardProject from "../Card/CardProject";
import { axiosInstance } from "@/axios/axios";
import Loader from "../Loader/Loader";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

interface ICardProject {
  id: number;
  slug: string;
  acf: {
    thumbnail: {
      url: string;
      alt: string;
    };
    stacks: string[];
  };
}

export default function Filter() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedStack, setSelectedStack] = useState("");

  async function getProjects() {
    const res = await axiosInstance.get(
      "projects?acf_format=standard&per_page=100"
    );
    const data = res.data;

    setProjects(data);
    // On load, do not apply filter on projects
    setFilteredProjects(data);
  }

  useEffect(() => {
    try {
      getProjects();
    } catch (error) {
      console.error("Error while fetching projects");
      throw error;
    }
  }, []);

  useEffect(() => {
    handleStackSelect();
  }, [selectedStack, handleStackSelect]);

  function handleStackSelect() {
    if (selectedStack === "") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter((project: ICardProject) =>
        project.acf.stacks.includes(selectedStack)
      );
      setFilteredProjects(filtered);
    }
  }

  return (
    <>
      <div className="flex gap-4 items-center mb-8">
        <span>
          <FilterAltIcon />
        </span>
        <button
          className={`transition-all px-2 py-1 rounded-md ${
            selectedStack === ""
              ? "bg-danube-800 text-danube-50 font-semibold"
              : "bg-danube-800/0"
          }`}
          onClick={() => setSelectedStack("")}
        >
          Tout
        </button>
        <button
          className={`transition-all px-2 py-1 rounded-md ${
            selectedStack === "WordPress"
              ? "bg-danube-800 text-danube-50 font-semibold"
              : "bg-danube-800/0"
          }`}
          onClick={() => setSelectedStack("WordPress")}
        >
          WordPress
        </button>
        <button
          className={`transition-all px-2 py-1 rounded-md ${
            selectedStack === "React"
              ? "bg-danube-800 text-danube-50 font-semibold"
              : "bg-danube-800/0"
          }`}
          onClick={() => setSelectedStack("React")}
        >
          React
        </button>
      </div>

      {projects.length === 0 ? (
        <div className="mx-auto">
          <Loader />
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredProjects.map((item: ICardProject) => (
            <CardProject
              image={item.acf.thumbnail.url}
              tags={item.acf.stacks.slice(0, 2)}
              slug={`projets/${item.slug}`}
              key={item.id}
            />
          ))}
        </div>
      )}
    </>
  );
}
