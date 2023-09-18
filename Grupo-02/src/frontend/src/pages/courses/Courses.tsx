import { useState, useEffect } from "react";
import Modal from "react-modal";
import { fetchCourses } from "../../api/services/fetch-courses";
import { CourseEntity } from "../../api/entities/course-entity";

export default function Courses() {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedProject, setSelectedProject] = useState<CourseEntity | null>(
    null
  );
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [projects, setProjects] = useState<CourseEntity[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const fetchedProjects = await fetchCourses();
        setProjects(fetchedProjects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  const filteredProjects = projects.filter(
    (project) => !selectedCourse || project.courseType === selectedCourse
  );

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleProjectSelect = (project: CourseEntity) => {
    setSelectedProject(project);
    openModal();
  };

  return (
    <div style={{ position: "relative", padding: "20px" }}>
      <div
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          display: "flex",
          alignItems: "center",
        }}
      >
        <label htmlFor="courseSelect" style={{ marginRight: "10px" }}>
          Filtrar por curso:
        </label>
        <select
          id="courseSelect"
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
          style={{ padding: "5px", borderRadius: "5px" }}
        >
          <option value="">Todos os cursos</option>
          {projects.map((project) => (
            <option key={project.id} value={project.courseType}>
              {project.courseType}
            </option>
          ))}
        </select>
      </div>
      <h2 style={{ marginBottom: "10px" }}>Projetos gerais</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {filteredProjects.map((project, index) => (
          <li
            key={project.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px",
              borderBottom: "1px solid #ddd",
              backgroundColor: index % 2 === 0 ? "#ffffff" : "#f4f4f4",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span>{project.director}</span>
              <span style={{ color: "#888", textAlign: "center" }}>
                {project.director}
              </span>
            </div>
            <button
              style={{
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "5px",
                padding: "5px 10px",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
              onClick={() => handleProjectSelect(project)}
            >
              Analisar
            </button>
          </li>
        ))}
      </ul>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Detalhes do projeto"
        style={{
          content: {
            padding: "20px",
            backgroundColor: "#fff",
            borderRadius: "5px",
            maxWidth: "600px",
            margin: "auto",
            display: "flex",
            flexDirection: "column",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1000,
          },
        }}
      >
        {selectedProject && (
          <div>
            <h2
              style={{
                textAlign: "center",
                marginBottom: "20px",
                fontSize: "24px",
              }}
            >
              Detalhes do projeto
            </h2>
            <p>
              <span style={{ fontWeight: "bold" }}>Tipo do curso:</span>{" "}
              {selectedProject.courseType}
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>Coordenador do Curso:</span>{" "}
              {selectedProject.director}
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>Statys:</span>{" "}
              {selectedProject.isActive}
            </p>

            <div style={{ marginTop: "auto", textAlign: "center" }}>
              <button
                style={{
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  padding: "10px 20px",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                  marginTop: "20px",
                }}
                onClick={() => {
                  closeModal();
                  setSelectedProject(null);
                }}
              >
                Fechar
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
