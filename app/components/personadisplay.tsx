import { motion } from "framer-motion";
import { Persona } from "@/app/types";

export default function PersonaDisplay(props: { persona: Persona }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <p className="text-3xl font-bold">{props.persona.vibe}</p>
            <br />
            <p className="text-xl">{`${props.persona.mainstream?.percent}% mainstream`}</p>
            <p className="text-lg">{props.persona.mainstream?.description}</p>
            <br />
            <p className="text-xl">{`${props.persona.energetic?.percent}% energetic`}</p>
            <p className="text-lg">{props.persona.energetic?.description}</p>
        </motion.div>
    );
}
