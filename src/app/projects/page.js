/** @format */

import projects from "@/data/projects.json";

export default function ProjectsPage() {
	return (
		<div>
			{projects.map((project) => (
				<ProjectCard key={project.id} {...project} />
			))}
		</div>
	);
}
