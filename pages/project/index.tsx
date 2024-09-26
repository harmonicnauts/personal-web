import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";

import { PageProps } from "@interfaces/PageProps";
import Header from "@components/Layout/Header";
import Footer from "@components/Layout/Footer";
import { Placeholder } from "@components/Placeholder";
import { ProjectCard } from "@components/Project/ProjectCard";
import { prisma } from "@root/libs/prisma";

export type ProjectProps = InferGetServerSidePropsType<typeof getServerSideProps>;

const Project: NextPage<PageProps> = ({projects} : ProjectProps) => {
	return (
		<div className="relative">
			<Header />
			{/* <Placeholder /> */}
			<ProjectCard projects={projects}/>
			<Footer />
		</div>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const projects = await prisma.projects.findMany();

	return {
		props : {projects}
	}
}

export default Project;