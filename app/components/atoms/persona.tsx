import { motion } from "framer-motion";
import { Persona as Pers } from "@/utils/types";

export default function Persona(props: { persona: Pers }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-4"
        >
            <p className="text-4xl font-bold">{props.persona.vibe}</p>
            <br />
            <p className="text-3xl">{`${props.persona.mainstream?.percent}% mainstream`}</p>
            <p className="text-xl">{props.persona.mainstream?.description}</p>
            <br />
            <p className="text-3xl">{`${props.persona.energetic?.percent}% energetic`}</p>
            <p className="text-xl">{props.persona.energetic?.description}</p>
        </motion.div>
    );
}
