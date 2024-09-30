import { StatArrowProps } from "@chakra-ui/react";
import Highlight from "@components/Highlight";
import { StackProps } from "@root/pages/stack";
import { motion } from "framer-motion";
import { FC } from "react";


export const Stack: FC<StackProps> = ({ stacks }: StackProps) => {
    return (
        <div>
            <div className="flex flex-col items-center text-white w-10/12 mx-auto">
                <h1 className="text-center text-3xl tracking-tightest">
                    Tech stacks I use
                </h1>
                <p className="text-justify mt-4">
                    Here's the tech stack I have used to build my projects.
                </p>
            </div>

            <StackSection stacks={stacks} />

            <div className="w-full"></div>
        </div>
    );
};

interface IStackCard {
    name: string;
    logo: string;
    lang: any;
}

const StackCard = ({ name, logo, lang }: IStackCard) => {
    return (
        <motion.div
            className={`bg-epic-black-light ${
                lang.hoverColor
            } flex flex-col rounded-md h-40 ${
                lang.name == "Github" ? "hover:cursor-pointer" : null
            }`}
            whileHover={{ y: -5 }}
            onClick={() => {
                window.location.href = lang.href;
            }}
        >
            <img
                src={`${logo}`}
                className="w-20 h-20 mx-auto mt-6 rounded-md"
            ></img>
            <p className="mx-auto my-auto text-white">{name}</p>
        </motion.div>
    );
};

interface StackSectionProp {
    stacks: StackItem[];
}

interface StackItem {
    name: string;
    logo: string; 
    category: string;
}

const StackSection = ({ stacks }: StackSectionProp) => {
	// console.log(stacks);
    return (
        <div
            className="w-full grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-5 gap-4 mt-8 md:mt-8
                px-8 sm:px-20 md:px-24 2xl:px-56"
        >
            {stacks
                .map((stack, key) => (
                    <StackCard
                        name={stack.name}
                        logo={stack.logo}
                        lang={stack}
                        key={key}
                    />
                ))}
        </div>
    );
}

export default Stack;
