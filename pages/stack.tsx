import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";

import { PageProps } from "@interfaces/PageProps";
import Header from "@components/Layout/Header";
import Footer from "@components/Layout/Footer";
import StackComponent from "@components/Stack";
import { prisma } from "@root/libs/prisma";

export type StackProps = InferGetServerSidePropsType<typeof getServerSideProps>;


const Stack: NextPage<PageProps> = ({ stacks }: StackProps) => {
	return (
		<div className="relative">
			<Header />
			<StackComponent stacks={stacks}/>
			<Footer />
		</div>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const stacks = await prisma.stack.findMany();
    return {
        props: { stacks },
    };
};

export default Stack;
